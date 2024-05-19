import { InfoBox } from "./components/InfoBox";
import { AddCertificationForm } from "./components/addCertificate";
import { AddUsersForm } from "./components/addUsers";
import type { NextPage } from "next";
import { BugAntIcon } from "@heroicons/react/24/outline";

const Dashboard: NextPage = () => {
  return (
    <div className="mx-20">
      <br />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-4 w-1/2">
            <div className="w-1/2">
              <InfoBox cardTitle="Issued certificates" displayNumber="50" icon={BugAntIcon} />
            </div>
            <div className="w-1/2">
              <InfoBox cardTitle="Certificates awaiting validation" displayNumber="10" icon={BugAntIcon} />
            </div>
          </div>
          <div className="flex flex-row gap-4 w-1/2">
            <div className="w-1/2">
              <InfoBox cardTitle="Your Certificates" displayNumber="3" icon={BugAntIcon} />
            </div>
            <div className="w-1/2">
              <InfoBox cardTitle="Number of Users" displayNumber="1234" icon={BugAntIcon} />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-1/2">
            {" "}
            <AddCertificationForm />{" "}
          </div>
          <div className="w-1/2">
            {" "}
            <AddUsersForm />{" "}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-1/2">{/* Your left-side content will go here */}</div>
          <div className="w-1/2">{/* Your right-side content or components can go here */}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
