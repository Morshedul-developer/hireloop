import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sparkles, Star } from "lucide-react";

const highlights = [
  "Apply to hand-picked roles in one click",
  "Track every application from a single dashboard",
  "Get AI-matched with companies actively hiring",
];

export default function AuthLayout({ badge, title, highlight, subtitle, children }) {
  return (
    <div className="grid min-h-screen bg-white text-slate-900 dark:bg-[#0b0b0e] dark:text-white lg:grid-cols-2">
      {/* Branding panel */}

      <div className="relative hidden overflow-hidden border-r border-slate-200 dark:border-white/10 lg:flex lg:flex-col lg:justify-between lg:p-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        </div>

        <Link href="/" className="relative flex items-center">
          <Image src="/logo.png" alt="HireLoop" width={135} height={35} priority />
        </Link>

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3.5 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-200">
            <Sparkles size={14} />
            12,000+ professionals hired this year
          </span>

          <h1 className="mt-6 max-w-md text-4xl font-semibold leading-tight tracking-tight">
            Land your next role, faster.
          </h1>
          <p className="mt-5 max-w-sm text-lg leading-8 text-slate-600 dark:text-zinc-400">
            HireLoop connects you with companies actively hiring across
            Bangladesh and remote-first teams.
          </p>

          <ul className="mt-10 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-zinc-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-zinc-300">
              &ldquo;HireLoop matched me with three interviews in my first
              week. I landed a role that actually fit what I wanted.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-violet-300">
                FR
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Fatima Rahman</p>
                <p className="text-xs text-slate-500 dark:text-zinc-500">Software Engineer, Brain Station 23</p>
              </div>
            </div>
          </div>
        </div>

        <p className="relative text-sm text-slate-500 dark:text-zinc-500">
          © {new Date().getFullYear()} HireLoop. All rights reserved.
        </p>
      </div>

      {/* Form panel */}

      <div className="relative flex items-center justify-center overflow-hidden px-6 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />
        </div>

        <div className="relative w-full max-w-md">
          <Link href="/" className="mb-10 flex items-center lg:hidden">
            <Image src="/logo.png" alt="HireLoop" width={120} height={32} priority />
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
            {badge}
          </span>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title} <span className="text-violet-600 dark:text-violet-400">{highlight}</span>
          </h2>

          <p className="mt-3 text-slate-600 dark:text-zinc-400">{subtitle}</p>

          <div className="relative mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/3 dark:shadow-black/40 sm:p-8">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-violet-400/60 to-transparent" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
