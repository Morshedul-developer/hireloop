"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MapPin, Users, ArrowUpRight, Building2 } from "lucide-react";

const companies = [
  {
    name: "Brain Station 23",
    industry: "Technology",
    location: "Dhaka",
    size: "1000+ employees",
    openJobs: 1,
    description:
      "A leading software engineering firm building products for global clients.",
  },
  {
    name: "Tiger IT",
    industry: "Technology",
    location: "Remote",
    size: "200-500 employees",
    openJobs: 1,
    description:
      "Biometric and identity technology company delivering large-scale systems.",
  },
  {
    name: "BJIT",
    industry: "Technology",
    location: "Dhaka",
    size: "500-1000 employees",
    openJobs: 2,
    description:
      "Offshore software development partner for Japanese and European clients.",
  },
  {
    name: "Enosis",
    industry: "Design",
    location: "Chattogram",
    size: "50-200 employees",
    openJobs: 1,
    description:
      "Product design and engineering studio crafting digital experiences.",
  },
  {
    name: "Pixel Forge Studio",
    industry: "Design",
    location: "Remote",
    size: "10-50 employees",
    openJobs: 1,
    description: "A remote-first design studio focused on brand and product work.",
  },
  {
    name: "MarketWave Agency",
    industry: "Marketing & Sales",
    location: "Dhaka",
    size: "50-200 employees",
    openJobs: 1,
    description: "Full-service digital marketing agency for growing brands.",
  },
  {
    name: "Northbound Retail",
    industry: "Marketing & Sales",
    location: "Sylhet",
    size: "200-500 employees",
    openJobs: 1,
    description: "Regional retail chain expanding its sales and store teams.",
  },
  {
    name: "CapitalTrust Finance",
    industry: "Finance & Accounting",
    location: "Dhaka",
    size: "200-500 employees",
    openJobs: 1,
    description: "Financial services firm offering lending and advisory products.",
  },
  {
    name: "Ledgerline Partners",
    industry: "Finance & Accounting",
    location: "Hybrid",
    size: "10-50 employees",
    openJobs: 1,
    description: "Accounting and audit practice serving SMEs across the region.",
  },
  {
    name: "NextGen Health",
    industry: "Healthcare",
    location: "Dhaka",
    size: "500-1000 employees",
    openJobs: 1,
    description: "Private healthcare network operating clinics and diagnostics.",
  },
  {
    name: "Helpline Direct",
    industry: "Customer Support",
    location: "Remote",
    size: "50-200 employees",
    openJobs: 1,
    description: "Outsourced customer support provider for e-commerce brands.",
  },
  {
    name: "Peoplefirst Co.",
    industry: "Human Resources",
    location: "Dhaka",
    size: "10-50 employees",
    openJobs: 1,
    description: "HR consultancy helping companies build better hiring practices.",
  },
  {
    name: "CloudNine Systems",
    industry: "Engineering",
    location: "Remote",
    size: "50-200 employees",
    openJobs: 1,
    description: "Cloud infrastructure and DevOps consultancy for scaling teams.",
  },
];

const industries = [
  "All Industries",
  "Technology",
  "Design",
  "Marketing & Sales",
  "Finance & Accounting",
  "Healthcare",
  "Customer Support",
  "Human Resources",
  "Engineering",
];

function companyInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Companies() {
  const [query, setQuery] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("All Industries");

  const filteredCompanies = useMemo(() => {
    const search = query.trim().toLowerCase();

    return companies.filter((company) => {
      const matchesQuery =
        !search ||
        company.name.toLowerCase().includes(search) ||
        company.industry.toLowerCase().includes(search);

      const matchesIndustry =
        activeIndustry === "All Industries" || company.industry === activeIndustry;

      return matchesQuery && matchesIndustry;
    });
  }, [query, activeIndustry]);

  const totalOpenJobs = companies.reduce((sum, company) => sum + company.openJobs, 0);

  return (
    <div className="bg-white text-slate-900 dark:bg-[#0b0b0e] dark:text-white">
      {/* Hero / Search */}

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 -top-64 h-150 w-3xl -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
            <Building2 size={16} /> {companies.length} companies · {totalOpenJobs} open roles
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Companies hiring on <span className="text-violet-600 dark:text-violet-400">HireLoop.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400">
            Browse the teams building in Bangladesh and remote-first, and find
            the one that fits where you want to work next.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/5">
            <Search className="ml-3 shrink-0 text-slate-400 dark:text-zinc-500" size={20} />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Company name or industry"
              className="w-full bg-transparent px-2 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>
        </div>
      </section>

      {/* Filters */}

      <section className="border-y border-slate-200 bg-slate-50 py-6 dark:border-white/10 dark:bg-white/2">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => setActiveIndustry(industry)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeIndustry === industry
                    ? "bg-violet-500 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-white"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-sm text-slate-600 dark:text-zinc-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredCompanies.length}</span>{" "}
            of {companies.length} companies
          </p>

          {filteredCompanies.length === 0 ? (
            <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 py-24 text-center dark:border-white/10 dark:bg-white/3">
              <Building2 className="text-slate-400 dark:text-zinc-600" size={40} />
              <h3 className="mt-5 text-xl font-semibold">No companies match your search</h3>
              <p className="mt-2 text-slate-600 dark:text-zinc-400">Try a different keyword or industry.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveIndustry("All Industries");
                }}
                className="mt-6 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredCompanies.map((company) => (
                <div
                  key={company.name}
                  className="group relative flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white dark:border-white/10 dark:bg-white/3 dark:hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-bold text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-violet-300">
                      {companyInitials(company.name)}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{company.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-zinc-500">{company.industry}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                    {company.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-400">
                      <MapPin size={16} />
                      {company.location}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-400">
                      <Users size={16} />
                      {company.size}
                    </div>
                  </div>

                  <Link
                    href={`/jobs?q=${encodeURIComponent(company.name)}`}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-semibold text-white transition group-hover:bg-violet-500 dark:bg-white/10"
                  >
                    {company.openJobs} open {company.openJobs === 1 ? "role" : "roles"}
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
