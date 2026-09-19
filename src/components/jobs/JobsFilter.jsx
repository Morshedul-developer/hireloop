"use client";

import { useMemo, useState } from "react";
import { Magnifier, Xmark } from "@gravity-ui/icons";
import { Button, Label, ListBox, Select } from "@heroui/react";
import JobCard from "./JobCard";

const ALL = "all";

const dropdowns = [
  {
    key: "category",
    label: "Category",
    allLabel: "All categories",
    width: "w-44",
    options: [
      "Engineering",
      "Design",
      "Product",
      "Marketing",
      "Sales",
      "Customer Support",
      "Finance",
      "Human Resources",
    ],
  },
  {
    key: "jobType",
    label: "Job type",
    allLabel: "Any type",
    width: "w-40",
    options: ["Full-time", "Part-time", "Contract", "Internship", "Temporary"],
  },
  {
    key: "workplace",
    label: "Workplace",
    allLabel: "Anywhere",
    width: "w-36",
    options: ["On-site", "Hybrid", "Remote"],
  },
  {
    key: "experience",
    label: "Experience",
    allLabel: "Any experience",
    width: "w-40",
    options: ["Entry level", "Junior", "Mid level", "Senior", "Lead"],
  },
];

const salaryBands = [
  { id: "any", label: "Any salary", min: 0 },
  { id: "30k", label: "30k+", min: 30000 },
  { id: "60k", label: "60k+", min: 60000 },
  { id: "100k", label: "100k+", min: 100000 },
  { id: "150k", label: "150k+", min: 150000 },
];

const emptyFilters = {
  category: ALL,
  jobType: ALL,
  workplace: ALL,
  experience: ALL,
  salary: "any",
};

export default function JobsFilter({ jobs = [] }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(emptyFilters);

  const set = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));

  const reset = () => {
    setFilters(emptyFilters);
    setQuery("");
  };

  const hasActive =
    Boolean(query.trim()) ||
    filters.salary !== "any" ||
    dropdowns.some(({ key }) => filters[key] !== ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const minSalary =
      salaryBands.find((band) => band.id === filters.salary)?.min ?? 0;

    return jobs.filter((job) => {
      if (q) {
        const haystack = [
          job.title,
          job.companyName,
          job.location,
          ...(job.skills ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      for (const { key } of dropdowns) {
        if (filters[key] !== ALL && job[key] !== filters[key]) return false;
      }

      if (minSalary && (job.salaryMax ?? job.salaryMin ?? 0) < minSalary)
        return false;

      return true;
    });
  }, [jobs, query, filters]);

  return (
    <div className="space-y-5">
      {/* search + filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex min-w-64 flex-1 items-center gap-2.5 rounded-xl bg-surface px-4 py-2.5 ring-1 ring-border/70 focus-within:ring-2 focus-within:ring-accent/40">
          <Magnifier className="size-4 shrink-0 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, company, skill or location"
            aria-label="Search jobs"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="rounded p-1 text-muted transition-colors hover:text-foreground"
            >
              <Xmark className="size-4" />
            </button>
          )}
        </div>

        {dropdowns.map(({ key, label, allLabel, options, width }) => (
          <Select
            key={key}
            className={width}
            aria-label={label}
            value={filters[key]}
            onChange={(value) => set(key, value)}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id={ALL} textValue={allLabel}>
                  {allLabel}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                {options.map((item) => (
                  <ListBox.Item key={item} id={item} textValue={item}>
                    {item}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        ))}

        <Select
          className="w-36"
          aria-label="Salary range"
          value={filters.salary}
          onChange={(value) => set("salary", value)}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {salaryBands.map((band) => (
                <ListBox.Item key={band.id} id={band.id} textValue={band.label}>
                  {band.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>

        {hasActive && (
          <Button variant="tertiary" onPress={reset}>
            Clear all
          </Button>
        )}
      </div>

      <p className="text-sm text-muted">
        Showing {filtered.length} of {jobs.length}
      </p>

      {/* results */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center">
          <p className="font-medium text-foreground">
            No jobs match your filters
          </p>
          <p className="mt-1 text-sm text-muted">
            Try removing a filter or searching something broader.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}