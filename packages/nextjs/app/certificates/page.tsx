"use client";

import { Cards } from "./components/cards";
import type { NextPage } from "next";
//import { useEffect, useState } from "react";
//import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Certificates: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  //const [nfts, setNfts] = useState([]);
  /*
  const { data, error, isLoading } = useScaffoldReadContract({
    contractName: "AvalCertify",
    functionName: "getNFTsByOwner",
    args: [connectedAddress],
  });

  useEffect(() => {
    if (data) {
      console.log("getNFTsByOwner", data);
      //setNfts(data);
    }
  }, [data]);
*/

  return (
    <div className="mx-14 mt-5">
      <div className="font-bold text-xl mb-2 flex justify-center items-center">
        My Certificates <Address address={connectedAddress} />
      </div>
      <br />
      <div className="flex justify-center px-4 md:px-0 mx-20">
        <div className="grid grid-cols-4 gap-4">
          {/*isLoading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div>No tienes certificados asignados! </div>
            ) : (
              <Cards/>
              //nfts.map((nft, index) => (
              //  <Cards/> //key={index} nft={nft} />
              //))
            )*/}

          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
