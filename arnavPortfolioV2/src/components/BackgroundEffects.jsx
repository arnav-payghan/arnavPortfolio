import GradientOrb from "./GradientOrb";
import GridBackground from "./GridBackground";

export default function BackgroundEffects() {
  return (
    <>
      {/* grid */}
      <GridBackground />

      {/* left hero glow */}
      <GradientOrb
        size={700}
        top="150px"
        left="-200px"
        color="#ff4d00"
      />

      {/* bottom right glow
      <GradientOrb
        size={650}
        bottom="-100px"
        right="-150px"
        color="#ff4d00"
      /> */}
    </>
  );
}