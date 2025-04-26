export default function ProspectLeads() {
  const leads = [
    { name: "Wade Warren", stage: "Initial Inquiry", image: "./images/Avatar.svg" },
    { name: "Ava Wright", stage: "Initial Inquiry", image: "/images/Avatar (1).svg" },
    { name: "Cody Fisher", stage: "Initial Inquiry", image: "/images/Avatar (2).svg" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow font-inter">
      <h2 className="text-sm font-semibold mb-4 text-black">
        Prospect Leads
      </h2>
      <ul className="space-y-4">
        {leads.map((lead, index) => (
          <li key={index} className="bg-[#F6F7FB] p-2 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={lead.image}
                alt={lead.name}
                className="w-8 h-8 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-sm text-black">{lead.name}</p>
              </div>
            </div>
            <p className="text-[#455468] text-sm">Stage: {lead.stage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}