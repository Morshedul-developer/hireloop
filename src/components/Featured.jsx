"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  MapPin,
  Clock3,
  BadgeDollarSign,
  Heart,
  ArrowRight,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Brain Station 23",
    logo: "/companies/brainstation.png",
    location: "Dhaka",
    salary: "৳80k - ৳120k",
    type: "Full Time",
    featured: true,
  },
  {
    id: 2,
    title: "React Developer",
    company: "Tiger IT",
    logo: "/companies/tigerit.png",
    location: "Remote",
    salary: "৳70k - ৳110k",
    type: "Remote",
    featured: true,
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "BJIT",
    logo: "/companies/bjit.png",
    location: "Dhaka",
    salary: "৳90k+",
    type: "Hybrid",
    featured: true,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Enosis",
    logo: "/companies/enosis.png",
    location: "Chattogram",
    salary: "৳60k - ৳90k",
    type: "Full Time",
    featured: true,
  },
];

export default function FeaturedJobs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🔥 Featured Opportunities
            </span>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Featured Jobs
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-slate-500">
              Discover hand-picked opportunities from Bangladesh's top companies
              and start your next career journey today.
            </p>
          </div>

          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-blue-600 px-6 py-3 font-semibold shadow-sm transition-all hover:border-blue-600 hover:bg-blue-700 hover:text-white"
          >
            View All Jobs
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="
group
relative
flex
flex-col
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-sm
transition-all
duration-500
hover:-translate-y-2
hover:border-blue-500
hover:shadow-[0_25px_70px_rgba(37,99,235,.18)]
"
            >
              {/* Featured */}

              {job.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  Featured
                </span>
              )}

              <button className="absolute left-5 top-5 rounded-full border p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-500">
                <Heart size={18} />
              </button>

              {/* Logo */}

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-slate-100">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={40}
                    height={40}
                  />
                </div>

                <div>
                  <h4 className="font-bold">{job.company}</h4>

                  <p className="text-sm text-slate-500">Verified Company</p>
                </div>
              </div>

              {/* Title */}

              <h3 className="mt-8 text-xl font-bold transition text-blue-600">
                {job.title}
              </h3>

              {/* Details */}

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={18} />
                  {job.location}
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Clock3 size={18} />
                  {job.type}
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <BadgeDollarSign size={18} />
                  {job.salary}
                </div>
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-semibold text-white transition group-hover:bg-blue-600">
                Apply Now
                <BriefcaseBusiness size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Button */}

        <div className="mt-10 text-center lg:hidden">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
