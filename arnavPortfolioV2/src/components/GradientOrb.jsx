export default function GradientOrb({
  className = "",
  color = "#ff4d00",
}) {
  return (
    <div
      className={`
        absolute
        rounded-full
        blur-[120px]
        md:blur-[160px]
        lg:blur-[200px]
        opacity-80
        ${className}
      `}
      style={{
        background: color,
      }}
    />
  );
}