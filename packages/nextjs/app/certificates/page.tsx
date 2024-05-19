"use client";

import { Cards } from "./components/cards";
import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Certificates: NextPage = () => {
  const { data: totalCounter } = useScaffoldReadContract({
    contractName: "AvalCertify",
    functionName: "getNFTsByOwner",
    args: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"],
  });

  console.log(totalCounter);

  return (
    <div className="mx-14 mt-5">
      <div className="font-bold text-xl mb-2">My Certificates</div>
      <br />
      <div className="flex justify-center px-4 md:px-0 mx-20">
        <div className="grid grid-cols-4 gap-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
