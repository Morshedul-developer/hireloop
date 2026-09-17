"use client";

import Link from "next/link";
import { Table } from "@heroui/react";

const statusStyles = {
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  closed: "bg-zinc-200 text-zinc-700 dark:bg-white/10 dark:text-zinc-300",
  draft: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
};

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
    month: "short",
    year: "numeric",
  });
}

export default function JobsTable({ jobs = [] }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Posted jobs">
          <Table.Header>
            <Table.Column>Job Title</Table.Column>
            <Table.Column>Type</Table.Column>
            <Table.Column>Location</Table.Column>
            <Table.Column>Salary</Table.Column>
            <Table.Column>Deadline</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>

          <Table.Body
            renderEmptyState={() => (
              <div className="py-10 text-center text-sm text-zinc-500">
                No jobs posted yet.
              </div>
            )}
          >
            {jobs.map((job) => (
              <Table.Row key={job._id}>
                <Table.Cell>
                  <div className="font-medium text-zinc-900 dark:text-white">
                    {job.title}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {job.category} · {job.experience}
                  </div>
                </Table.Cell>

                <Table.Cell>
                  <div>{job.jobType}</div>
                  <div className="text-xs text-zinc-500">{job.workplace}</div>
                </Table.Cell>

                <Table.Cell>{job.location || "—"}</Table.Cell>

                <Table.Cell className="whitespace-nowrap">
                  {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
                </Table.Cell>

                <Table.Cell className="whitespace-nowrap">
                  {formatDate(job.deadline)}
                </Table.Cell>

                <Table.Cell>
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                      statusStyles[job.status] ?? statusStyles.draft
                    }`}
                  >
                    {job.status || "draft"}
                  </span>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex items-center gap-3 text-sm">
                    <Link
                      href={`/dashboard/recruiter/jobs/${job._id}/edit`}
                      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/dashboard/jobs/${job._id}/applicants`}
                      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    >
                      Applicants
                    </Link>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}