"use client";

import { useEffect, useState } from "react";
import { Input } from "../../../components/elements/input";
import { Select } from "../../../components/elements/select";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface Bootcamp {
  id: number;
  name: string;
  idCollection: number;
  image: string;
  description: string;
}

export function AddCertificationForm() {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("AvalCertify");
  const [bootcampsData, setBootcampsData] = useState<Bootcamp[]>([]);
  //const options = ["Media", "Básica", "Pregrado", "Especialización", "Master", "Bootcamp"];
  const [formData, setFormData] = useState({
    institutionName: "Avalanche University",
    courseName: "",
    description: "",
    imageUrl: "",
    idCollection: 0,
    studentName: "",
    studentLastName: "",
    studentId: "",
    selectedOption: "",
    studentAddress: "",
  });

  // Llamada a una API para obtener los datos de los bootcamps y establecerlos en el estado
  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const response = await fetch("https://66492eda4032b1331bed6f1b.mockapi.io/api/Bootcamps");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBootcampsData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBootcamps();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBootcamp = bootcampsData.find(bootcamp => bootcamp.name === event.target.value);
    if (selectedBootcamp) {
      setFormData(prevState => ({
        ...prevState,
        courseName: selectedBootcamp.name,
        description: selectedBootcamp.description,
        imageUrl: selectedBootcamp.image,
        idCollection: selectedBootcamp.idCollection, // Convert idCollection to number
      }));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateButtonClick = async () => {
    const metadata = {
      name: formData.courseName,
      description: formData.description,
      image: formData.imageUrl,
      attributes: [
        {
          trait_type: "Institution Name",
          value: formData.institutionName,
        },
        {
          trait_type: "ID Collection",
          value: formData.idCollection,
        },
        {
          trait_type: "Student Name",
          value: formData.studentName,
        },
        {
          trait_type: "Student Last Name",
          value: formData.studentLastName,
        },
        {
          trait_type: "Student ID",
          value: formData.studentId,
        },
      ],
    };

    console.log("Metadata:", metadata);
    try {
      const formDataIPFS = new FormData();
      formDataIPFS.append("file", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
      formDataIPFS.append("pinataMetadata", JSON.stringify({ name: "Metadata JSON" }));

      const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3YmZiZDU5My1kMjFlLTQwNGYtOTMzMi03ZDE2MjFhZTk5NmEiLCJlbWFpbCI6IndpbGxpYW1kYXZpZHZhc3F1ZXpwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI2OTVmZjcyNTAyNGMwMGJmNTlhNSIsInNjb3BlZEtleVNlY3JldCI6ImQxZDBmMzcxYThkMmE4NWQzYWE3YWZlYjVmMjllNTdhMDUzNmViNzU3YjE1YzNiYWIwNzU3Mjg4MWY4ZjA5MzMiLCJpYXQiOjE3MTYxMzkxMzN9.qcD2x-kMt0LqcL6ZsNASJkzt2friks72_eWIFtu_q2o`,
        },
        body: formDataIPFS,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseIPFSData = await response.json();
      console.log("Metadata uploaded:", responseIPFSData.IpfsHash);
      //2. emitir NFT
      try {
        await writeYourContractAsync({
          functionName: "mintCertificate",
          args: [formData.studentAddress, responseIPFSData.IpfsHash, BigInt(formData.idCollection)],
          //value: parseEther("0.0"),
        });
      } catch (e) {
        console.error("Error setting greeting:", e);
      }
    } catch (error) {
      console.error("Error uploading to Pinata:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative max-w-screen-md w-full mx-4 sm:mx-auto">
        <div className="h-[5rem] w-[7.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
          <div className="flex items-center justify-center space-x-2">
            <p className="my-0 text-sm">Create Certificate</p>
          </div>
        </div>
        <div className="p-5 divide-y divide-base-300">
          <div className="flex flex-col gap-3 py-5 first:pt-0 last:pb-1">
            <p className="font-medium my-0 break-words">Let s Create a new Certification</p>
            <Input
              placeholder="Institution Name"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleInputChange}
            />
            <Select
              placeholder="Select a Course"
              options={bootcampsData.map(bootcamp => bootcamp.name)}
              selectedOption={formData.courseName}
              handleSelectChange={handleSelectChange}
            />
            <Input
              placeholder="Course Name"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
            <Input placeholder="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} />
            <Input
              placeholder="ID Collection"
              name="idCollection"
              value={formData.idCollection.toString()} // Convert idCollection to string
              onChange={handleInputChange}
            />
            <label>Student Data:</label>
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <Input
                  placeholder="Student Name"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-1/2">
                <Input
                  placeholder="Student Last Name"
                  name="studentLastName"
                  value={formData.studentLastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <Input placeholder="Student ID" name="studentId" value={formData.studentId} onChange={handleInputChange} />
            <Input
              placeholder="Student Address"
              name="studentAddress"
              value={formData.studentAddress}
              onChange={handleInputChange}
            />
            <div className="flex justify-between gap-2 flex-wrap">
              <div className="flex-grow w-4/5"></div>
              <button className="btn btn-secondary btn-sm" onClick={handleCreateButtonClick}>
                Create 📡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
