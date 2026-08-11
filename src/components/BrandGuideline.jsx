"use client";

import toast from "react-hot-toast";
import { Sparkles, Download } from "lucide-react";

export default function BrandGuideline() {
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
      </div>
    </section>
  );
}
