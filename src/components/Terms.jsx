import { Scale } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By creating an account or using HireLoop, you agree to these Terms & Conditions. If you don't agree, please don't use the platform.",
  },
  {
    title: "2. Using HireLoop",
    body: "HireLoop connects job seekers with employers across Bangladesh and remote-first teams. You may browse jobs, apply to roles, and use our AI tools to prepare applications, subject to fair use.",
  },
  {
    title: "3. Accounts & eligibility",
    body: "You must be at least 18 years old to create an account. You're responsible for keeping your login credentials secure and for all activity under your account.",
  },
  {
    title: "4. Job postings & employer responsibilities",
    body: "Employers are responsible for the accuracy of their job postings and company information. HireLoop reserves the right to remove listings that are misleading, discriminatory, or violate applicable law.",
  },
  {
    title: "5. Subscriptions & billing",
    body: "Paid plans (Pro and Teams) are billed monthly or annually as selected at checkout. You can upgrade, downgrade, or cancel anytime from your billing settings — see our Pricing page for current plan details.",
  },
  {
    title: "6. Acceptable use",
    body: "You agree not to misuse HireLoop — including scraping data, submitting false information, impersonating another person or company, or attempting to disrupt the platform's operation.",
  },
  {
    title: "7. Intellectual property",
    body: "HireLoop's branding, design, and product are owned by HireLoop. Content you submit (CVs, job posts, messages) remains yours, but you grant us a license to display it as needed to operate the platform.",
  },
  {
    title: "8. Termination",
    body: "We may suspend or terminate accounts that violate these terms. You may close your account at any time from your account settings.",
  },
  {
    title: "9. Disclaimers & limitation of liability",
    body: "HireLoop is provided \"as is.\" We don't guarantee job placement or hiring outcomes, and we're not liable for interactions between job seekers and employers conducted off-platform.",
  },
  {
    title: "10. Changes to these terms",
    body: "We may update these terms from time to time. We'll post the updated date below and, for material changes, notify you by email.",
  },
];

export default function Terms() {
  return (
    <section className="bg-white py-20 text-slate-900 dark:bg-[#0b0b0e] dark:text-white sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Heading */}

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-600 dark:text-violet-300">
          <Scale size={22} />
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms &amp; Conditions
        </h1>

        <p className="mt-4 text-sm text-slate-500 dark:text-zinc-500">
          Last updated: August 2026
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-zinc-400">
          Please read these terms carefully before using HireLoop. They
          explain what you can expect from us, and what we expect from you.
        </p>

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
      </div>
    </section>
  );
}
