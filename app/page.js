import Link from "next/link";

/* Reusable square tile */
function Tile({ href, children, imgSrc, imgAlt, bgText, withOverlay = false }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      style={{ aspectRatio: "1 / 1", width: "var(--tile)" }}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt || ""}
          className="h-full w-full object-cover transition group-hover:scale-[1.01] motion-reduce:transition-none motion-reduce:hover:scale-100"
        />
      )}

      {bgText && (
        <div
          className="absolute inset-0 p-6 text-[12px] leading-6 tracking-[0.2em] uppercase"
          style={{ color: "color-mix(in srgb, var(--fg) 30%, transparent)" }}
        >
          {bgText}
        </div>
      )}

      {/* unified overlay (same everywhere), darker on hover */}
      {withOverlay && (
        <div
          className="absolute inset-0 transition-opacity duration-200 opacity-60 group-hover:opacity-30 motion-reduce:transition-none"
          style={{ background: "var(--fg)" }}
        />
      )}

      {/* centered label */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div
          className="font-extrabold tracking-[0.35em] text-[var(--bg)] leading-[1.1]"
          style={{ fontSize: "calc(var(--text-subtitle) * 1.2)" }}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* NAV (reduced tracking on small screens) */}
      <div className="w-full bg-[var(--fg)]">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 py-3 text-[16px] tracking-[0.15em] font-bold text-[var(--bg)] sm:text-[20px] sm:tracking-[0.3em]">
          <Link href="/about" className="hover:underline">ABOUT</Link>
          <span>│</span>
          <Link href="/field-notes" className="hover:underline">FIELD NOTES</Link>
          <span>│</span>
          <Link href="/in-progress" className="hover:underline">IN PROGRESS</Link>
          <span>│</span>
          <Link href="/publications" className="hover:underline">PUBLISHED RESEARCH</Link>
        </nav>
      </div>

      {/* knobs: tile size and spacing */}
      <div style={{ "--tile": "300px", "--gap": "48px" }}>
        {/* HEADER — no width constraint; underline hugs title width */}
        <header className="mx-auto px-4 pt-16 md:pt-20 text-center">
          <div className="inline-block">
            <h1
              className="font-extrabold tracking-[0.35em]"
              style={{ fontSize: "var(--text-title)" }}
            >
              VENETIA WYNTER-BLYTH
            </h1>
            <div className="mt-3 h-[4px] w-full bg-[var(--fg)]" />
          </div>
          <p
            className="mt-4 tracking-[0.3em] font-semibold"
            style={{ fontSize: "var(--text-subtitle)" }}
          >
            nurse &nbsp;|&nbsp; innovator &nbsp;|&nbsp; strategist
          </p>
        </header>

        {/* GRID — equal horizontal/vertical spacing; width driven by tiles+gap */}
        <section
          className="mx-auto grid grid-cols-1 px-4 py-12 sm:grid-cols-2"
          style={{ gap: "var(--gap)", width: "calc(2 * var(--tile) + var(--gap))" }}
        >
          <Tile
            href="/about"
            imgSrc="/about.png"
            imgAlt="About Venetia Wynter-Blyth"
            withOverlay
          >
            ABOUT
          </Tile>

          <Tile
            href="/field-notes"
            withOverlay
            bgText="THE CAT ATE THE DOG AND THE DOG RAN TO THE TREE WHERE THE SNAKE HOOKED AROUND THE BRANCH AND SLITHERED PAST THE LEAVES. THE CAT ATE THE DOG AND THE DOG RAN TO THE TREE WHERE THE SNAKE HOOKED AROUND THE BRANCH AND SLITHERED PAST THE LEAVES."
          >
            <span className="block">FIELD</span>
            <span className="block mt-2">NOTES</span>
          </Tile>

          {/* IN PROGRESS — now a group so hover works */}
          <div
            className="group relative overflow-hidden rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            style={{ aspectRatio: "1 / 1", width: "var(--tile)" }}
          >
            {/* crisp concentric squares */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-[78%] w-[78%] border-[3px]" style={{ borderColor: "color-mix(in srgb, var(--fg) 55%, transparent)" }} />
              <div className="absolute h-[58%] w-[58%] border-[3px]" style={{ borderColor: "color-mix(in srgb, var(--fg) 55%, transparent)" }} />
              <div className="absolute h-[38%] w-[38%] border-[3px]" style={{ borderColor: "color-mix(in srgb, var(--fg) 55%, transparent)" }} />
            </div>

            {/* unified overlay + darker on hover (now works) */}
            <div
              className="absolute inset-0 transition-opacity duration-200 opacity-60 group-hover:opacity-30 motion-reduce:transition-none"
              style={{ background: "var(--fg)" }}
            />

            {/* centered label */}
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
              <div
                className="font-extrabold tracking-[0.35em] text-[var(--bg)] leading-[1.1]"
                style={{ fontSize: "calc(var(--text-subtitle) * 1.2)" }}
              >
                <span className="block">IN</span>
                <span className="block mt-2">PROGRESS</span>
              </div>
            </div>

            {/* clickable area */}
            <Link href="/in-progress" className="absolute inset-0" aria-label="In Progress" />
          </div>

          <Tile
            href="/publications"
            imgSrc="/published.png"
            imgAlt="Published research by Venetia Wynter-Blyth"
            withOverlay
          >
            <span className="block">PUBLISHED</span>
            <span className="block mt-2">RESEARCH</span>
          </Tile>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="mt-8 w-full bg-[var(--fg)] py-8 text-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs tracking-widest">
          <div className="space-x-3">
            <a href="https://www.linkedin.com/in/venetia-wynter-blyth-a53974112" className="hover:underline">LINKEDIN</a>
            <span>│</span>
            <a href="#" className="hover:underline">SUBSTACK</a>
            <span>│</span>
            <Link href="/contact" className="hover:underline">CONTACT</Link>
          </div>
          <div className="mt-4 space-x-3 opacity-80">
            <Link href="/terms" className="hover:underline">TERMS &amp; CONDITIONS</Link>
            <span>│</span>
            <Link href="/cookies" className="hover:underline">COOKIE POLICY</Link>
            <span>│</span>
            <span>DESIGNED BY CLAUDIA NEILL</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
