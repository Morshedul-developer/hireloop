"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorPage({ error, reset, unstable_retry }) {
  const retry = unstable_retry ?? reset;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 text-center text-slate-900 dark:bg-[#0b0b0e] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/15 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      </div>

      <Link href="/" className="relative mb-10 flex items-center">
        <Image src="/logo.png" alt="HireLoop" width={135} height={35} className="h-auto w-auto" priority />
      </Link>

      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-400/10 text-rose-600 dark:text-rose-300">
        <AlertTriangle size={28} />
      </div>

      <h1 className="relative mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        Something went wrong
      </h1>

      <p className="relative mx-auto mt-4 max-w-md text-lg leading-8 text-slate-600 dark:text-zinc-400">
        An unexpected error occurred while loading this page. You can try
        again or head back home.
      </p>

      {error?.digest && (
        <p className="relative mt-3 font-mono text-xs text-slate-400 dark:text-zinc-600">
          Error reference: {error.digest}
        </p>
      )}

      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => retry?.()}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-500"
        >
          <RefreshCw size={18} />
          Try again
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
