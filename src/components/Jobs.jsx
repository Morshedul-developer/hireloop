"use client";

import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Clock3,
  BadgeDollarSign,
  Heart,
  BriefcaseBusiness,
  SearchX,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Brain Station 23",
    location: "Dhaka",
    salary: "৳80k - ৳120k",
    type: "Full Time",
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "React Developer",
    company: "Tiger IT",
    location: "Remote",
    salary: "৳70k - ৳110k",
    type: "Remote",
    category: "Technology",
    featured: true,
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "BJIT",
    location: "Dhaka",
    salary: "৳90k+",
    type: "Hybrid",
    category: "Technology",
    featured: true,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Enosis",
    location: "Chattogram",
    salary: "৳60k - ৳90k",
    type: "Full Time",
    category: "Design",
    featured: true,
  },
  {
    id: 5,
    title: "Product Designer",
    company: "Pixel Forge Studio",
    location: "Remote",
    salary: "৳55k - ৳85k",
    type: "Remote",
    category: "Design",
  },
  {
    id: 6,
    title: "Digital Marketing Manager",
    company: "MarketWave Agency",
    location: "Dhaka",
    salary: "৳65k - ৳95k",
    type: "Full Time",
    category: "Marketing & Sales",
  },
  {
    id: 7,
    title: "Sales Executive",
    company: "Northbound Retail",
    location: "Sylhet",
    salary: "৳35k - ৳55k",
    type: "Full Time",
    category: "Marketing & Sales",
  },
  {
    id: 8,
    title: "Financial Analyst",
    company: "CapitalTrust Finance",
    location: "Dhaka",
    salary: "৳70k - ৳100k",
    type: "Full Time",
    category: "Finance & Accounting",
  },
  {
    id: 9,
    title: "Staff Accountant",
    company: "Ledgerline Partners",
    location: "Hybrid",
    salary: "৳45k - ৳65k",
    type: "Hybrid",
    category: "Finance & Accounting",
  },
  {
    id: 10,
    title: "Registered Nurse",
    company: "NextGen Health",
    location: "Dhaka",
    salary: "৳50k - ৳75k",
    type: "Full Time",
    category: "Healthcare",
  },
  {
    id: 11,
    title: "Customer Support Specialist",
    company: "Helpline Direct",
    location: "Remote",
    salary: "৳30k - ৳45k",
    type: "Remote",
    category: "Customer Support",
  },
  {
    id: 12,
    title: "HR Business Partner",
    company: "Peoplefirst Co.",
    location: "Dhaka",
    salary: "৳60k - ৳85k",
    type: "Full Time",
    category: "Human Resources",
  },
  {
    id: 13,
    title: "DevOps Engineer",
    company: "CloudNine Systems",
    location: "Remote",
    salary: "৳95k - ৳130k",
    type: "Remote",
    category: "Engineering",
    featured: true,
  },
  {
    id: 14,
    title: "QA Engineer",
    company: "BJIT",
    location: "Dhaka",
    salary: "৳55k - ৳80k",
    type: "Hybrid",
    category: "Engineering",
  },
];

const categories = [
  "All Categories",
  "Technology",
  "Design",
  "Marketing & Sales",
  "Finance & Accounting",
  "Healthcare",
  "Customer Support",
  "Human Resources",
  "Engineering",
];

const jobTypes = ["All Types", "Full Time", "Remote", "Hybrid"];

function companyInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Jobs({ initialCategory }) {
  const initialCategoryMatch = categories.find(
    (category) => category.toLowerCase() === (initialCategory || "").toLowerCase()
  );

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    initialCategoryMatch || "All Categories"
  );
  const [activeType, setActiveType] = useState("All Types");

  const filteredJobs = useMemo(() => {
    const search = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesQuery =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search);

      const matchesCategory =
        activeCategory === "All Categories" || job.category === activeCategory;

      const matchesType = activeType === "All Types" || job.type === activeType;

      return matchesQuery && matchesCategory && matchesType;
    });
  }, [query, activeCategory, activeType]);

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("All Categories");
    setActiveType("All Types");
  };

  return (
    <div className="bg-[#0b0b0e] text-white">
      {/* Hero / Search */}

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 -top-64 h-150 w-3xl -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200">
            <BriefcaseBusiness size={16} /> {jobs.length} open roles right now
          </span>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            Find your next <span className="text-violet-400">role.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Search live openings from top companies hiring across Bangladesh
            and remote-first teams.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
            <Search className="ml-3 shrink-0 text-zinc-500" size={20} />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Job title, company, or location"
              className="w-full bg-transparent px-2 py-3 text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Filters */}

      <section className="border-y border-white/10 bg-white/[0.02] py-6">
        <div className="mx-auto max-w-7xl space-y-4 px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-violet-500 text-white"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                  activeType === type
                    ? "bg-white text-zinc-950"
                    : "border border-white/10 text-zinc-500 hover:border-white/20 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-sm text-zinc-400">
            Showing <span className="font-semibold text-white">{filteredJobs.length}</span> of{" "}
            {jobs.length} jobs
          </p>

          {filteredJobs.length === 0 ? (
            <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] py-24 text-center">
              <SearchX className="text-zinc-600" size={40} />
              <h3 className="mt-5 text-xl font-semibold">No jobs match your filters</h3>
              <p className="mt-2 text-zinc-400">Try a different keyword or clear your filters.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/[0.05]"
                >
                  {job.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                  )}

                  <button className="absolute left-5 top-5 rounded-full border border-white/10 p-2 text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400">
                    <Heart size={18} />
                  </button>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-violet-300">
                      {companyInitials(job.company)}
                    </div>

                    <div>
                      <h4 className="font-bold text-white">{job.company}</h4>
                      <p className="text-sm text-zinc-500">{job.category}</p>
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white">{job.title}</h3>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3 text-zinc-400">
                      <MapPin size={18} />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-3 text-zinc-400">
                      <Clock3 size={18} />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-3 text-zinc-400">
                      <BadgeDollarSign size={18} />
                      {job.salary}
                    </div>
                  </div>

                  <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 py-3 font-semibold text-white transition group-hover:bg-violet-500">
                    Apply Now
                    <BriefcaseBusiness size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
