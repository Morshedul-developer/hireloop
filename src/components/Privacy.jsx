import Link from "next/link";
import { ShieldCheck, Lock, Trash2, EyeOff } from "lucide-react";

const highlights = [
  {
    icon: EyeOff,
    title: "We never sell your data",
    body: "Your personal information is never sold to third parties, period.",
  },
  {
    icon: Trash2,
    title: "Delete anytime",
    body: "Remove your account and personal data whenever you choose.",
  },
  {
    icon: Lock,
    title: "Encrypted & secure",
    body: "Industry-standard encryption protects your data at every step.",
  },
];

const sections = [
  {
    title: "1. Information we collect",
    body: "We collect information you provide directly — your name, email, CV, and application details — along with usage data like pages visited and searches performed, to help match you with relevant roles.",
  },
  {
    title: "2. How we use your information",
    body: "We use your data to operate HireLoop: matching you with jobs, powering the AI assistant, sending application updates, and improving the platform. We don't sell your personal data to third parties.",
  },
  {
    title: "3. Sharing with employers",
    body: "When you apply to a job, your CV and application details are shared with that employer. Employers can't see your contact information until you choose to apply.",
  },
  {
    title: "4. Cookies & tracking",
    body: "We use cookies to keep you signed in, remember your theme preference, and understand how HireLoop is used. You can control cookies through your browser settings.",
  },
  {
    title: "5. Data retention",
    body: "We retain your account data for as long as your account is active. If you delete your account, we remove your personal data within 30 days, except where retention is required by law.",
  },
  {
    title: "6. Your rights",
    body: "You can access, update, or delete your personal data at any time from your account settings, or by contacting our support team directly.",
  },
  {
    title: "7. Data security",
    body: "We use industry-standard encryption and access controls to protect your data. No system is perfectly secure, but we work continuously to keep your information safe.",
  },
  {
    title: "8. Third-party services",
    body: "We use trusted third-party providers for things like payments and email delivery. These providers only receive the data needed to perform their function.",
  },
  {
    title: "9. Children's privacy",
    body: "HireLoop is not intended for anyone under 18. We don't knowingly collect data from minors.",
  },
  {
    title: "10. Changes to this policy",
    body: "We may update this policy from time to time. We'll post the updated date below and, for material changes, notify you by email.",
  },
];

export default function Privacy() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900 dark:bg-[#0b0b0e] dark:text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-100 h-192 w-3xl -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -right-64 top-96 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
            <ShieldCheck size={16} /> Your privacy, protected
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Privacy{" "}
            <span className="text-violet-600 dark:text-violet-400">
              Policy
            </span>
          </h1>

          <p className="mt-4 text-sm text-slate-500 dark:text-zinc-500">
            Last updated: August 2026
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Your privacy matters to us. This policy explains what data
            HireLoop collects, how we use it, and the choices you have.
          </p>
        </div>

        {/* Highlights */}

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.035]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Sections */}

        <div className="mt-14 space-y-10 border-t border-slate-200 pt-14 dark:border-white/10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-zinc-400">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.035]">
          <h2 className="font-semibold">Questions about your data?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
            Reach out to our team and we'll be happy to help.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </section>
  );
}
