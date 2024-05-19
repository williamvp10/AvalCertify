"use client";

import { useState } from "react";
import { Input } from "../../../components/elements/input";
import { Select } from "../../../components/elements/select";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export function AddUsersForm() {
  const options = ["issuers", "signers"];
  const [address, setAddress] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("AvalCertify");

  const handleAddButtonClick = async () => {
    console.log("Address:", address);
    console.log("Selected option:", selectedOption);

    try {
      await writeYourContractAsync({
        functionName: "addIssuer",
        args: [address],
        //value: parseEther("0.0"),
      });
    } catch (e) {
      console.error("Error setting greeting:", e);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative max-w-screen-md w-full mx-4 sm:mx-auto">
        <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
          <div className="flex items-center justify-center space-x-2">
            <p className="my-0 text-sm">Add User</p>
          </div>
        </div>

        <div className="p-5 divide-y divide-base-300">
          <div className="flex flex-col gap-3 py-5 first:pt-0 last:pb-1">
            <p className="font-medium my-0 break-words">Address</p>
            <Input placeholder="Wallet Address" value={address} onChange={e => setAddress(e.target.value)} />
            <Select options={options} selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
            <div className="flex justify-between gap-2 flex-wrap">
              <div className="flex-grow w-4/5"></div>
              <button className="btn btn-secondary btn-sm" onClick={handleAddButtonClick}>
                Add 📡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
