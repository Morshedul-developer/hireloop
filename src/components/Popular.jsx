import Link from "next/link";
import {
  Code2,
  Megaphone,
  Palette,
  Landmark,
  HeartPulse,
  Headset,
  Users,
  Cpu,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Technology",
    jobs: "1,240",
    icon: Code2,
    accent: "text-blue-600 dark:text-blue-400 bg-blue-500/10 group-hover:border-blue-400/40",
  },
  {
    name: "Marketing & Sales",
    jobs: "860",
    icon: Megaphone,
    accent: "text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/10 group-hover:border-fuchsia-400/40",
  },
  {
    name: "Design",
    jobs: "540",
    icon: Palette,
    accent: "text-violet-600 dark:text-violet-400 bg-violet-500/10 group-hover:border-violet-400/40",
  },
  {
    name: "Finance & Accounting",
    jobs: "610",
    icon: Landmark,
    accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 group-hover:border-emerald-400/40",
  },
  {
    name: "Healthcare",
    jobs: "430",
    icon: HeartPulse,
    accent: "text-rose-600 dark:text-rose-400 bg-rose-500/10 group-hover:border-rose-400/40",
  },
  {
    name: "Customer Support",
    jobs: "375",
    icon: Headset,
    accent: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 group-hover:border-cyan-400/40",
  },
  {
    name: "Human Resources",
    jobs: "290",
    icon: Users,
    accent: "text-amber-600 dark:text-amber-400 bg-amber-500/10 group-hover:border-amber-400/40",
  },
  {
    name: "Engineering",
    jobs: "705",
    icon: Cpu,
    accent: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 group-hover:border-indigo-400/40",
  },
];

export default function PopularSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900 dark:bg-[#0b0b0e] dark:text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
              📈 Trending Now
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Popular Categories
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
              Explore the fields hiring the most right now and find where your
              next opportunity fits best.
            </p>
          </div>

          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-6 py-3 font-semibold transition-all hover:border-violet-400/40 hover:bg-violet-500 hover:text-white dark:border-white/15 dark:bg-white/5"
          >
            Browse All Categories
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={`/jobs?category=${encodeURIComponent(category.name)}`}
                className={`group relative flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/6 ${category.accent}`}
              >
                <ArrowUpRight
                  size={18}
                  className="absolute right-6 top-6 text-slate-400 opacity-0 transition group-hover:opacity-100 dark:text-zinc-600"
                />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.accent}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
                  {category.jobs} open jobs
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
