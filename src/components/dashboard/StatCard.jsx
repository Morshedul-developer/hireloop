"use client";

import Link from "next/link";
import { Card } from "@heroui/react";

const accents = {
  neutral: "bg-zinc-100 text-zinc-600 dark:bg-white/10 dark:text-zinc-300",
  violet: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300",
  sky: "bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300",
  amber: "bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300",
  emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
  rose: "bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300",
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  accent = "neutral",
  hint,
  href,
  isLoading = false,
}) {
  const body = (
    <>
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
          accents[accent] ?? accents.neutral
        }`}
      >
        {Icon && <Icon width={18} height={18} />}
      </span>

      <div className="mt-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>

        {isLoading ? (
          <div className="mt-2 h-8 w-20 animate-pulse rounded bg-zinc-200 dark:bg-white/10" />
        ) : (
          <p className="mt-1 text-3xl font-semibold tracking-tight tabular-nums text-foreground">
            {typeof value === "number" ? value.toLocaleString("en-US") : value}
          </p>
        )}

        {hint && !isLoading && (
          <p className="mt-1.5 text-xs text-zinc-400 dark:text-zinc-500">{hint}</p>
        )}
      </div>
    </>
  );

  return (
    <Card
      as={href ? Link : "div"}
      href={href}
      isPressable={Boolean(href)}
      shadow="none"
      className="block w-full rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-zinc-900/60"
    >
      {body}
    </Card>
  );
}

export function StatCardGrid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}