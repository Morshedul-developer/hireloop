"use client";

import { TrendingUp, Users, Wallet, Sparkles } from "lucide-react";

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

export default function SalaryData() {
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
      </div>
    </section>
  );
}
