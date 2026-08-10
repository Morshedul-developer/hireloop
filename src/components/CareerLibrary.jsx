"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  Sparkles,
  Search,
  Clock3,
  ArrowRight,
  FileText,
  MessagesSquare,
  TrendingUp,
  Globe,
  Wallet,
} from "lucide-react";

const categories = [
  { name: "All Topics", icon: Sparkles },
  { name: "Resume & CV", icon: FileText },
  { name: "Interviews", icon: MessagesSquare },
  { name: "Career Growth", icon: TrendingUp },
  { name: "Remote Work", icon: Globe },
  { name: "Salary & Negotiation", icon: Wallet },
];

const articles = [
  {
    title: "How to write a CV that actually gets past recruiters",
    category: "Resume & CV",
    excerpt:
      "The structure, keywords, and formatting choices that help your CV clear applicant tracking systems and land on a real desk.",
    readTime: "6 min read",
  },
  {
    title: "5 interview questions Bangladeshi tech employers actually ask",
    category: "Interviews",
    excerpt:
      "Beyond \"tell me about yourself\" — how to prepare for the questions that show up again and again in local tech interviews.",
    readTime: "8 min read",
  },
  {
    title: "How to negotiate your salary without losing the offer",
    category: "Salary & Negotiation",
    excerpt:
      "A practical script for countering an offer, backed by real HireLoop salary data, without sounding difficult to work with.",
    readTime: "5 min read",
  },
  {
    title: "Switching careers at 30: what actually transfers",
    category: "Career Growth",
    excerpt:
      "Which of your existing skills are more transferable than you think, and how to reframe them for a completely new field.",
    readTime: "7 min read",
  },
  {
    title: "Landing your first fully remote job from Bangladesh",
    category: "Remote Work",
    excerpt:
      "Time zones, payment methods, and the portfolio signals that make international employers comfortable hiring you remotely.",
    readTime: "9 min read",
  },
  {
    title: "The STAR method, explained with real answers",
    category: "Interviews",
    excerpt:
      "A walkthrough of the Situation-Task-Action-Result framework using answers pulled from real successful interviews.",
    readTime: "6 min read",
  },
  {
    title: "What to do in your first 90 days at a new job",
    category: "Career Growth",
    excerpt:
      "A simple plan for building trust, learning the org, and setting yourself up for your first performance review.",
    readTime: "5 min read",
  },
  {
    title: "Reading a job description like a recruiter does",
    category: "Resume & CV",
    excerpt:
      "How to spot must-have requirements versus wish-list items, so you stop filtering yourself out of good-fit roles.",
    readTime: "4 min read",
  },
];

export default function CareerLibrary() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [query, setQuery] = useState("");

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
            <Sparkles size={16} /> Career Library
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Grow your career with{" "}
            <span className="text-violet-600 dark:text-violet-400">confidence.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Practical guides on resumes, interviews, salary negotiation, and
            growth — written for the Bangladeshi job market.
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
              placeholder="Search articles and guides..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-13 pr-5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Category filter */}

        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3">
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

        {/* Article grid */}

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-violet-400/40"
              >
                <span className="inline-flex w-fit rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                  {article.category}
                </span>

                <h3 className="mt-4 text-lg font-semibold leading-snug">{article.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-500">
                    <Clock3 size={14} />
                    {article.readTime}
                  </span>

                  <button
                    type="button"
                    onClick={() => toast.success("Full article coming soon!")}
                    className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-violet-600 transition hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
                  >
                    Read article
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
