"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { Sparkles, Download, Check, X, Copy } from "lucide-react";

const colorGroups = [
  {
    name: "Primary",
    colors: [
      { name: "Violet 600", hex: "#7C3AED", className: "bg-violet-600" },
      { name: "Violet 500", hex: "#8B5CF6", className: "bg-violet-500" },
      { name: "Violet 400", hex: "#A78BFA", className: "bg-violet-400" },
    ],
  },
  {
    name: "Accent",
    colors: [
      { name: "Blue 600", hex: "#2563EB", className: "bg-blue-600" },
      { name: "Rose 500", hex: "#F43F5E", className: "bg-rose-500" },
      { name: "Amber 400", hex: "#FBBF24", className: "bg-amber-400" },
    ],
  },
  {
    name: "Surfaces",
    colors: [
      { name: "Base dark", hex: "#0B0B0E", className: "bg-[#0b0b0e]" },
      { name: "Panel dark", hex: "#151518", className: "bg-[#151518]" },
      { name: "Footer dark", hex: "#050505", className: "bg-[#050505]" },
      { name: "Base light", hex: "#FFFFFF", className: "border border-slate-200 bg-white" },
    ],
  },
];

export default function BrandGuideline() {
  function copyHex(hex) {
    navigator.clipboard?.writeText(hex);
    toast.success(`Copied ${hex}`);
  }

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
            <Sparkles size={16} /> Brand Guideline
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            The HireLoop brand,{" "}
            <span className="text-violet-600 dark:text-violet-400">at a glance.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Logo, color, typography, and voice — the building blocks that keep
            HireLoop feeling consistent everywhere it shows up.
          </p>

          <button
            type="button"
            onClick={() => toast.success("Brand asset pack coming soon!")}
            className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-500"
          >
            <Download size={18} />
            Download brand assets
          </button>
        </div>

        {/* Logo */}

        <div className="mx-auto mt-20 max-w-5xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Logo
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-14 dark:border-white/10 dark:bg-white/[0.035]">
              <Image src="/logo.png" alt="HireLoop logo on light" width={180} height={48} />
            </div>
            <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-[#0b0b0e] p-14">
              <Image src="/logo.png" alt="HireLoop logo on dark" width={180} height={48} />
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.035]">
              <Check className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400" size={18} />
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Keep clear space around the logo of at least the height of the
                icon mark.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.035]">
              <X className="mt-0.5 shrink-0 text-rose-500" size={18} />
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Never place the logo on a busy photo or low-contrast
                background.
              </p>
            </div>
          </div>
        </div>

        {/* Color */}

        <div className="mx-auto mt-20 max-w-5xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Color
          </h2>

          <div className="mt-6 space-y-10">
            {colorGroups.map((group) => (
              <div key={group.name}>
                <p className="mb-4 text-sm font-medium text-slate-500 dark:text-zinc-500">{group.name}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {group.colors.map((color) => (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => copyHex(color.hex)}
                      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left transition hover:-translate-y-1 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-violet-400/40"
                    >
                      <div className={`h-20 w-full ${color.className}`} />
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <p className="text-sm font-medium">{color.name}</p>
                          <p className="text-xs text-slate-500 dark:text-zinc-500">{color.hex}</p>
                        </div>
                        <Copy size={14} className="text-slate-400 transition group-hover:text-violet-600 dark:text-zinc-600 dark:group-hover:text-violet-300" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
