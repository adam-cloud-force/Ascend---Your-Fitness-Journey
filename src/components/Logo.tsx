import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cloud */}
        <path
          d="M65 30
             a10 10 0 0 1 10 10
             a10 10 0 0 1 -10 10
             h-30
             a10 10 0 0 1 -10 -10
             a10 10 0 0 1 10 -10
             a5 5 0 0 1 5 -10
             a15 15 0 0 1 25 10
             z"
          className="fill-blue-400"
        />
        
        {/* Rain Drops */}
        <g className="rain-drops">
          <path d="M35 55 l-2 5" className="rain-drop" />
          <path d="M45 55 l-2 5" className="rain-drop" />
          <path d="M55 55 l-2 5" className="rain-drop" />
        </g>

        {/* Mountains */}
        <path
          d="M15 80
             L50 30
             L85 80
             Z"
          className="fill-gray-700"
        />
        
        {/* Snow Cap */}
        <path
          d="M50 30
             L40 45
             L60 45
             Z"
          className="fill-white"
        />
      </svg>
    </div>
  );
};

export default Logo;
