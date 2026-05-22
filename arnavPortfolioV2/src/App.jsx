import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <BackgroundEffects />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center pl-6 sm:pl-10 md:pl-16 lg:pl-24">
        <div>
          <p
            className="
              font-(--font-paragraph)
              text-sm
              sm:text-base
              md:text-lg
              lg:text-2xl
              mb-2
            "
          >
            hey!👋 I'm
          </p>

          <h1
            className="
              font-(--font-heading0)
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[10rem]
              leading-none
            "
          >
            arnav
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;