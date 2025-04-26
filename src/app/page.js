"use client";

import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/ui/features/sidebar/sidebar";
import Navbar from "./components/ui/navbar/navbar";// import Loader component
import Loader from "./components/ui/Loader";
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint if needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // Match loader time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />; // Show loader until loading is complete
  }

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
