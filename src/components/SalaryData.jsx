"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Wallet,
  Sparkles,
  Lock,
  ChevronDown,
} from "lucide-react";

const roles = [
  { title: "DevOps Engineer", category: "Engineering", experience: "4-7 yrs", min: 65, avg: 100, max: 145 },
  { title: "Software Engineer", category: "Technology", experience: "3-6 yrs", min: 60, avg: 95, max: 140 },
  { title: "Backend Developer", category: "Technology", experience: "3-5 yrs", min: 55, avg: 90, max: 130 },
  { title: "Frontend Developer", category: "Technology", experience: "2-5 yrs", min: 50, avg: 80, max: 120 },
  { title: "Product Designer", category: "Design", experience: "3-5 yrs", min: 45, avg: 70, max: 100 },
  { title: "Digital Marketing Manager", category: "Marketing & Sales", experience: "4-6 yrs", min: 45, avg: 68, max: 95 },
  { title: "UI/UX Designer", category: "Design", experience: "2-4 yrs", min: 40, avg: 65, max: 95 },
  { title: "Financial Analyst", category: "Finance & Accounting", experience: "2-5 yrs", min: 40, avg: 62, max: 90 },
  { title: "HR Manager", category: "Human Resources", experience: "4-7 yrs", min: 35, avg: 55, max: 80 },
  { title: "Sales Executive", category: "Marketing & Sales", experience: "1-3 yrs", min: 30, avg: 45, max: 70 },
];

const FREE_ROWS = 4;

const categories = [
  "All Roles",
  "Technology",
  "Design",
  "Marketing & Sales",
  "Finance & Accounting",
  "Engineering",
  "Human Resources",
];

export default function SalaryData() {
  const [activeCategory, setActiveCategory] = useState("All Roles");

  const filteredRoles = useMemo(() => {
    const list =
      activeCategory === "All Roles"
        ? roles
        : roles.filter((role) => role.category === activeCategory);
    return [...list].sort((a, b) => b.avg - a.avg);
  }, [activeCategory]);

  const maxAvg = Math.max(...roles.map((role) => role.avg));
  const highestPaying = [...roles].sort((a, b) => b.avg - a.avg)[0];
  const overallAverage = Math.round(
    roles.reduce((sum, role) => sum + role.avg, 0) / roles.length
  );

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
            <Sparkles size={16} /> HireLoop Pro · Salary Insights
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Know your{" "}
            <span className="text-violet-600 dark:text-violet-400">worth</span>{" "}
            before you negotiate.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Real salary benchmarks from verified Bangladeshi employers, updated
            every quarter across roles, experience levels, and industries.
          </p>
        </div>

        {/* Stat tiles */}

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
              <TrendingUp size={18} />
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-zinc-400">Highest paying role</p>
            <p className="mt-1 text-2xl font-semibold">{highestPaying.title}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">৳{highestPaying.avg}k avg / month</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
              <Wallet size={18} />
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-zinc-400">Average salary tracked</p>
            <p className="mt-1 text-2xl font-semibold">৳{overallAverage}k / month</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">Across {roles.length} roles</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
              <Users size={18} />
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-zinc-400">Verified data points</p>
            <p className="mt-1 text-2xl font-semibold">12,400+</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">Submitted by real employees</p>
          </div>
        </div>

        {/* Category filter */}

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-violet-600 text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-violet-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bar chart */}

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]">
          <h2 className="text-lg font-semibold">Average monthly salary by role</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">In BDT thousands (৳k)</p>

          <div className="mt-8 space-y-5">
            {filteredRoles.map((role) => (
              <div key={role.title}>
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-zinc-200">{role.title}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">৳{role.avg}k</span>
                </div>
                <div className="h-5 w-full rounded-full bg-slate-200 dark:bg-white/5">
                  <div
                    className="h-5 rounded-full bg-violet-600"
                    style={{ width: `${(role.avg / maxAvg) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed table with premium lock */}

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.035]">
            <div className="grid grid-cols-4 gap-4 border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-white/10 dark:text-zinc-500">
              <span>Role</span>
              <span>Experience</span>
              <span>Category</span>
              <span className="text-right">Salary range</span>
            </div>

            <div>
              {filteredRoles.map((role, index) => (
                <div
                  key={role.title}
                  className={`grid grid-cols-4 items-center gap-4 px-6 py-4 text-sm ${
                    index >= FREE_ROWS ? "blur-sm select-none" : ""
                  } ${index !== filteredRoles.length - 1 ? "border-b border-slate-200 dark:border-white/10" : ""}`}
                >
                  <span className="font-medium text-slate-900 dark:text-white">{role.title}</span>
                  <span className="text-slate-600 dark:text-zinc-400">{role.experience}</span>
                  <span className="text-slate-600 dark:text-zinc-400">{role.category}</span>
                  <span className="text-right font-semibold text-slate-900 dark:text-white">
                    ৳{role.min}k - ৳{role.max}k
                  </span>
                </div>
              ))}
            </div>

            {filteredRoles.length > FREE_ROWS && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-56 flex-col items-center justify-end gap-4 bg-linear-to-t from-slate-50 via-slate-50/95 to-transparent pb-8 dark:from-[#0b0b0e] dark:via-[#0b0b0e]/95">
                <div className="pointer-events-auto flex flex-col items-center gap-3 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-white">
                    <Lock size={18} />
                  </div>
                  <p className="max-w-xs text-sm text-slate-600 dark:text-zinc-400">
                    Unlock every role's full salary range and history with HireLoop Pro.
                  </p>
                  <Link
                    href="/pricing"
                    className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    Upgrade to Pro
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-violet-400/20 bg-violet-400/10 px-8 py-10 text-center dark:border-violet-500/20 dark:bg-violet-500/10">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Negotiate with confidence
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-zinc-400">
            HireLoop Pro members get full salary breakdowns by company size,
            location, and experience — plus AI-powered offer comparisons.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-500"
          >
            See Pro plans
            <ChevronDown className="-rotate-90" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
