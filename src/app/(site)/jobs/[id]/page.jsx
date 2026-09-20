import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRightFromSquare,
  Bookmark,
  Briefcase,
  Calendar,
  CircleCheck,
  Clock,
  GraduationCap,
  MapPin,
  Persons,
  TagDollar,
} from "@gravity-ui/icons";
import { getJobById } from "@/app/lib/api/jobs";

function formatSalary(min, max, currency) {
  if (!min && !max) return "Negotiable";
  const fmt = (n) => n.toLocaleString("en-US");
  if (min && max) return `${currency} ${fmt(min)} – ${fmt(max)}`;
  return `${currency} ${fmt(min || max)}`;
}

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function closing(deadline) {
  if (!deadline) return { text: "", urgent: false, closed: false };
  const days = Math.ceil((new Date(deadline) - Date.now()) / 86400000);
  if (days < 0)
    return { text: "Applications closed", urgent: true, closed: true };
  if (days === 0) return { text: "Closes today", urgent: true, closed: false };
  if (days === 1)
    return { text: "Closes tomorrow", urgent: true, closed: false };
  if (days <= 7)
    return { text: `Closes in ${days} days`, urgent: true, closed: false };
  return { text: `Closes in ${days} days`, urgent: false, closed: false };
}

function timeAgo(date) {
  if (!date) return "";
  const days = Math.floor((Date.now() - new Date(date)) / 86400000);
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  if (days < 30) return `Posted ${days} days ago`;
  const months = Math.floor(days / 30);
  return `Posted ${months} month${months === 1 ? "" : "s"} ago`;
}

// "One line.\nAnother line." → list items
function toLines(text) {
  if (!text) return [];
  return text
    .split(/\r?\n|(?<=\.)\s+(?=[A-Z])/)
    .map((line) => line.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) return { title: "Job not found — HireLoop" };
  return {
    title: `${job.title} at ${job.companyName} — HireLoop`,
    description: job.description?.slice(0, 155),
  };
}

export default async function JobDetailsPage({ params }) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) notFound();

  const deadline = closing(job.deadline);
  const requirements = toLines(job.requirements);

  const overview = [
    { icon: Briefcase, label: "Job type", value: job.jobType },
    { icon: MapPin, label: "Workplace", value: job.workplace },
    { icon: GraduationCap, label: "Experience", value: job.experience },
    { icon: Persons, label: "Category", value: job.category },
    { icon: Calendar, label: "Deadline", value: formatDate(job.deadline) },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href="/jobs"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        All jobs
      </Link>

      {/* header */}
      <header className="overflow-hidden rounded-2xl bg-surface ring-1 ring-border/70">
        <div className="flex flex-wrap items-start gap-5 p-6 sm:p-8">
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
            {job.companyLogo ? (
              <Image
                src={job.companyLogo}
                alt=""
                width={64}
                height={64}
                className="size-10 object-contain"
              />
            ) : (
              <span className="text-xl font-semibold text-neutral-700">
                {job.companyName?.charAt(0)}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="text-2xl leading-tight font-semibold tracking-[-0.02em] text-balance text-foreground sm:text-3xl">
              {job.title}
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
              <Link
                href={`/companies/${job.companyId}`}
                className="font-medium text-foreground hover:underline"
              >
                {job.companyName}
              </Link>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4 opacity-60" />
                {job.workplace === "Remote" ? "Remote" : job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="size-4 opacity-60" />
                {job.jobType}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-default px-3 py-1 font-medium text-foreground">
                {job.experience}
              </span>
              <span className="rounded-full bg-default px-3 py-1 font-medium text-foreground">
                {job.workplace}
              </span>
              <span className="rounded-full bg-default px-3 py-1 font-medium text-foreground">
                {job.category}
              </span>
              {deadline.text && (
                <span
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-medium ${
                    deadline.urgent
                      ? "bg-danger-soft text-danger-soft-foreground"
                      : "bg-default text-muted"
                  }`}
                >
                  <Clock className="size-3" />
                  {deadline.text}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        {/* main */}
        <main className="min-w-0 flex-1 space-y-6">
          <section className="rounded-2xl bg-surface p-6 ring-1 ring-border/70 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">
              About this role
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{job.description}</p>
          </section>

          {requirements.length > 0 && (
            <section className="rounded-2xl bg-surface p-6 ring-1 ring-border/70 sm:p-8">
              <h2 className="text-lg font-semibold text-foreground">
                Requirements
              </h2>
              <ul className="mt-4 space-y-3">
                {requirements.map((line, index) => (
                  <li
                    key={index}
                    className="flex gap-3 leading-relaxed text-muted"
                  >
                    <CircleCheck className="mt-1 size-4 shrink-0 text-success" />
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {job.skills?.length > 0 && (
            <section className="rounded-2xl bg-surface p-6 ring-1 ring-border/70 sm:p-8">
              <h2 className="text-lg font-semibold text-foreground">
                Skills you&apos;ll use
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full px-3.5 py-1.5 text-sm text-foreground ring-1 ring-border/70"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* company */}
          <section className="rounded-2xl bg-surface p-6 ring-1 ring-border/70 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">
              About {job.companyName}
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                {job.companyLogo ? (
                  <Image
                    src={job.companyLogo}
                    alt=""
                    width={48}
                    height={48}
                    className="size-8 object-contain"
                  />
                ) : (
                  <span className="font-semibold text-neutral-700">
                    {job.companyName?.charAt(0)}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{job.companyName}</p>
                <p className="text-sm text-muted">{job.location}</p>
              </div>

              <Link
                href={`/companies/${job.companyId}`}
                className="flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground ring-1 ring-border/70 transition-colors hover:bg-default"
              >
                View profile
                <ArrowUpRightFromSquare className="size-3.5" />
              </Link>
            </div>
          </section>
        </main>

        {/* sidebar */}
        <aside className="lg:w-80 lg:shrink-0">
          <div className="space-y-4 lg:sticky lg:top-6">
            {/* apply card */}
            <div className="rounded-2xl bg-surface p-6 ring-1 ring-border/70">
              <p className="flex items-center gap-1.5 text-xs tracking-wide text-muted uppercase">
                <TagDollar className="size-3.5" />
                Salary range
              </p>
              <p className="mt-2 text-2xl font-semibold tabular-nums tracking-tight text-foreground">
                {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
              </p>
              <p className="mt-1 text-xs text-muted">per year</p>

              {deadline.closed ? (
                <p className="mt-5 rounded-xl bg-default py-3 text-center text-sm font-medium text-muted">
                  Applications are closed
                </p>
              ) : (
                <Link
                  href={`/jobs/${job._id}/apply`}
                  className="group relative mt-5 block overflow-hidden rounded-xl bg-accent py-3.5 text-center font-semibold text-accent-foreground shadow-lg shadow-accent/25 ring-1 ring-inset ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:translate-y-0 active:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {/* top inner highlight */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/15 to-transparent"
                  />

                  {/* shine sweep */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/35 to-transparent transition-all duration-700 ease-out group-hover:left-[150%] motion-reduce:hidden"
                  />

                  <span className="relative inline-flex items-center gap-2">
                    Apply now
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )}

              <button
                type="button"
                className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-muted ring-1 ring-border/70 transition-colors duration-200 hover:bg-default hover:text-foreground"
              >
                <Bookmark className="size-4" />
                Save job
              </button>

              <p className="mt-4 text-center text-xs text-muted">
                {timeAgo(job.createdAt)}
              </p>
            </div>

            {/* overview */}
            <div className="rounded-2xl bg-surface p-6 ring-1 ring-border/70">
              <h2 className="text-sm font-semibold text-foreground">
                Job overview
              </h2>
              <dl className="mt-4 space-y-3.5">
                {overview.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="size-4 shrink-0 text-muted opacity-70" />
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className="ml-auto text-sm font-medium text-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
