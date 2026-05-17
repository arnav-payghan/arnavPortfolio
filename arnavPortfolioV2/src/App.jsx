import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      
      {/* background layers */}
      <BackgroundEffects />

      {/* name */}
      <div className="relative z-10 px-16 pt-20 baseMarginLeft">
        <h1
          style={{
            fontFamily: 'var(--font-heading0)',
            fontSize: 'var(--text-heading0)'
          }}
        >
          arnav
        </h1>
      </div>
    </div>
  );
}

export default App;