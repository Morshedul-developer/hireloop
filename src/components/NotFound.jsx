import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  SearchX,
  ChevronRight,
  Briefcase,
  Building2,
  LifeBuoy,
  Tag,
} from "lucide-react";

const popularPages = [
  {
    icon: Briefcase,
    title: "Browse Jobs",
    description: "Explore open roles across top companies.",
    href: "/jobs",
  },
  {
    icon: Building2,
    title: "Companies",
    description: "Discover employers hiring right now.",
    href: "/companies",
  },
  {
    icon: Tag,
    title: "Pricing",
    description: "Compare plans for job seekers and teams.",
    href: "/pricing",
  },
  {
    icon: LifeBuoy,
    title: "Help Center",
    description: "Find answers to common questions.",
    href: "/help-center",
  },
];

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white px-6 py-20 text-center text-slate-900 dark:bg-[#0b0b0e] dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
      </div>

      <Link href="/" className="relative mb-8 flex items-center">
        <Image src="/logo.png" alt="HireLoop" width={135} height={35} className="h-auto w-auto" priority />
      </Link>

      <nav aria-label="Breadcrumb" className="relative flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-zinc-600">
        <Link href="/" className="transition hover:text-violet-600 dark:hover:text-violet-300">
          Home
        </Link>
        <ChevronRight size={12} />
        <span aria-current="page" className="text-slate-500 dark:text-zinc-500">404</span>
      </nav>

      <div className="relative mt-8 w-full max-w-lg rounded-3xl border border-slate-200 bg-slate-50 p-10 dark:border-white/10 dark:bg-white/[0.035]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-600 dark:text-violet-300">
          <SearchX size={24} />
        </div>

        <p
          aria-hidden="true"
          className="mt-6 bg-linear-to-r from-violet-600 to-blue-600 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl"
        >
          404
        </p>

        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Page not found
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-slate-600 dark:text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Browse Jobs
          </Link>
        </div>
      </div>

      {/* Popular pages */}

      <div className="relative mt-14 w-full max-w-3xl">
        <p className="text-sm font-semibold text-slate-500 dark:text-zinc-500">
          Or try one of these
        </p>

        <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
          {popularPages.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-violet-400/30 hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-violet-500/20 dark:hover:bg-white/6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
                <Icon size={18} />
              </div>
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
