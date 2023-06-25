/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ProgressCircle = ({ percent }) => {
  const strokeWidth = 4;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percent / 100) * circumference;

  return (
    <svg className="w-30 h-30 z-30 text-white text-center">
      <circle
        className="text-white stroke-current"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx="50%"
        cy="50%"
      />
      <circle
        className="text-[#e11584]/90 stroke-current"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        fill="transparent"
        r={radius}
        cx="50%"
        cy="50%"
      />

      <text 
      className="text-center text-white z-30 text-xs font-semibold" x="50%" y="50%"
      dominantBaseline="middle"
      textAnchor='middle'
      >
        {percent}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
