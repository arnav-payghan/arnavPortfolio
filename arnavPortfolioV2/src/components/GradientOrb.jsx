import React from 'react';

function GradientOrb({
  top = "50px",
  left = "50px",
  right,
  bottom,
  size = "400px",
  from = "",
  to = "",
  opacity = 0.5,
  blur = "10px"
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        background: `linear-gradient(to right, ${from}, ${to})`,
        filter: `blur(${blur})`,
        opacity
      }}
    />
  );
}

export default GradientOrb;