export default function Insights() {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-sm font-medium font-inter">
      <h2 className="text-sm font-semibold mb-4 text-black">Key Insights & Feedback</h2>

      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center mb-2">
            <span className="text-2xl font-bold text-black">10%</span>
          </div>
          <span className="text-[#455468]">Sales Growth</span>
        </div>

        <div className="flex flex-col items-center justify-center">
        
          <img
            src="/images/image14.svg" 
            alt="Top Performer Icon"
            className="w-12 h-12 mb-2" // Image size and margin bottom
          />
          {/* Top Performer Button */}
          <button className="flex items-center space-x-2 border border-[#BAE9FF] text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
            <span className="text-[#279DD4]">Top Performer</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow font-inter">
        <h3 className="text-black text-sm font-semibold mb-3">Feedback</h3>
        <ul className="space-y-2 text-sm text-[#455468]">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 bg-[#D9D9D9] rounded-full flex-shrink-0"></span>
            <p>Franchisees are requesting more detailed training materials.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
