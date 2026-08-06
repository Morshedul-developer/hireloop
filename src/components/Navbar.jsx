"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  {
    name: "Browse Jobs",
    href: "/jobs",
  },
  {
    name: "Company",
    href: "/companies",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "AI Assistant",
    href: "/ai",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-[#151518]/80">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="flex h-16 items-center justify-between rounded-2xl bg-slate-100 px-6 dark:bg-[#1F1F22]">

          {/* ================= Logo ================= */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="HireLoop"
              width={135}
              height={35}
              priority
            />

            {/* If you don't have a logo yet, use this instead */}
            {/* <span className="text-3xl font-bold text-white">
              Hire<span className="text-violet-500">Loop</span>
            </span> */}
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden items-center lg:flex">

            <ul className="flex items-center">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-6 text-[16px] font-medium text-slate-700 transition hover:text-slate-900 dark:text-zinc-200 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}

            <ThemeToggle className="mr-2" />

            {/* Divider */}

            <div className="mx-5 h-7 w-px bg-slate-300 dark:bg-zinc-700" />

            {/* Authentication Part */}

            <Link
              href="/login"
              className="mr-8 text-[16px] font-medium text-violet-600 transition hover:text-violet-500 dark:text-violet-500 dark:hover:text-violet-400"
            >
              Sign In
            </Link>

            {/* Button */}

            <Link
              href="/register"
              className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-500"
            >
              Get Started
            </Link>
          </div>

          {/* ============ Mobile Button Part ============= */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-slate-900 transition hover:bg-slate-200 dark:text-white dark:hover:bg-zinc-800 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "mt-4 max-h-125 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl bg-slate-100 p-6 dark:bg-[#1F1F22]">

            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500 dark:text-zinc-400">Theme</span>

              <ThemeToggle />
            </div>

            <div className="mb-5 h-px bg-slate-300 dark:bg-zinc-700" />

            <ul className="space-y-5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-slate-700 transition hover:text-slate-900 dark:text-zinc-200 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-slate-300 dark:bg-zinc-700" />

            <div className="space-y-3">

              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl border border-slate-300 py-3 text-center font-medium text-violet-600 transition hover:bg-slate-200 dark:border-zinc-700 dark:text-violet-500 dark:hover:bg-zinc-800"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl bg-violet-600 py-3 text-center font-semibold text-white transition hover:bg-violet-500"
              >
                Get Started
              </Link>

            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
