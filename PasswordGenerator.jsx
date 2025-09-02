import { Alert } from "@heroui/react";
import React, { useState, useEffect } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");


  // Characters set
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  // Password generator function
  const generatePassword = () => {
    let newPass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPass += chars[randomIndex];
    }

    
    setPassword(newPass);
  };

  // Run on mount & whenever length changes
  useEffect(() => {
    generatePassword();
  }, [length]);

  // Copy to clipboard
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
     alert("Password copied");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 text-orange-400 max-w-xl w-full rounded-xl shadow-lg p-6">
        {/* Input + Copy */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-grow px-4 py-2 rounded-l-xl bg-white text-orange-600 font-bold"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 text-black px-4 py-2 rounded-r-xl hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        {/* Slider */}
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="8"
            max="50"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer"
          />
          <label className="font-bold">
            Length: <span className="text-white">({length})</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
