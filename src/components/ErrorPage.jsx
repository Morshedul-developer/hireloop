"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  RefreshCw,
  ChevronRight,
  LifeBuoy,
  MessagesSquare,
} from "lucide-react";

const helpLinks = [
  {
    icon: LifeBuoy,
    title: "Help Center",
    description: "Browse answers to common questions.",
    href: "/help-center",
  },
  {
    icon: MessagesSquare,
    title: "Contact Support",
    description: "Tell us what happened and we'll help.",
    href: "/contact",
  },
];

export default function ErrorPage({ error, reset, unstable_retry }) {
  const retry = unstable_retry ?? reset;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white px-6 py-20 text-center text-slate-900 dark:bg-[#0b0b0e] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/15 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      </div>

      <Link href="/" className="relative mb-8 flex items-center">
        <Image src="/logo.png" alt="HireLoop" width={135} height={35} className="h-auto w-auto" priority />
      </Link>

      <div className="relative flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-zinc-600">
        <Link href="/" className="transition hover:text-rose-600 dark:hover:text-rose-300">
          Home
        </Link>
        <ChevronRight size={12} />
        <span className="text-slate-500 dark:text-zinc-500">Error</span>
      </div>

      <div className="relative mt-8 w-full max-w-lg rounded-3xl border border-slate-200 bg-slate-50 p-10 dark:border-white/10 dark:bg-white/[0.035]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-400/10 text-rose-600 dark:text-rose-300">
          <AlertTriangle size={24} />
        </div>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
          Something went wrong
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-slate-600 dark:text-zinc-400">
          An unexpected error occurred while loading this page. You can try
          again or head back home.
        </p>

        {error?.digest && (
          <div className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-500">
            <span className="text-slate-400 dark:text-zinc-600">Ref:</span>
            {error.digest}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => retry?.()}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            <RefreshCw size={18} />
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Help links */}

      <div className="relative mt-14 w-full max-w-xl">
        <p className="text-sm font-semibold text-slate-500 dark:text-zinc-500">
          Still stuck?
        </p>

        <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
          {helpLinks.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-rose-400/30 hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-rose-500/20 dark:hover:bg-white/6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                <Icon size={18} />
              </div>
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
