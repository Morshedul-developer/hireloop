"use client";

import { Sparkles, Bot } from "lucide-react";

const chatLog = [
  {
    from: "user",
    text: "Find me a remote React role in Bangladesh with 3+ years experience.",
  },
  {
    from: "ai",
    text: "Found 6 strong matches. Top pick: React Developer at Tiger IT — remote, ৳70k-৳110k, 92% match to your profile.",
  },
  {
    from: "user",
    text: "Can you tailor my CV for that role?",
  },
  {
    from: "ai",
    text: "Done. I highlighted your React and TypeScript projects, and reordered your experience to lead with frontend work.",
  },
];

export default function AiAssistant() {
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
            <Sparkles size={16} /> Introducing HireLoop AI
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Your{" "}
            <span className="text-violet-600 dark:text-violet-400">
              AI career assistant
            </span>{" "}
            is here.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Search jobs, tailor your CV, and practice interviews — all through
            one conversation that understands your career.
          </p>
        </div>

        {/* Chat mockup */}

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_25px_70px_rgba(15,23,42,.08)] dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_25px_70px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4 dark:border-white/10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold">HireLoop AI</p>
                <p className="text-xs text-slate-500 dark:text-zinc-500">
                  Always online
                </p>
              </div>
            </div>

            <div className="space-y-4 px-6 py-6">
              {chatLog.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.from === "user"
                        ? "bg-violet-600 text-white"
                        : "bg-white text-slate-700 dark:bg-white/10 dark:text-zinc-200"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
