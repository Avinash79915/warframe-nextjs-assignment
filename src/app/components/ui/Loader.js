"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/30 backdrop-blur-md z-50">
      <div className="relative">
        <div className="relative w-32 h-32">
          {/* First spinning circle */}
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-cyan-400 border-b-cyan-400 animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>

          {/* Second spinning circle (reverse) */}
          <div
            className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-cyan-400 animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          ></div>
        </div>

        {/* Gradient pulse effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-cyan-400/5 animate-pulse rounded-full blur-sm"></div>
      </div>
    </div>
  );
}
