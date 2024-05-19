"use client";

import { useState } from "react";
import { Input } from "../../../components/elements/input";
import { Select } from "../../../components/elements/select";

export function AddCertificationForm() {
  const options = ["Media", "Básica", "Pregrado", "Especialización", "Master", "Bootcamp"];
  const [institutionName, setInstitutionName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleCreateButtonClick = () => {
    console.log("Institution Name:", institutionName);
    console.log("Course Name:", courseName);
    console.log("Description:", description);
    console.log("Image URL:", imageUrl);
    console.log("Selected option:", selectedOption);
    console.log("Student Name:", studentName);
    console.log("Student Last Name:", studentLastName);
    console.log("Student ID:", studentId);
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
            <p className="font-medium my-0 break-words">Lets Create a new Certification</p>
            <Input
              placeholder="Institution Name"
              value={institutionName}
              onChange={e => setInstitutionName(e.target.value)}
            />
            <Input placeholder="Course Name" value={courseName} onChange={e => setCourseName(e.target.value)} />
            <Input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <Select options={options} selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
            <Input placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />

            <label>Student Data:</label>
            <div className="flex flex-row gap-4">
              <div className="w-1/2">
                <Input placeholder="Student Name" value={studentName} onChange={e => setStudentName(e.target.value)} />
              </div>
              <div className="w-1/2">
                <Input
                  placeholder="Student Last Name"
                  value={studentLastName}
                  onChange={e => setStudentLastName(e.target.value)}
                />
              </div>
            </div>
            <Input placeholder="Student ID" value={studentId} onChange={e => setStudentId(e.target.value)} />

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
