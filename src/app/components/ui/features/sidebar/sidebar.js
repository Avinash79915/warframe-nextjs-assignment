"use client";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Start closed by default

  const menuItems = [
    "Home",
    "Stages & Checklist",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stack",
    "Targets",
    "Zee Sales Targets",
    "MAI Settings",
  ];

  // Open sidebar on desktop by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // md breakpoint
      } else {
        setIsOpen(false);
      }
    };

    handleResize(); // Set initial state on page load
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger for Mobile */}
      <label className="md:hidden fixed top-4 left-4 z-50">
        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <input
            className="hidden peer"
            type="checkbox"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]" />
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]" />
        </div>
      </label>

      {/* Sidebar */}
      <aside
  className={`fixed left-0 top-0 h-full w-64 bg-[#11455D] text-white p-4 pt-20 z-40
    ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    transition-transform duration-300 ease-in-out md:transition-none
  `}
>

        <ul className="space-y-2 font-dmsans">
          {menuItems.map((item) => (
            <li
              key={item}
              className="p-2 rounded cursor-pointer font-light text-[#91B2C1] hover:bg-white hover:text-[#334960] transition"
            >
              {item}
            </li>
          ))}

          <li className="p-2 rounded cursor-pointer font-light text-[#91B2C1] hover:bg-white hover:text-[#334960] transition flex items-center justify-between">
            <span>Pending Questions</span>
            <span className="ml-2 bg-white rounded-full px-2 py-1 text-xs text-[#11455D]">
              3
            </span>
          </li>
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
