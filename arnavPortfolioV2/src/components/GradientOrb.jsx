export default function GradientOrb({
  size = 500,
  top,
  left,
  right,
  bottom,
  color = "#ff4d00",
}) {
  return (
    <div
      className="absolute rounded-full blur-[180px] opacity-90"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        right,
        bottom,
        background: color,
      }}
    />
  );
}