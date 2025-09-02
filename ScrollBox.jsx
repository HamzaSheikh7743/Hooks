import React, { useRef, useEffect, useState } from "react";

function ScrollBox() {
  const boxRef = useRef(null); //  reference for div
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const box = boxRef.current;

    const handleScroll = () => {
      setScrollTop(box.scrollTop); // save current scroll position
    };

    if (box) {
      box.addEventListener("scroll", handleScroll);
    }

    // cleanup
    return () => {
      if (box) {
        box.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <h1 className="text-xl font-bold">📜 Scroll Example</h1>

      <div
        ref={boxRef}
        className="w-64 h-40 overflow-y-scroll border rounded-lg p-2 bg-gray-400"
      >
        {/* dummy content */}
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="p-1">
            Line {i + 1}
          </p>
        ))}
      </div>

      <p className="text-gray-700">Scroll Position: {scrollTop}px</p>
    </div>
  );
}

export default ScrollBox;
