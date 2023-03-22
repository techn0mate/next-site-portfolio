import { useState, useEffect } from "react";

function AnimatedBar({ label, width }) {
  const [barWidth, setBarWidth] = useState("0%");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBarWidth(width);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [width]);

  return (
    <>
      <div className="w-full h-3 bg-gray-300 rounded-md overflow-hidden">
        <div
          className="h-full bg-indigo-500"
          style={{ width: barWidth, transition: "width 1s" }}
        ></div>
      </div>
      <div>{label}</div>
    </>
  );
}

export default AnimatedBar;