"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Sparkles,
  Rocket,
  BriefcaseBusiness,
  CreditCard,
  Building2,
  Bot,
  Wallet,
} from "lucide-react";

const categories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "Create your profile, set preferences, and find your first match.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Jobs & Applications",
    description: "Search, apply, and track every application in one place.",
  },
  {
    icon: CreditCard,
    title: "Account & Billing",
    description: "Manage your subscription, invoices, and payment methods.",
  },
  {
    icon: Building2,
    title: "For Employers",
    description: "Post roles, manage candidates, and build your hiring pipeline.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Get the most out of CV tailoring, matching, and interview prep.",
  },
  {
    icon: Wallet,
    title: "Salary Insights",
    description: "Understand how our salary benchmarks are calculated.",
  },
];

export default function HelpCenter() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories;
    return categories.filter(
      (category) =>
        category.title.toLowerCase().includes(normalizedQuery) ||
        category.description.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

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
            <Sparkles size={16} /> Help Center
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            How can we{" "}
            <span className="text-violet-600 dark:text-violet-400">help</span>{" "}
            you today?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Search our guides or browse a topic below — from your first
            application to managing a hiring pipeline.
          </p>

          <div className="relative mx-auto mt-10 max-w-xl">
            <Search
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500"
              size={20}
            />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for articles, topics, or questions..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-13 pr-5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Category grid */}

        <div className="mx-auto mt-16 max-w-5xl">
          {filteredCategories.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-violet-400/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 dark:text-zinc-500">
              No topics match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
