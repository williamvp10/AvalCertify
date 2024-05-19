import type { NextPage } from "next";

const Signers: NextPage = () => {
  return (
    <div className="flex justify-center px-4 md:px-0 mx-20 mt-5">
      <br />
      <br />
      <br />
      <div className="overflow-x-auto w-full shadow-2xl rounded-xl">
        <table className="table text-xl bg-base-100 table-zebra w-full md:table-md table-sm">
          <thead>
            <tr className="rounded-xl text-sm text-base-content">
              <th className="bg-primary">Transaction Hash</th>
              <th className="bg-primary">Function Called</th>
              <th className="bg-primary">Block Number</th>
              <th className="bg-primary">Time Mined</th>
              <th className="bg-primary">Status</th>
              <th className="bg-primary">Sign</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover text-sm">
              <td className="w-1/12 md:py-4">1</td>
              <td className="w-2/12 md:py-4">2</td>
              <td className="w-1/12 md:py-4">3</td>
              <td className="w-2/1 md:py-4">4</td>
              <td className="w-2/12 md:py-4">5</td>
              <td className="w-2/12 md:py-4">
                <button className="btn btn-secondary btn-sm">Sign 📡</button>
              </td>
            </tr>
            <tr className="hover text-sm">
              <td className="w-1/12 md:py-4">1</td>
              <td className="w-2/12 md:py-4">2</td>
              <td className="w-1/12 md:py-4">3</td>
              <td className="w-2/1 md:py-4">4</td>
              <td className="w-2/12 md:py-4">5</td>
              <td className="w-2/12 md:py-4">
                <button className="btn btn-secondary btn-sm">Sign 📡</button>
              </td>
            </tr>
            <tr className="hover text-sm">
              <td className="w-1/12 md:py-4">1</td>
              <td className="w-2/12 md:py-4">2</td>
              <td className="w-1/12 md:py-4">3</td>
              <td className="w-2/1 md:py-4">4</td>
              <td className="w-2/12 md:py-4">5</td>
              <td className="w-2/12 md:py-4">
                <button className="btn btn-secondary btn-sm">Sign 📡</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Signers;
