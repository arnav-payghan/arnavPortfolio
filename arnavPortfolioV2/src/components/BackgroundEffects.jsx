import GradientOrb from "./GradientOrb";
import GridBackground from "./GridBackground";

export default function BackgroundEffects() {
  return (
    <>
      <GridBackground />

      {/* Left Hero Glow */}
      <GradientOrb
        className="
          w-[250px] h-[250px]
          sm:w-[400px] sm:h-[400px]
          md:w-[550px] md:h-[550px]
          lg:w-[700px] lg:h-[700px]
          top-[100px]
          left-[-100px]
          sm:left-[-150px]
          lg:left-[-200px]
        "
        color="#ff4d00"
      />

      {/* Optional bottom glow */}
      <GradientOrb
        className="
          w-[300px] h-[300px]
          md:w-[500px] md:h-[500px]
          lg:w-[650px] lg:h-[650px]
          bottom-[-100px]
          right-[-150px]
        "
        color="#ff3c00"
      />
    </>
  );
}