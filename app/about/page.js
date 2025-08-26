// app/about/page.js
"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const footerBandHeight = "15vh";

  // MENU
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocMouseDown = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <main
      className="relative min-h-[100dvh] bg-[var(--bg)] text-[var(--fg)] overflow-x-clip"
      style={{ fontFamily: "var(--font-redhat)" }}
    >
      {/* ===== Sticky Top-right MENU / CONTACT ===== */}
      <header className="fixed top-6 right-6 z-30">
        <div
          ref={menuRef}
          className="relative inline-block select-none"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <nav className="flex items-center gap-3 uppercase tracking-[0.25em] text-[18px] md:text-[20px]">
            <button
              type="button"
              className="px-1 hover:opacity-80 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              MENU
            </button>
            <span>|</span>
            <a className="hover:opacity-80" href="#contact">CONTACT</a>
          </nav>

          <div
            role="menu"
            className={`absolute right-0 mt-2 min-w-[240px] border transition-opacity duration-150 ${
              menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{
              background: "var(--bg)",
              color: "var(--fg)",
              borderColor: "color-mix(in srgb, var(--fg) 25%, transparent)",
            }}
          >
            <a className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] underline-offset-4" href="/" role="menuitem" onClick={() => setMenuOpen(false)}>Home</a>
            <a className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] underline-offset-4" href="/#projects" role="menuitem" onClick={() => setMenuOpen(false)}>Projects</a>
            <a className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] underline-offset-4" href="/#research" role="menuitem" onClick={() => setMenuOpen(false)}>Research &amp; Reflections</a>
          </div>
        </div>
      </header>

      {/* ===== Blue header block with "About" + intro text ===== */}
      <section className="relative z-10 flex flex-col md:flex-row">
        {/* Blue block */}
        <div
          className="relative flex-shrink-0 w-full md:w-[40vw] h-[28vh] md:h-[35vh]"
          style={{ background: "var(--fg)" }}
        >
          <h1
            className="absolute left-[5vw] bottom-[2vh] font-bold tracking-[0.25em]"
            style={{ color: "var(--bg)", fontSize: "clamp(20px, 2.6vw, 34px)" }}
          >
            About
          </h1>
        </div>

        {/* Text block beside / below the blue block */}
        <div
          className="flex items-center w-full md:flex-1 px-6 md:px-10 py-6 md:py-35"
          style={{ height: "auto", minHeight: "unset" }}
        >
          <p className="max-w-none md:max-w-[60vw] text-[16px] md:text-[18px] leading-relaxed" style={{ color:"var(--fg)" }}>
            I’ve spent 25 years in healthcare, first on the frontline, then in health tech
            and transformation. I’m always looking for better ways to care, for approaches
            that make the system kinder and more effective. Along the way I’ve turned small,
            stubborn ideas into award-winning, patient-centred innovations, raising over £8
            million to bring them to life. This isn’t—definitely isn’t—because I’m a natural
            fundraiser, but because I don’t let go when change is needed.
          </p>
        </div>
      </section>

      {/* ===== Rows layout (mobile: single column, desktop: 3 columns) ===== */}
      <section className="relative z-10 mt-8 md:mt-12 w-full md:w-screen md:left-1/2 md:-translate-x-1/2">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
          {[
            {
              idx: "001",
              label: ["Years", "Experience"],
              metric: "/25+",
              right: (
                <h2 className="font-semibold leading-[1.05] text-[clamp(26px,5vw,56px)]">
                  Nurse, Innovator,<br/>Strategist
                </h2>
              ),
            },
            {
              idx: "002",
              label: ["Awards &", "Fellowships"],
              metric: "/10+",
              right: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                  <div>
                    <div className="font-mono tracking-wide mb-4 opacity-70">Awards</div>
                    <ul className="space-y-3">
                      <li>RCN Nurse of the Year</li>
                      <li>RCN Innovation</li>
                      <li>BMJ Patient engagement</li>
                      <li>NIHR CLAHRC Patient Engagement</li>
                      <li>Macmillan Integration Excellence</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono tracking-wide mb-4 opacity-70">Fellowships</div>
                    <ul className="space-y-3">
                      <li>NIHR CLAHRC Quality Improvement Fellowship</li>
                      <li>NIHR Clinical Research Fellowship</li>
                      <li>NHS Clinical Entrepreneur</li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              idx: "003",
              label: ["Grants &", "Funding"],
              metric: "/£8mill+",
              right: (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-6">
                  <div><div className="opacity-70">NIHR</div><div className="font-mono">/2</div></div>
                  <div><div className="opacity-70">SBRI</div><div className="font-mono">/1</div></div>
                  <div><div className="opacity-70">Health Foundation</div><div className="font-mono">/1</div></div>
                  <div><div className="opacity-70">Hospital Charity Funds</div><div className="font-mono">/2</div></div>
                </div>
              ),
            },
            {
              idx: "004",
              label: ["Publications &", "Editorials"],
              metric: "/9+",
              right: (
                <em className="font-semibold not-italic md:italic">
                  List these with a hyperlink
                </em>
              ),
            },
          ].map((row) => (
            <div
              key={row.idx}
              className="
                grid py-10 md:py-16 border-t first:border-t-0
                gap-y-4 md:gap-y-0 md:gap-x-8
                md:[grid-template-columns:minmax(220px,28vw)_minmax(160px,22vw)_1fr]
              "
              style={{
                borderColor: "color-mix(in srgb, var(--fg) 20%, transparent)",
              }}
            >
              {/* LEFT: label + metric */}
              <div>
                <div className="text-[clamp(20px,5vw,34px)] leading-tight">
                  {row.label.map((l) => <div key={l}>{l}</div>)}
                </div>
                <div className="mt-2 md:mt-4 text-[clamp(32px,10vw,84px)] font-black leading-none">
                  {row.metric}
                </div>

                {/* Mobile only: small top-aligned rule */}
                <div className="mt-3 h-[2px] w-16 bg-[var(--accent)] md:hidden" />
              </div>

              {/* MIDDLE: yellow rule + index (desktop only, top-aligned) */}
              <div className="hidden md:flex items-start pt-3">
                <span className="h-[3px] w-full self-start" style={{ background: "var(--accent)" }} />
                <span className="ml-4 mt-[-2px] font-mono tracking-[0.25em] text-sm opacity-70">
                  {row.idx}
                </span>
              </div>

              {/* RIGHT: content */}
              <div>{row.right}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer band + footer ===== */}
      <section id="contact" className="relative" style={{ height: footerBandHeight, background: "var(--bg)" }} />
      <footer className="relative">
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
