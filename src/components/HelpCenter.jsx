"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  Rocket,
  BriefcaseBusiness,
  CreditCard,
  Building2,
  Bot,
  Wallet,
  ChevronDown,
  Mail,
  MessageCircle,
  Check,
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

const faqs = [
  {
    question: "How do I create a HireLoop account?",
    answer:
      "Click \"Get Started\" in the top navigation, enter your email, and verify your address. You can complete your profile anytime from your dashboard.",
  },
  {
    question: "Is HireLoop free to use?",
    answer:
      "Yes. The Starter plan is free forever and covers unlimited job searches and application tracking. Pro and Teams unlock AI tools and advanced insights.",
  },
  {
    question: "How does the AI assistant tailor my CV?",
    answer:
      "It reads the job description and your existing CV, then reorders and rewrites sections to highlight the most relevant experience for that specific role.",
  },
  {
    question: "Where do the salary benchmarks come from?",
    answer:
      "Salary data is aggregated from verified employer postings and anonymized submissions from HireLoop members, refreshed every quarter.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel from your billing settings at any time, with no cancellation fees.",
  },
  {
    question: "How do employers verify their company on HireLoop?",
    answer:
      "Employers submit a work email and business registration during signup. Our team reviews and approves verified companies within 24 hours.",
  },
];

const supportTiers = [
  { plan: "Starter", response: "Community support", detail: "Help Center + email, replies within 48h" },
  { plan: "Pro", response: "Priority support", detail: "Live chat + email, replies within 4h" },
  { plan: "Teams", response: "Dedicated support", detail: "A named specialist for your hiring team" },
];

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories;
    return categories.filter(
      (category) =>
        category.title.toLowerCase().includes(normalizedQuery) ||
        category.description.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const filteredFaqs = useMemo(() => {
    if (!normalizedQuery) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(normalizedQuery) ||
        faq.answer.toLowerCase().includes(normalizedQuery)
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

        {/* FAQ */}

        <div className="mx-auto mt-24 max-w-3xl border-t border-slate-200 pt-16 dark:border-white/10">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
            {filteredFaqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left font-medium"
                  aria-expanded={openFaq === index}
                >
                  {faq.question}
                  <ChevronDown
                    className={`shrink-0 text-violet-600 transition dark:text-violet-300 ${openFaq === index ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                {openFaq === index && (
                  <p className="-mt-2 pb-6 pr-10 text-sm leading-7 text-slate-600 dark:text-zinc-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
            {filteredFaqs.length === 0 && (
              <p className="py-10 text-center text-slate-500 dark:text-zinc-500">
                No questions match your search.
              </p>
            )}
          </div>
        </div>

        {/* Support tiers */}

        <div className="mx-auto mt-24 max-w-5xl border-t border-slate-200 pt-16 dark:border-white/10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Support that scales with your plan
            </h2>
            <p className="mt-4 text-slate-600 dark:text-zinc-400">
              Every HireLoop member gets help — Pro and Teams get to the front
              of the line.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {supportTiers.map((tier) => (
              <div
                key={tier.plan}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-300">
                  <Check size={16} />
                  {tier.plan}
                </div>
                <p className="mt-3 font-semibold">{tier.response}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  {tier.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center">
            <Link
              href="/pricing"
              className="text-sm font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
            >
              Compare plans →
            </Link>
          </p>
        </div>

        {/* Contact CTA */}

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-violet-400/20 bg-violet-400/10 px-8 py-10 text-center dark:border-violet-500/20 dark:bg-violet-500/10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Still need help?</h2>
          <p className="max-w-xl text-slate-600 dark:text-zinc-400">
            Our support team is ready to answer questions about your account,
            applications, or hiring pipeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:support@hireloop.com"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-500"
            >
              <Mail size={18} />
              Email support
            </a>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Start live chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
