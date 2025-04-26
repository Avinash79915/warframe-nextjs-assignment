import { FaArrowTrendUp } from "react-icons/fa6"; 

export default function FinancialWellbeing() {
  return (
    <div className="bg-white p-6 rounded-lg shadow font-inter">
      <h2 className="text-sm font-semibold mb-4 text-black">
        Financial Wellbeing
      </h2>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center mb-2">
            <span className="text-2xl font-bold text-black">20</span>
          </div>
          <span className="text-[#455468] text-sm">Total Franchises</span>
        </div>
        <div className="flex items-center space-x-1 border-2 border-green-600 text-green-600 rounded-full px-2 py-0.5 text-sm font-bold">
          <FaArrowTrendUp className="w-4 h-4" />
          <span>2.1%</span>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <div className="bg-[#F6F7FB] p-4 rounded-lg flex-1 text-center">
          <span className="text-[#455468] font-semibold text-sm">Target</span>
          <p className="text-black mt-1 font-semibold">$500,000</p>
        </div>
        <div className="bg-[#F6F7FB] p-4 rounded-lg flex-1 text-center">
          <span className="text-[#455468] font-semibold text-sm">Current</span>
          <p className="text-black mt-1 font-semibold">$450,000</p>
        </div>
      </div>
    </div>
  );
}