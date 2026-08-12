"use client";

import { useState } from "react";
import {
  Sparkles,
  Newspaper,
  Rocket,
  Building2,
  Mic2,
} from "lucide-react";

const categories = [
  { name: "All Updates", icon: Sparkles },
  { name: "Press Releases", icon: Newspaper },
  { name: "Product Updates", icon: Rocket },
  { name: "Company News", icon: Building2 },
  { name: "In the Media", icon: Mic2 },
];

const stats = [
  { label: "Founded", value: "2022" },
  { label: "Professionals hired", value: "12,000+" },
  { label: "Companies hiring", value: "500+" },
  { label: "Press mentions", value: "20+" },
];

export default function Newsroom() {
  const [activeCategory, setActiveCategory] = useState("All Updates");

  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900 dark:bg-[#0b0b0e] dark:text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-100 h-192 w-3xl -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -right-64 top-96 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
            <Sparkles size={16} /> Newsroom
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            News and updates from{" "}
            <span className="text-violet-600 dark:text-violet-400">HireLoop.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Product launches, milestones, and press coverage — straight from
            the team building HireLoop.
          </p>
        </div>

        {/* Stats */}

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-white/10 dark:bg-white/[0.035]"
            >
              <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Category filter */}

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-3">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveCategory(name)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === name
                  ? "bg-violet-600 text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-violet-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <Icon size={16} />
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
