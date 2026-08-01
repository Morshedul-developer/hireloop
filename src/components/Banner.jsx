import { Search, MapPin, ArrowRight, BadgeCheck, Sparkles, Briefcase, Building2, Users } from "lucide-react";

const searchTags = ["React", "Next.js", "Remote", "Frontend", "Backend", "UI/UX"];

const trustedCompanies = [
  "Brain Station 23",
  "Tiger IT",
  "BJIT",
  "Enosis",
  "CloudNine Systems",
];

const matchedJobs = [
  { title: "Senior Frontend Developer", company: "Brain Station 23", match: 96 },
  { title: "React Developer", company: "Tiger IT", match: 91 },
  { title: "Product Designer", company: "Enosis", match: 88 },
];

const weekStats = [
  { label: "Applications sent", value: "12" },
  { label: "Interviews scheduled", value: "3" },
  { label: "Offers received", value: "1" },
];

const activityBars = [35, 55, 40, 70, 50, 90, 65];

const heroStats = [
  { icon: Briefcase, value: "15K+", label: "Live Jobs" },
  { icon: Building2, value: "2.5K+", label: "Companies" },
  { icon: Users, value: "100K+", label: "Candidates" },
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-white pb-40 pt-20 dark:bg-[#0b0b0e] sm:pb-48 sm:pt-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-linear-to-r from-transparent via-violet-400/50 to-transparent" />
        <div className="absolute left-1/2 -top-40 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
          <BadgeCheck size={16} />
          Bangladesh&apos;s #1 Career Platform
        </span>

        <h1 className="mx-auto mt-8 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
          Find your{" "}
          <span className="bg-linear-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-blue-400">
            dream job
          </span>
          , faster than ever.
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
          Discover thousands of verified openings from top companies. Apply
          instantly, track everything in one place, and get hired with
          confidence.
        </p>

        {/* Search */}

        <div className="mx-auto mt-11 flex max-w-2xl flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 text-left shadow-2xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/40 sm:flex-row sm:items-center sm:gap-0">
          <div className="flex flex-1 items-center gap-3 px-3">
            <Search className="shrink-0 text-slate-400 dark:text-zinc-500" size={20} />
            <input
              placeholder="Job title or keyword"
              className="h-14 w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <div className="hidden h-8 w-px bg-slate-200 dark:bg-white/10 sm:block" />

          <div className="flex flex-1 items-center gap-3 px-3">
            <MapPin className="shrink-0 text-slate-400 dark:text-zinc-500" size={20} />
            <input
              placeholder="Location"
              className="h-14 w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>

          <button className="flex h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-500 px-8 font-semibold text-white transition hover:bg-violet-400">
            Search Jobs
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {searchTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition hover:border-violet-400/30 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Trusted by */}

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500">
            Trusted by teams at
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustedCompanies.map((name) => (
              <span key={name} className="text-sm font-semibold text-slate-600 dark:text-zinc-400">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Product preview */}

      <div className="relative mx-auto mt-20 max-w-5xl px-6">
        <div className="absolute -left-4 -top-20 z-20 hidden animate-float items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#151518]/95 lg:flex">
          <div className="rounded-lg bg-violet-500/15 p-2 text-violet-500 dark:text-violet-400">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">96% Match Accuracy</p>
            <p className="text-xs text-slate-500 dark:text-zinc-400">Powered by HireLoop AI</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-2xl shadow-violet-950/10 backdrop-blur dark:border-white/10 dark:bg-white/4 dark:shadow-violet-950/40">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs text-slate-500 dark:text-zinc-500">hireloop.com/matches</span>
          </div>

          <div className="grid sm:grid-cols-[1.4fr_1fr]">
            <div className="space-y-3 p-6 sm:border-r sm:border-slate-200 dark:sm:border-white/10">
              <p className="text-left text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500">
                Recommended for you
              </p>

              {matchedJobs.map((job) => (
                <div
                  key={job.title}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-bold text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-violet-300">
                      {initials(job.company)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{job.title}</p>
                      <p className="text-xs text-slate-500 dark:text-zinc-500">{job.company}</p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
                    {job.match}%
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-5 p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-zinc-500">
                This week
              </p>

              <div className="space-y-3">
                {weekStats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-zinc-400">{stat.label}</span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex h-16 items-end gap-1.5">
                {activityBars.map((height, index) => (
                  <div
                    key={index}
                    className="w-full rounded-t-sm bg-violet-500/60"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping stats bar */}

        <div className="relative z-20 mx-auto -mt-8 flex w-11/12 max-w-3xl flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white/95 px-8 py-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-[#151518]/95 dark:shadow-black/50 sm:flex-row sm:justify-around sm:gap-0 sm:divide-x sm:divide-slate-200 dark:sm:divide-white/10">
          {heroStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 sm:px-6">
              <Icon className="shrink-0 text-violet-500 dark:text-violet-400" size={22} />
              <div className="text-left">
                <p className="text-xl font-bold text-slate-900 dark:text-white">{value}</p>
                <p className="text-xs text-slate-500 dark:text-zinc-400">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
