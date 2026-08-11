"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { Sparkles, Download, Check, X } from "lucide-react";

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
      </div>
    </section>
  );
}
