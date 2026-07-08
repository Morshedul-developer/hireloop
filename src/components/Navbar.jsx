"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#151518]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="flex h-16 items-center justify-between rounded-2xl bg-[#1F1F22] px-6">

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
                    className="px-6 text-[16px] font-medium text-zinc-200 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}

            <div className="mx-5 h-7 w-px bg-zinc-700" />

            {/* Authentication Part */}

            <Link
              href="/login"
              className="mr-8 text-[16px] font-medium text-violet-500 transition hover:text-violet-400"
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

          {/* ============ Mobile Button ============= */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-zinc-800 lg:hidden"
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
          <div className="rounded-2xl bg-[#1F1F22] p-6">

            <ul className="space-y-5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-zinc-200 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-zinc-700" />

            <div className="space-y-3">

              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl border border-zinc-700 py-3 text-center font-medium text-violet-500 transition hover:bg-zinc-800"
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