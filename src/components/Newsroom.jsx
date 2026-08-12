"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  Mail,
  Newspaper,
  Rocket,
  Building2,
  Mic2,
} from "lucide-react";

const categories = [
  { name: "All Updates", icon: Sparkles },
  { name: "Press Releases", icon: Newspaper },
  { name: "Product Updates", icon: Rocket },
  { name: "Company News", icon: Building2 },
  { name: "In the Media", icon: Mic2 },
];

const stats = [
  { label: "Founded", value: "2022" },
  { label: "Professionals hired", value: "12,000+" },
  { label: "Companies hiring", value: "500+" },
  { label: "Press mentions", value: "20+" },
];

const stories = [
  {
    title: "HireLoop raises seed round to expand AI-matching across Bangladesh",
    category: "Press Releases",
    date: "July 2026",
    excerpt:
      "The new funding will grow the engineering team and accelerate the AI career assistant currently in early access.",
  },
  {
    title: "Introducing HireLoop AI: your career assistant, always on",
    category: "Product Updates",
    date: "June 2026",
    excerpt:
      "CV tailoring, interview practice, and job matching in one conversation — now live for every HireLoop member.",
  },
  {
    title: "HireLoop crosses 12,000 successful hires",
    category: "Company News",
    date: "May 2026",
    excerpt:
      "A milestone built on partnerships with over 500 verified employers across Dhaka, Chattogram, and remote-first teams.",
  },
  {
    title: "\"The job board rethinking how Bangladesh hires\" — Tech Weekly",
    category: "In the Media",
    date: "April 2026",
    excerpt:
      "Tech Weekly profiles HireLoop's approach to salary transparency and AI-assisted job matching.",
  },
  {
    title: "Salary transparency data now available to every job seeker",
    category: "Product Updates",
    date: "March 2026",
    excerpt:
      "Real benchmarks across roles, experience levels, and industries — free for Starter members, in full for Pro.",
  },
  {
    title: "HireLoop named a rising startup to watch by Business Insight BD",
    category: "In the Media",
    date: "February 2026",
    excerpt:
      "Recognized alongside four other early-stage companies reshaping how Bangladeshis find work.",
  },
];

export default function Newsroom() {
  const [activeCategory, setActiveCategory] = useState("All Updates");

  const filteredStories = useMemo(() => {
    if (activeCategory === "All Updates") return stories;
    return stories.filter((story) => story.category === activeCategory);
  }, [activeCategory]);

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
            <Sparkles size={16} /> Newsroom
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            News and updates from{" "}
            <span className="text-violet-600 dark:text-violet-400">HireLoop.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Product launches, milestones, and press coverage — straight from
            the team building HireLoop.
          </p>
        </div>

        {/* Stats */}

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-white/10 dark:bg-white/[0.035]"
            >
              <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Category filter */}

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-3">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveCategory(name)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === name
                  ? "bg-violet-600 text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-violet-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              <Icon size={16} />
              {name}
            </button>
          ))}
        </div>

        {/* Story list */}

        <div className="mx-auto mt-14 max-w-4xl divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
          {filteredStories.map((story) => (
            <article key={story.title} className="flex flex-col gap-3 py-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                  {story.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-500">
                  <Calendar size={14} />
                  {story.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold leading-snug">{story.title}</h3>

              <p className="text-sm leading-6 text-slate-600 dark:text-zinc-400">
                {story.excerpt}
              </p>

              <button
                type="button"
                onClick={() => toast.success("Full story coming soon!")}
                className="inline-flex w-fit cursor-pointer items-center gap-1.5 text-sm font-semibold text-violet-600 transition hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
              >
                Read full story
                <ArrowRight size={15} />
              </button>
            </article>
          ))}

          {filteredStories.length === 0 && (
            <p className="py-10 text-center text-slate-500 dark:text-zinc-500">
              No updates in this category yet.
            </p>
          )}
        </div>

        {/* Press contact CTA */}

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-violet-400/20 bg-violet-400/10 px-8 py-10 text-center dark:border-violet-500/20 dark:bg-violet-500/10">
          <h2 className="text-2xl font-semibold sm:text-3xl">For media inquiries</h2>
          <p className="max-w-xl text-slate-600 dark:text-zinc-400">
            Working on a story about HireLoop? Reach out to our press team for
            interviews, data, or brand assets.
          </p>
          <a
            href="mailto:press@hireloop.com"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-500"
          >
            <Mail size={18} />
            press@hireloop.com
          </a>
        </div>
      </div>
    </section>
  );
}
