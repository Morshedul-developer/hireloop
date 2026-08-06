"use client";

import { Sparkles } from "lucide-react";

export default function AiAssistant() {
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
            <Sparkles size={16} /> Introducing HireLoop AI
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Your{" "}
            <span className="text-violet-600 dark:text-violet-400">
              AI career assistant
            </span>{" "}
            is here.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Search jobs, tailor your CV, and practice interviews — all through
            one conversation that understands your career.
          </p>
        </div>
      </div>
    </section>
  );
}
