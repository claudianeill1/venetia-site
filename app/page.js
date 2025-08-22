// app/page.js
export default function Page() {
  // --- tweak these numbers ---
  const Y = {               // YELLOW
    left: "70vh",
    top: "-5vh",
    width: "45vw",
    height: "60vh",
    z: 3,
  };

  const R = {               // RED / ORANGE
    right: "5vh",
    top: "40vh",
    width: "35vw",
    height: "60vh",
    z: 2,
  };

  const footerBandHeight = "15vh"; // beige bar above footer
  // ---------------------------

  return (
    <main className="relative bg-[var(--bg)] text-[var(--fg)] min-h-[100dvh]">
      {/* Blue column (full page height) */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-0 w-[40vw] z-0"
        style={{ background: "var(--fg)" }}
      />

      {/* Page 1 (with image at the top) */}
      {/* Page 1 (with image and overlay text) */}
<section className="relative h-[100dvh] z-10">
  {/* Background hero image */}
  <img
    src="/about.png"
    alt="About"
    className="absolute top-0 bottom-0 right-0 h-full w-[calc(100vw-2vw)] object-cover opacity-90"
    style={{ objectPosition: "top" }}
  />

  {/* Overlay text */}
  <div className="absolute top-[40vh] left-[5vw] z-20 text-center">
    <h1
      className="font-bold text-[70px] tracking-[0.3em]"
      style={{ fontFamily: "'Reem Kufi Ink', sans-serif", color: "var(--muted)" }}
    >
      VENETIA
    </h1>
    <h2
      className="font-bold text-[50px] tracking-[0em] mt-1"
      style={{ fontFamily: "'Reem Kufi Ink', sans-serif", color: "var(--muted)" }}
    >
      Wynter-Blyth
    </h2>
  </div>
</section>

      {/* Page 2 (overlapping blocks) */}
      <section className="relative h-[70dvh] z-10">
        {/* Yellow */}
        <div
          className="absolute"
          style={{
            left: Y.left,
            top: Y.top,
            width: Y.width,
            height: Y.height,
            background: "var(--accent)",
            zIndex: Y.z,
          }}
        />
        {/* Red/Orange */}
        <div
          className="absolute"
          style={{
            right: R.right,
            top: R.top,
            width: R.width,
            height: R.height,
            background: "var(--muted)",
            zIndex: R.z,
          }}
        />
      </section>

      {/* Beige bar above footer */}
      <section
        className="relative z-0"
        style={{ height: footerBandHeight, background: "var(--bg)" }}
      />

      {/* Footer */}
      <footer className="relative z-20">
        <div className="w-full bg-[var(--fg)] text-[var(--bg)]">
          <div className="mx-auto max-w-6xl px-6 py-8 text-center text-[11px] tracking-[0.25em] uppercase">
            <nav className="space-x-6">
              <a className="hover:opacity-80" href="#linkedin">LinkedIn</a>
              <span>|</span>
              <a className="hover:opacity-80" href="#substack">Substack</a>
              <span>|</span>
              <a className="hover:opacity-80" href="#contact">Contact</a>
            </nav>
            <div className="mt-3 opacity-90">
              Terms &amp; Conditions <span className="mx-2">|</span> Cookie Policy{" "}
              <span className="mx-2">|</span> Designed by Claudia Neill
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
