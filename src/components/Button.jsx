// src/components/Button.jsx
import React from "react";

export const Button = ({ children, onClick, className, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        isActive ? "bg-black text-white" : "bg-gray-300 text-black hover:bg-gray-400"
      } px-4 py-2 rounded transition-colors duration-200`}
    >
      {children}
    </button>
  );
};