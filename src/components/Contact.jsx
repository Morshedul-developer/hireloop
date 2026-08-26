"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  Sparkles,
  Send,
  Loader2,
  Mail,
  Phone,
  MapPin,
  MessagesSquare,
  Clock,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const MESSAGE_MAX_LENGTH = 500;

const reasons = [
  "General inquiry",
  "Sales / Teams plan",
  "Account support",
  "Press & media",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: "support@hireloop.com",
    href: "mailto:support@hireloop.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+880 1234-567890",
    href: "tel:+8801234567890",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Gulshan Avenue, Dhaka 1212, Bangladesh",
    href: "https://maps.google.com/?q=Gulshan+Avenue+Dhaka",
  },
];

const businessHours = [
  { day: "Sunday – Thursday", hours: "9:00 AM – 6:00 PM (GMT+6)" },
  { day: "Friday – Saturday", hours: "Closed" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: reasons[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success("Message sent — our team will reply within 24 hours!");
    setForm({ name: "", email: "", reason: reasons[0], message: "" });
    setIsSubmitting(false);
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

        {/* Form + info */}

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-slate-700 dark:text-zinc-300"
                >
                  Full name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Fatima Rahman"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-slate-700 dark:text-zinc-300"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="contact-reason"
                className="text-sm font-medium text-slate-700 dark:text-zinc-300"
              >
                Reason for contact
              </label>
              <select
                id="contact-reason"
                name="reason"
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-slate-700 dark:text-zinc-300"
                >
                  Message
                </label>
                <span className="text-xs text-slate-400 dark:text-zinc-500">
                  {form.message.length}/{MESSAGE_MAX_LENGTH}
                </span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={MESSAGE_MAX_LENGTH}
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us how we can help..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500"
              />
              {form.message.length > 0 && form.message.length < 10 && (
                <p className="mt-2 text-xs text-red-500">
                  Please add a few more details ({10 - form.message.length}{" "}
                  characters to go).
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send message
                </>
              )}
            </button>
          </form>

          {/* Info */}

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]">
              <h2 className="font-semibold">Contact details</h2>

              <div className="mt-6 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 transition hover:opacity-80"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-zinc-500">{label}</p>
                      <p className="font-medium text-slate-900 dark:text-white">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="rounded-xl bg-white p-3 text-slate-600 transition hover:bg-violet-600 hover:text-white dark:bg-white/5 dark:text-zinc-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
                <Clock size={18} />
              </div>
              <h2 className="mt-5 font-semibold">Business hours</h2>
              <div className="mt-4 space-y-2">
                {businessHours.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-slate-500 dark:text-zinc-500">
                      {day}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-violet-400/20 bg-violet-400/10 p-8 dark:border-violet-500/20 dark:bg-violet-500/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <MessagesSquare size={18} />
              </div>
              <h2 className="mt-5 font-semibold">Prefer self-serve?</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                Most account and billing questions are answered in our Help
                Center.
              </p>
              <Link
                href="/help-center"
                className="mt-4 inline-block text-sm font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
              >
                Visit the Help Center →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
