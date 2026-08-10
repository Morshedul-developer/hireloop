"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Sparkles, Send } from "lucide-react";

const reasons = [
  "General inquiry",
  "Sales / Teams plan",
  "Account support",
  "Press & media",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: reasons[0],
    message: "",
  });

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    toast.success("Message sent — our team will reply within 24 hours!");
    setForm({ name: "", email: "", reason: reasons[0], message: "" });
  }

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
            <Sparkles size={16} /> Contact Us
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s{" "}
            <span className="text-violet-600 dark:text-violet-400">talk.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Questions about your account, a hiring plan, or press inquiries —
            our team typically replies within 24 hours.
          </p>
        </div>

        {/* Form */}

        <div className="mx-auto mt-16 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Fatima Rahman"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                Reason for contact
              </label>
              <select
                value={form.reason}
                onChange={(event) => updateField("reason", event.target.value)}
                className="mt-2 w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                {reasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us how we can help..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-500 sm:w-auto sm:px-8"
            >
              <Send size={18} />
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
