import React, { useState, useMemo } from "react";

function SquareCalculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  
  const squared = useMemo(() => {
    console.log(" Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 rounded-xl bg-white">
      <h1 className="text-2xl font-bold">useMemo Example</h1>

      {/* Input */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border p-2 rounded"
      />

      {/* Result */}
      <p className="text-lg">Square: {squared}</p>

      {/* Extra Counter */}
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment Counter ({count})
      </button>
    </div>
  );
}

export default SquareCalculator;
