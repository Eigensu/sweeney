export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundImage: "url('/herowall.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <style>{`
        .sweeney-title {
          margin: 0;
          color: #01382E;
          font-family: var(--font-ability), "Ability", serif;
          font-size: clamp(4rem, 12vw, 11rem);
          line-height: 1.3;
          user-select: none;
        }
        .coming-soon {
          margin: 0;
          color: #01382E;
          font-family: var(--font-montserrat), Montserrat, sans-serif;
          font-size: clamp(0.7rem, 1.8vw, 1.1rem);
          font-weight: 600;
          letter-spacing: 0.45em;
          text-transform: uppercase;
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.4rem",
        }}
      >
        <h1 className="sweeney-title">Sweeney</h1>
        <p className="coming-soon">Coming Soon</p>
      </div>
    </main>
  );
}
