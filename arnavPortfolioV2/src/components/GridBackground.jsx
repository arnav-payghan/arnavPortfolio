export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}