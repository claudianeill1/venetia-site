// app/page.js
"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  // --- tweak these numbers ---
  const Y = { left: "70vh", top: "-5vh", width: "45vw", height: "60vh", z: 3 };
  const R = { right: "5vh", top: "40vh", width: "40vw", height: "60vh", z: 2 };
  const footerBandHeight = "15vh";
  // ---------------------------

  // Menu state (click to open; click outside/Esc to close)
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocMouseDown(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <main
      className="relative bg-[var(--bg)] text-[var(--fg)] min-h-[100dvh]"
      style={{ fontFamily: "var(--font-redhat)" }}
    >
      {/* Blue column (full page height) */}
      <div
      aria-hidden
      className="absolute top-0 left-0 w-[40vw] z-0"
      style={{
        height: `calc(100vh - 20vh + ${footerBandHeight})`,
        background: "var(--fg)",
      }}
      />

      {/* ===== Top-right MENU | CONTACT ===== */}
      <header className="absolute top-6 right-6 z-30">
        <div ref={menuRef} className="relative inline-block select-none">
          <nav className="flex items-center gap-3 uppercase tracking-[0.25em] text-[20px]">
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
            <a className="hover:opacity-80" href="#contact">
              CONTACT
            </a>
          </nav>

          {/* Dropdown menu (click to open; click outside/Esc to close) */}
          <div
            role="menu"
            className={`absolute right-0 mt-2 min-w-[240px] border ${
              menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{
              background: "var(--bg)",
              color: "var(--fg)",
              borderColor: "color-mix(in srgb, var(--fg) 25%, transparent)",
            }}
          >
            <a
              className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] decoration-current underline-offset-4"
              href="#about"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] decoration-current underline-offset-4"
              href="#projects"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] decoration-current underline-offset-4"
              href="#research"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Research <br />&amp; Reflections
            </a>
          </div>
        </div>
      </header>

      {/* ===== ONE scroll-snap between hero and the rest ===== */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* ===== Page 1 (hero with image & text) ===== */}
        <section id="top" className="relative h-[100dvh] z-10 snap-start">
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
              style={{ color: "var(--muted)" }}
            >
              VENETIA
            </h1>
            <h2
              className="font-bold text-[50px] tracking-[0.25em] mt-1"
              style={{ color: "var(--muted)" }}
            >
              Wynter-Blyth
            </h2>
          </div>
        </section>

        {/* ===== Second snap: contains tiles + beige bar + footer ===== */}
        <div className="relative min-h-[100dvh] snap-start">
          {/* ===== Page 2 (overlapping blocks + labels) ===== */}
          <section className="relative h-[70dvh] z-10">
            {/* About label over blue column */}
            <a
              id="about"
              href="#about"
              className="absolute flex items-center justify-center text-center"
              style={{ left: "6vw", top: "18vh", width: "26vw", height: "22vh" }}
            >
              <span
                className="font-bold tracking-[0.25em]"
                style={{ color: "var(--bg)", fontSize: "clamp(20px, 2.6vw, 34px)" }}
              >
                About
              </span>
            </a>

            {/* Yellow (Projects) */}
            <a
              id="projects"
              href="#projects"
              className="absolute block"
              style={{
                left: Y.left,
                top: Y.top,
                width: Y.width,
                height: Y.height,
                background: "var(--accent)",
                zIndex: Y.z,
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center text-center font-bold tracking-[0.25em]"
                style={{ color: "var(--bg)", fontSize: "clamp(20px, 2.2vw, 30px)" }}
              >
                Projects
              </span>
            </a>

            {/* Red/Orange (Research & Reflections) */}
            <a
              id="research"
              href="#research"
              className="absolute block"
              style={{
                right: R.right,
                top: R.top,
                width: R.width,
                height: R.height,
                background: "var(--muted)",
                zIndex: R.z,
              }}
            >
              <span
                className="absolute inset-0 flex items-center justify-center text-center font-bold leading-tight px-6 tracking-[0.25em]"
                style={{ color: "var(--bg)", fontSize: "clamp(18px, 2.1vw, 28px)" }}
              >
                Research<br /> &amp;Reflections
              </span>
            </a>
          </section>

          {/* Beige bar above footer */}
          <section
            id="contact"
            className="relative z-0"
            style={{ height: footerBandHeight, background: "var(--bg)" }}
          />

          {/* ===== Footer ===== */}
          <footer className="relative z-20">
            <div className="w-full bg-[var(--fg)] text-[var(--bg)]">
              <div className="mx-auto max-w-6xl px-6 py-8 text-center text-[11px] tracking-[0.25em] uppercase">
                <nav className="space-x-6">
                  <a className="hover:opacity-80" href="#linkedin">
                    LinkedIn
                  </a>
                  <span>|</span>
                  <a className="hover:opacity-80" href="#substack">
                    Substack
                  </a>
                  <span>|</span>
                  <a className="hover:opacity-80" href="#contact">
                    Contact
                  </a>
                </nav>
                <div className="mt-3 opacity-90">
                  Terms &amp; Conditions <span className="mx-2">|</span> Cookie Policy{" "}
                  <span className="mx-2">|</span> Designed by Claudia Neill
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
