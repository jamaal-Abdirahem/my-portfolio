import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative overflow-y-auto">
      {/* Magenta Orb Grid Background (fixed) */}
      <div
        className="fixed inset-0 z-0 h-full w-full"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-blue-50 space-y-40 py-10">
        {/* <h1 className="text-4xl font-bold">Hello, Jamaal</h1>
        <p className="max-w-xl mx-auto text-lg">
          This is a sample description that scrolls smoothly while the
          background stays fixed in place.
        </p> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
