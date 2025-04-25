"use client";
import { useEffect, useState } from "react";

export default function ProgressCircle({ progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= progress) {
        clearInterval(interval);
      } else {
        current += 1;
        setAnimatedProgress(current);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="relative flex items-center justify-center font-inter">
      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
        <div className="text-xl font-bold text-black">{animatedProgress}%</div>
      </div>
      <svg className="absolute w-32 h-32">
        <circle
          style={{ stroke: "#279DD4" }}
          strokeWidth="10"
          stroke="currentColor"
          strokeLinecap="round"
          fill="transparent"
          r="58"
          cx="64"
          cy="64"
          strokeDasharray="364"
          strokeDashoffset={364 - (animatedProgress / 100) * 364}
          transform="rotate(-90 64 64)"
        />
      </svg>
    </div>
  );
}
