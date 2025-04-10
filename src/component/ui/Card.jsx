import React, { useState } from "react";

const Card = ({ country, city, population, fact }) => {
  const [gradientPosition, setGradientPosition] = useState({
    x: "50%",
    y: "50%",
    isHovered: false,
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGradientPosition({
      x: `${x}%`,
      y: `${y}%`,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setGradientPosition({
      x: "50%",
      y: "50%",
      isHovered: false,
    });
  };

  return (
    // <div className="flex justify-center items-center bg-gray-900">
    <div className="relative min-w-full h-[310px] mx-auto max-w-[300px]  ">
      <div
        className="absolute inset-0 -m-1 rounded-xl transition-all duration-200 max-w-[308px]"
        style={{
          background: gradientPosition.isHovered
            ? `radial-gradient(circle 100px at ${gradientPosition.x} ${gradientPosition.y}, #3b82f6 0%, transparent 100%)`
            : "transparent",
          opacity: gradientPosition.isHovered ? 1 : 0,
          boxShadow: gradientPosition.isHovered
            ? "0 0 15px rgba(59, 130, 246, 0.5)"
            : "none",
          border: "1px solid rgba(59, 130, 246, 0.3)",
        }}
      ></div>

      <div
        className="max-w-[300px] min-h-full relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:shadow-3xl transition-all duration-300"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-white mb-2">{country}</h2>
          <p className="text-xl font-semibold text-gray-400">Capital: {city}</p>
        </div>

        <div className="px-6 py-4 text-gray-300 space-y-4">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-gray-200">Population</p>
            <p className="text-lg text-gray-400">{population}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-lg font-semibold text-gray-200">
              Interesting Facts
            </p>
            <p className="text-sm text-gray-400">{fact}</p>
          </div>
        </div>
      </div>
    </div>
    // {/* </div> */}
  );
};

export default Card;
