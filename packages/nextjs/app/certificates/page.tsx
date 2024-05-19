import { Cards } from "./components/cards";
import type { NextPage } from "next";

const Certificates: NextPage = () => {
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
