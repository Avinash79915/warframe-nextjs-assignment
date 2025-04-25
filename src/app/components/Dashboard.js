import ProgressCircle from "./ui/features/dashboard/ProgressCircle";
import FranchiseStats from "./ui/features/dashboard/FranchiseStats";
import FinancialWellbeing from "./ui/features/dashboard/FinancialWellbeing";
import ProspectLeads from "./ui/features/dashboard/ProspectLeads";
import PendingQuestions from "./ui/features/dashboard/PendingQuestions";
import Insights from "./ui/features/dashboard/Insights";
import ChatWelcome from "./ui/features/dashboard/ChatWelcome";
import Navbar from "./ui/navbar/navbar";  
export default function Dashboard() {
  return (
    
    <div className="space-y-6 font-inter">
     
      {/* Responsive grid layout with left-side wider box */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6">
        {/* Left - Account Progress */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-sm font-semibold mb-4 text-center text-black">
            Account Progress
          </h2>
          <ProgressCircle progress={85} />
          <div className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow text-sm">
              <h3 className="text-black">Steps Completed</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center justify-between text-[#455468]">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#D9D9D9] rounded-full mr-2"></span>
                    Profile Setup
                  </div>
                  <span className="w-4 h-4 flex items-center justify-center bg-[#0A9952] text-white text-xs rounded-full">
                    ✓
                  </span>
                </li>
                <li className="flex items-center justify-between text-[#455468]">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#D9D9D9] rounded-full mr-2"></span>
                    Initial Training
                  </div>
                  <span className="w-4 h-4 flex items-center justify-center bg-[#0A9952] text-white text-xs rounded-full">
                    ✓
                  </span>
                </li>
                <li className="flex items-center justify-between text-[#455468]">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#D9D9D9] rounded-full mr-2"></span>
                    Legal Documents
                  </div>
                  <span className="w-4 h-4 flex items-center justify-center bg-[#0A9952] text-white text-xs rounded-full">
                    ✓
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow text-sm mt-4">
              <h3 className="text-black">Steps Remaining</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center justify-between text-[#455468]">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#D9D9D9] rounded-full mr-2"></span>
                    Financial Integration
                  </div>
                  <span className="w-4 h-4 flex items-center justify-center bg-[#0A9952] text-white text-xs rounded-full">
                    ✓
                  </span>
                </li>
                <li className="flex items-center justify-between text-[#455468]">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#D9D9D9] rounded-full mr-2"></span>
                    Final Review
                  </div>
                  <span className="w-4 h-4 flex items-center justify-center bg-[#0A9952] text-white text-xs rounded-full">
                    ✓
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Grid of 4 Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <FranchiseStats />
          <Insights />
          <FinancialWellbeing />
          <ProspectLeads />
        </div>
      </div>

      {/* Responsive Grid Layout with Square and Rectangular Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left - Square Box (PendingQuestions) */}
        <div className="w-full h-auto md:h-[400px]">
          <PendingQuestions />
        </div>

        {/* Right - Rectangular Box (ChatWelcome) */}
        <div className="w-full h-auto md:h-[400px]">
          <ChatWelcome />
        </div>
      </div>
    </div>
  );
}