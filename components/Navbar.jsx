"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight"
        >
          World Explorer
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-zinc-500 transition">
            Home
          </Link>

          <Link href="/countries" className="hover:text-zinc-500 transition">
            Countries
          </Link>

          <Link href="/search" className="hover:text-zinc-500 transition">
            Search
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/countries">Countries</Link>
          <Link href="/search">Search</Link>
        </div>
      )}
    </header>
  );
}