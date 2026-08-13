import { Scale } from "lucide-react";

const sections = [];

export default function Terms() {
  return (
    <section className="bg-white py-20 text-slate-900 dark:bg-[#0b0b0e] dark:text-white sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Heading */}

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-600 dark:text-violet-300">
          <Scale size={22} />
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms &amp; Conditions
        </h1>

        <p className="mt-4 text-sm text-slate-500 dark:text-zinc-500">
          Last updated: August 2026
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-zinc-400">
          Please read these terms carefully before using HireLoop. They
          explain what you can expect from us, and what we expect from you.
        </p>

        {/* Sections */}

        <div className="mt-14 space-y-10 border-t border-slate-200 pt-14 dark:border-white/10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-400">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
