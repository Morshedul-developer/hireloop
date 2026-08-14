import { ShieldCheck } from "lucide-react";

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
];

export default function Privacy() {
  return (
    <section className="bg-white py-20 text-slate-900 dark:bg-[#0b0b0e] dark:text-white sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Heading */}

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-600 dark:text-violet-300">
          <ShieldCheck size={22} />
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500 dark:text-zinc-500">
          Last updated: August 2026
        </p>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-zinc-400">
          Your privacy matters to us. This policy explains what data HireLoop
          collects, how we use it, and the choices you have.
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
