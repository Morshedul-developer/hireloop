"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "A focused toolkit for your next great opportunity.",
    monthly: 0,
    annual: 0,
    action: "Create free account",
    features: [
      "Unlimited job searches",
      "One tailored CV review",
      "Track up to 10 applications",
      "Job alerts by email",
    ],
  },
  {
    name: "Pro",
    description: "Move faster with AI guidance built around your career.",
    monthly: 12,
    annual: 10,
    action: "Start 14-day free trial",
    featured: true,
    features: [
      "Everything in Starter",
      "Unlimited AI CV tailoring",
      "AI interview practice",
      "Priority applications",
      "Salary insights and benchmarks",
    ],
  },
  {
    name: "Teams",
    description: "Give your hiring team a sharper, simpler hiring workflow.",
    monthly: 49,
    annual: 41,
    action: "Talk to sales",
    features: [
      "Everything in Pro",
      "Post up to 10 jobs monthly",
      "Candidate pipeline workspace",
      "Team collaboration tools",
      "Dedicated support",
    ],
  },
];

const faqs = [
  ["Can I change plans later?", "Absolutely. Upgrade, downgrade, or cancel whenever your needs change."],
  ["What happens after my free trial?", "We will remind you before the trial ends. You will only be charged if you choose to continue with Pro."],
  ["Do you offer discounts for annual billing?", "Yes. Annual plans include two months free, reflected in the lower monthly price."],
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0b0b0e] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-100 h-192 w-3xl -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -right-64 top-96 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200">
            <Sparkles size={16} /> Pricing that grows with you
          </span>
          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Invest in the work you <span className="text-violet-400">want next.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether you are looking for your next role or building a brilliant team,
            HireLoop makes every move count.
          </p>

          <div className="mt-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1.5 text-sm font-medium">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-5 py-2.5 transition ${!isAnnual ? "bg-white text-zinc-950 shadow" : "text-zinc-400 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-5 py-2.5 transition ${isAnnual ? "bg-white text-zinc-950 shadow" : "text-zinc-400 hover:text-white"}`}
            >
              Annual <span className="ml-1 text-xs font-bold text-violet-600">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annual : plan.monthly;
            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 ${plan.featured ? "border-violet-400 bg-linear-to-b from-violet-500/20 to-[#17131e] shadow-[0_20px_80px_rgba(124,58,237,.22)]" : "border-white/10 bg-white/[0.035] hover:border-white/20"}`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-4 py-1 text-xs font-bold tracking-wide text-white">
                    MOST POPULAR
                  </span>
                )}
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">{plan.description}</p>
                <div className="mt-8 flex items-end gap-1">
                  <span className="text-5xl font-semibold tracking-tight">${price}</span>
                  <span className="mb-1 text-sm text-zinc-400">/ month</span>
                </div>
                <p className="mt-2 h-5 text-sm text-zinc-500">
                  {isAnnual && price > 0 ? "Billed annually" : price === 0 ? "Free forever" : "Billed monthly"}
                </p>
                <Link
                  href={plan.name === "Teams" ? "/contact" : "/register"}
                  className={`mt-8 rounded-xl px-5 py-3.5 text-center text-sm font-semibold transition ${plan.featured ? "bg-violet-500 text-white hover:bg-violet-400" : "border border-white/15 bg-white/5 hover:bg-white/10"}`}
                >
                  {plan.action}
                </Link>
                <div className="my-8 border-t border-white/10" />
                <p className="text-sm font-medium text-zinc-300">What&apos;s included:</p>
                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-zinc-400">
                      <Check className="mt-0.5 shrink-0 text-violet-400" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-24 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">Questions, answered</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Everything should feel clear from the start.</h2>
            <p className="mt-5 max-w-md leading-7 text-zinc-400">Need a hand choosing a plan? Our team is here to help you find the right fit.</p>
            <Link href="/contact" className="mt-7 inline-block text-sm font-semibold text-violet-300 hover:text-violet-200">Chat with our team →</Link>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map(([question, answer], index) => (
              <div key={question}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-medium"
                  aria-expanded={openFaq === index}
                >
                  {question}
                  <ChevronDown className={`shrink-0 text-violet-300 transition ${openFaq === index ? "rotate-180" : ""}`} size={20} />
                </button>
                {openFaq === index && <p className="-mt-2 pb-6 pr-10 text-sm leading-7 text-zinc-400">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
