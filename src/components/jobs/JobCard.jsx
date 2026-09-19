"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Briefcase, Clock, Bookmark } from "@gravity-ui/icons";

function formatSalary(min, max) {
  if (!min && !max) return "Negotiable";
  const short = (n) => (n >= 1000 ? `${Math.round(n / 1000)}k` : n);
  if (min && max) return `${short(min)}–${short(max)}`;
  return short(min || max);
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

function closing(deadline) {
  if (!deadline) return { text: "", urgent: false };
  const days = Math.ceil((new Date(deadline) - Date.now()) / 86400000);
  if (days < 0) return { text: "Applications closed", urgent: true };
  if (days === 0) return { text: "Closes today", urgent: true };
  if (days === 1) return { text: "Closes tomorrow", urgent: true };
  if (days <= 7) return { text: `Closes in ${days} days`, urgent: true };
  return { text: `Closes in ${days} days`, urgent: false };
}

export default function JobCard({ job, onSave }) {
  const deadline = closing(job.deadline);
  const posted = timeAgo(job.createdAt);

  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-border/70 transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgb(0_0_0/0.25)]">
      {deadline.urgent && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 bg-danger"
        />
      )}

      <div className="flex flex-col gap-5 p-6">
        {/* company */}
        <div className="flex items-center gap-3">
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
              <span className="text-base font-semibold text-neutral-700">
                {job.companyName?.charAt(0)}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">
              {job.companyName}
            </p>
            <p className="truncate text-xs text-muted">{job.category}</p>
          </div>

          {onSave && (
            <button
              type="button"
              aria-label={`Save ${job.title}`}
              onClick={() => onSave(job._id)}
              className="-mr-2 rounded-lg p-2 text-muted transition-colors hover:bg-default hover:text-foreground"
            >
              <Bookmark className="size-4" />
            </button>
          )}
        </div>

        {/* title */}
        <h3 className="text-[1.375rem] leading-snug font-semibold tracking-[-0.02em] text-balance text-foreground">
          {job.title}
        </h3>

        {/* salary */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl leading-none font-semibold tabular-nums tracking-tight text-foreground">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </span>
          <span className="text-sm font-medium text-muted">{job.currency}</span>
        </div>

        {/* meta */}
        <dl className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Location</dt>
            <MapPin className="size-4 shrink-0 opacity-60" />
            <dd>{job.workplace === "Remote" ? "Remote" : job.location}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Job type</dt>
            <Briefcase className="size-4 shrink-0 opacity-60" />
            <dd>
              {job.jobType}
              {job.workplace !== "Remote" && ` · ${job.workplace}`}
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Experience</dt>
            <dd className="rounded-md bg-default px-2 py-0.5 text-xs font-medium text-foreground">
              {job.experience}
            </dd>
          </div>
        </dl>

        {/* skills */}
        {job.skills?.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {job.skills.slice(0, 4).map((skill) => (
              <li
                key={skill}
                className="rounded-full px-3 py-1 text-xs text-muted ring-1 ring-border/70"
              >
                {skill}
              </li>
            ))}
            {job.skills.length > 4 && (
              <li className="px-1 py-1 text-xs text-muted">
                +{job.skills.length - 4} more
              </li>
            )}
          </ul>
        )}
      </div>

      {/* footer */}
      <footer className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 bg-default/40 px-6 py-3.5">
        <div className="min-w-0 text-xs">
          {posted && <p className="truncate text-muted">{posted}</p>}
          {deadline.text && (
            <p
              className={`flex items-center gap-1 truncate ${
                deadline.urgent ? "font-medium text-danger" : "text-muted"
              }`}
            >
              <Clock className="size-3 shrink-0" />
              {deadline.text}
            </p>
          )}
        </div>

        <Link
          href={`/jobs/${job._id}`}
          className="shrink-0 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-surface transition-opacity hover:opacity-90"
        >
          Apply now
        </Link>
      </footer>
    </article>
  );
}