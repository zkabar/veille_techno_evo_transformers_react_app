// src/components/Button.jsx
import React from "react";

export const Button = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {children}
      </button>
    );
  };