// app/about/page.js
"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const footerBandHeight = "15vh";               // keep in sync with other pages
  const headerBlock = { width: "40vw", height: "35vh" }; // blue block size

  // MENU: hover OR click to open; outside-click / Esc to close
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Scroll progress for line growth (0..1)
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      const p = h > 0 ? doc.scrollTop / h : 1; // 0..1
      setProgress(p);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

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
      className="relative min-h-[100dvh] bg-[var(--bg)] text-[var(--fg)]"
      style={{ fontFamily: "var(--font-redhat)" }}
    >
      {/* ===== Sticky Top-right MENU | CONTACT (same behavior, now fixed) ===== */}
      <header className="fixed top-6 right-6 z-30">
        <div
          ref={menuRef}
          className="relative inline-block select-none"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
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
            <a
              className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] decoration-current underline-offset-4"
              href="/"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] decoration-current underline-offset-4"
              href="/#projects"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              className="block px-4 py-3 hover:opacity-80 hover:underline decoration-[0.5px] decoration-current underline-offset-4"
              href="/#research"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              Research &amp; Reflections
            </a>
          </div>
        </div>
      </header>

      {/* ===== Blue header block with "About" ===== */}
      {/* ===== Blue header block with "About" + intro text ===== */}
<section className="relative z-10 flex">
  {/* Blue block */}
  <div
    className="flex-shrink-0 relative"
    style={{
      width: headerBlock.width,
      height: headerBlock.height,
      background: "var(--fg)",
    }}
  >
    <h1
      className="absolute left-[5vw] bottom-[2vh] font-bold tracking-[0.25em]"
      style={{ color: "var(--bg)", fontSize: "clamp(20px, 2.6vw, 34px)" }}
    >
      About
    </h1>
  </div>

  {/* Text block (sits beside the blue block) */}
  <div
    className="flex items-center px-10 pt-35"
    style={{
      height: headerBlock.height,
      flex: 1, // fills the rest of the row
    }}
  >
    <p
      className="max-w-[60vw] text-[18px] leading-relaxed"
      style={{ color: "var(--fg)" }}
    >
      I’ve spent 25 years in healthcare, first on the frontline, then in health tech and transformation. I’m always looking for better ways to care, for approaches that make the system kinder and more effective. Along the way I’ve turned small, stubborn ideas into award-winning, patient-centred innovations, raising over £8 million to bring them to life. This isn’t, in fact it definitely, isn’t, because I’m a natural fundraiser, but because I don’t let go when change is needed. 
    </p>
  </div>
</section>

      {/* === Twin lines: visible from top, then grow from 35vh to bottom-10vh === */}
<div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
  {/* --- LEFT LINE @ 40vw --- */}
  {/* static segment (0 -> 35vh) */}
  <div
    className="absolute"
    style={{
      left: "40vw",
      top: 0,
      height: "47vh",
      width: "5px",
      background: "var(--accent)",
    }}
  />
  {/* animated segment (35vh -> bottom-10vh) */}
  <div
    className="absolute"
    style={{
      left: "40vw",
      top: "47vh",
      bottom: "10vh",
      width: "5px",
      overflow: "hidden", // clip the growing child
    }}
  >
    <div
      className="w-full h-full"
      style={{
        background: "var(--accent)",
        borderRadius: "0 0 9999px 9999px", // rounded bottom cap
        transformOrigin: "top",
        transform: `scaleY(${Math.max(0, Math.min(1, progress))})`,
      }}
    />
  </div>

  {/* --- RIGHT LINE @ 42vw --- */}
  {/* static segment */}
  <div
    className="absolute"
    style={{
      left: "40.7vw",
      top: 0,
      height: "47vh",
      width: "5px",
      background: "var(--accent)",
    }}
  />
  {/* animated segment */}
  <div
    className="absolute"
    style={{
      left: "40.7vw",
      top: "47vh",
      bottom: "10vh",
      width: "5px",
      overflow: "hidden",
    }}
  >
    <div
      className="w-full h-full"
      style={{
        background: "var(--accent)",
        borderRadius: "0 0 9999px 9999px",
        transformOrigin: "top",
        transform: `scaleY(${Math.max(0, Math.min(1, progress))})`,
      }}
    />
  </div>
</div>


      {/* ===== Content area (empty for now; add timeline blocks later) ===== */}
      <section className="relative z-10">
        <div className="h-[120vh]" />
      </section>

      {/* ===== Footer band + footer (same as home) ===== */}
      <section
        id="contact"
        className="relative"
        style={{ height: footerBandHeight, background: "var(--bg)" }}
      />
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
