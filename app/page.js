import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* Top nav strip */}
      <div className="w-full bg-[var(--fg)] text-[var(--bg)]">
        <nav className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 py-3 text-xs tracking-widest">
          <Link href="/about" className="hover:underline">ABOUT</Link>
          <span>|</span>
          <Link href="/field-notes" className="hover:underline">FIELD NOTES</Link>
          <span>|</span>
          <Link href="/in-progress" className="hover:underline">IN PROGRESS</Link>
          <span>|</span>
          <Link href="/publications" className="hover:underline">PUBLISHED RESEARCH</Link>
        </nav>
      </div>

      {/* Header / Name */}
      <header className="mx-auto max-w-6xl px-4 pt-10 md:pt-14">
        <h1 className="text-center text-2xl font-extrabold tracking-[0.25em] md:text-4xl">
          VENETIA WYNTER-BLYTH
        </h1>
        <div className="mx-auto mt-3 h-[3px] w-24 bg-[var(--fg)]"></div>
        <p className="mt-4 text-center text-sm tracking-[0.3em] md:text-base">
          nurse &nbsp;|&nbsp; innovator &nbsp;|&nbsp; strategist
        </p>
      </header>

      {/* 2×2 Tiles */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 md:py-12">
        {/* ABOUT tile with image */}
        <Link
          href="/about"
          className="group relative aspect-square overflow-hidden rounded border border-[var(--muted)]"
        >
          <img
            src="/placeholder-about.jpg"
            alt="Venetia Wynter-Blyth"
            className="h-full w-full object-cover opacity-80 transition group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 grid place-items-center text-[var(--bg)] text-xl tracking-[0.35em]">
            ABOUT
          </span>
        </Link>

        {/* FIELD NOTES tile with background text */}
        <Link
          href="/field-notes"
          className="group relative aspect-square overflow-hidden rounded border border-[var(--muted)] bg-[var(--accent)]/40"
        >
          <div className="absolute inset-0 p-6 text-[11px] leading-5 opacity-30">
            THE CAT ATE THE DOG AND THE DOG RAN TO THE TREE WHERE THE SNAKE
            HOOKED AROUND THE BRANCH AND SLITHERED PAST THE LEAVES.
          </div>
          <span className="absolute inset-0 grid place-items-center text-xl tracking-[0.35em]">
            FIELD<br/>NOTES
          </span>
        </Link>

        {/* IN PROGRESS tile with concentric lines */}
        <Link
          href="/in-progress"
          className="group relative aspect-square overflow-hidden rounded border border-[var(--muted)] bg-[var(--accent)]/30"
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-[78%] w-[78%] border-2 border-[var(--fg)]/40" />
            <div className="absolute h-[58%] w-[58%] border-2 border-[var(--fg)]/40" />
            <div className="absolute h-[38%] w-[38%] border-2 border-[var(--fg)]/40" />
          </div>
          <span className="absolute inset-0 grid place-items-center text-xl tracking-[0.35em]">
            IN<br/>PROGRESS
          </span>
        </Link>

        {/* PUBLISHED RESEARCH tile */}
        <Link
          href="/publications"
          className="group relative aspect-square overflow-hidden rounded border border-[var(--muted)] bg-[var(--accent)]/40"
        >
          <span className="absolute inset-0 grid place-items-center text-xl tracking-[0.35em]">
            PUBLISHED<br/>RESEARCH
          </span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-8 w-full bg-[var(--fg)] py-8 text-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs tracking-widest">
          <div className="space-x-3">
            <a href="https://www.linkedin.com/in/venetia-wynter-blyth-a53974112" className="hover:underline">LINKEDIN</a>
            <span>|</span>
            <a href="#" className="hover:underline">SUBSTACK</a>
            <span>|</span>
            <Link href="/contact" className="hover:underline">CONTACT</Link>
          </div>
          <div className="mt-4 space-x-3 opacity-80">
            <Link href="/terms" className="hover:underline">TERMS &amp; CONDITIONS</Link>
            <span>|</span>
            <Link href="/cookies" className="hover:underline">COOKIE POLICY</Link>
            <span>|</span>
            <span>DESIGNED BY CLAUDIA NEILL</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
