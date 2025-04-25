"use client";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/ui/features/sidebar/sidebar";
import Navbar from "./components/ui/navbar/navbar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onToggle={setIsSidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen && !isMobile ? "ml-64" : "ml-0"
        }`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
