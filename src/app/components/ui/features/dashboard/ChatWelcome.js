"use client";
import { useState } from "react";

export default function ChatWelcome() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className=" bg-white p-4  shadow font-inter flex flex-col items-center justify-center text-center pb-16 rounded-lg ">
      <img
        src="/images/logo.svg"
        alt="Infinity Icon"
        className="w-15 h-9 mb-4 text-blue-500"
      />
      <h1 className="text-2xl font-bold text-[#212121] mb-2">
        Welcome to the AI Chat Assistant
      </h1>
      <div className="w-full max-w-md">
        <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask your question here..."
            className="w-full p-3 text-sm text-gray-500  focus:outline-none"
          />
          <button className="p-2 bg-transparent">
          <img
        src="/images/send.png"
        alt="Infinity Icon"
        className="w-5 h-5 "
      />
          </button>
        </div>
      </div>
      
     
    </div>
  );
}