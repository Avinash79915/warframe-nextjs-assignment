import { FaArrowTrendUp } from "react-icons/fa6"; // Import the upward trend icon

export default function FranchiseStats() {
  return (
    <div className="bg-white p-6 rounded-lg shadow font-inter">
      <h2 className="text-sm font-semibold mb-4 text-black">
        Total Franchises Onboard
      </h2>
      <div className="flex items-center justify-between mb-4">
        {/* Left Side: Number and Percentage */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold text-black">14</span>
          <div className="flex items-center space-x-1 border-2 border-green-600 text-green-600 rounded-full px-2 py-0.5 text-sm font-bold">
            <FaArrowTrendUp className="w-4 h-4" /> {/* Replaced SVG with React icon */}
            <span>7.4%</span>
          </div>
        </div>
        {/* Right Side: Avatars Image */}
        <img
          src="/images/Avatars.png"
          alt="Avatars"
          className="w-40 h-10 object-contain"
        />
      </div>
      <div className="w-full bg-white rounded-xl h-2.5 flex overflow-hidden px-0.5 space-x-2">
        {/* Blue segment */}
        <div
          className="bg-[#1F7EAA] h-full rounded-sm"
          style={{ width: "30%" }}
        ></div>
        {/* Red segment */}
        <div
          className="bg-[#2FBDFF] h-full rounded-sm"
          style={{ width: "30%" }}
        ></div>
        {/* Green segment */}
        <div
          className="bg-[#97DEFF] h-full rounded-sm"
          style={{ width: "40%" }}
        ></div>
      </div>
      <ul className="mt-10 space-y-2 text-sm font-medium">
        <li className="flex items-center justify-between text-[#455468]">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[#1F7EAA] rounded-xs mr-2"></span>
            Stage 1 (Initial Inquiry)
          </div>
          <span className="flex items-center justify-center text-black text-lg font-bold">
            01
          </span>
        </li>
        <li className="flex items-center justify-between text-[#455468]">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[#2FBDFF] rounded-xs mr-2"></span>
            Stage 2 (Document Submission)
          </div>
          <span className="flex items-center justify-center text-black text-lg font-bold">
            07
          </span>
        </li>
        <li className="flex items-center justify-between text-[#455468]">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-[#97DEFF] rounded-xs mr-2"></span>
            Stage 3 (Training)
          </div>
          <span className="flex items-center justify-center text-black text-lg font-bold">
            05
          </span>
        </li>
      </ul>
    </div>
  );
}