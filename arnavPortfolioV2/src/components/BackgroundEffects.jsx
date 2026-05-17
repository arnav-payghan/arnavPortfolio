import React from 'react';
import GradientOrb from "./GradientOrb.jsx";

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <GradientOrb
        top="0px"
        left="0px"
        size="500px"
        from="#ff00ff"
        to="#00ffff"
        />
    </div>
  );
}

export default BackgroundEffects;