"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  ChevronDown,
  MapPin,
  Briefcase,
  TagDollar,
  Calendar,
  Tags,
} from "@gravity-ui/icons";
import { createJob } from "@/app/lib/actions/jobs";

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Temporary",
];
const workplaceTypes = ["On-site", "Hybrid", "Remote"];
const experienceLevels = [
  "Entry level",
  "Junior",
  "Mid level",
  "Senior",
  "Lead",
];
const categories = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Product",
  "Customer Support",
  "Finance",
  "Human Resources",
];

const initialForm = {
  title: "",
  category: "",
  jobType: "Full-time",
  workplace: "On-site",
  location: "",
  experience: "Entry level",
  salaryMin: "",
  salaryMax: "",
  currency: "BDT",
  deadline: "",
  skills: "",
  description: "",
  requirements: "",
};

const shell =
  "flex items-center gap-2 rounded-lg border bg-white px-3 py-2.5 transition dark:bg-white/5";
const ok =
  "border-zinc-200 focus-within:border-zinc-400 dark:border-white/10 dark:focus-within:border-white/25";
const bad = "border-red-500/60";
const input =
  "w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500";

function Field({ label, error, children, className = "" }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function TextField({ icon: Icon, error, ...props }) {
  return (
    <div className={`${shell} ${error ? bad : ok}`}>
      {Icon && (
        <Icon width={16} height={16} className="shrink-0 text-zinc-400" />
      )}
      <input className={input} {...props} />
    </div>
  );
}

function SelectField({ value, onChange, options, error }) {
  return (
    <div className={`${shell} ${error ? bad : ok} relative`}>
      <select
        value={value}
        onChange={onChange}
        className={`${input} cursor-pointer appearance-none pr-6 dark:[&>option]:bg-zinc-900`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option || "Select..."}
          </option>
        ))}
      </select>
      <ChevronDown
        width={16}
        height={16}
        className="pointer-events-none absolute right-3 text-zinc-400"
      />
    </div>
  );
}

export default function NewJobPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Job title is required.";
    if (!form.category) next.category = "Pick a category.";
    if (form.workplace !== "Remote" && !form.location.trim())
      next.location = "Location is required.";
    if (!form.description.trim()) next.description = "Description is required.";
    if (
      form.salaryMin &&
      form.salaryMax &&
      Number(form.salaryMin) > Number(form.salaryMax)
    )
      next.salaryMax = "Max must be higher than min.";
    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);

    const payload = {
      ...form,
      salaryMin: form.salaryMin ? Number(form.salaryMin) : null,
      salaryMax: form.salaryMax ? Number(form.salaryMax) : null,
      skills: form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    console.log("Submitting job:", payload);

    const res = await createJob(payload);

    if (res.insertedId) {
      toast.success("Job posted successfully.");
      setForm(initialForm);
      router.push("/dashboard/recruiter");
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950">
        <div className="border-b border-zinc-200 px-8 py-6 dark:border-white/10">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Post a New Job
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Fill in the details to publish this role on HireLoop.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 px-8 py-6 sm:grid-cols-2">
            <Field label="Job Title" error={errors.title}>
              <TextField
                icon={Briefcase}
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="e.g. Senior Frontend Developer"
                error={errors.title}
              />
            </Field>

            <Field label="Category" error={errors.category}>
              <SelectField
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                options={["", ...categories]}
                error={errors.category}
              />
            </Field>

            <Field label="Job Type">
              <SelectField
                value={form.jobType}
                onChange={(e) => update("jobType", e.target.value)}
                options={jobTypes}
              />
            </Field>

            <Field label="Workplace Type">
              <SelectField
                value={form.workplace}
                onChange={(e) => update("workplace", e.target.value)}
                options={workplaceTypes}
              />
            </Field>

            <Field label="Location" error={errors.location}>
              <TextField
                icon={MapPin}
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="City, Country"
                disabled={form.workplace === "Remote"}
                error={errors.location}
              />
            </Field>

            <Field label="Experience Level">
              <SelectField
                value={form.experience}
                onChange={(e) => update("experience", e.target.value)}
                options={experienceLevels}
              />
            </Field>

            <Field label="Salary Range (monthly)" error={errors.salaryMax}>
              <div className="flex gap-2">
                <div className={`${shell} ${ok} w-24 shrink-0`}>
                  <select
                    value={form.currency}
                    onChange={(e) => update("currency", e.target.value)}
                    className={`${input} cursor-pointer appearance-none dark:[&>option]:bg-zinc-900`}
                  >
                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className={`${shell} ${ok}`}>
                  <TagDollar
                    width={16}
                    height={16}
                    className="shrink-0 text-zinc-400"
                  />
                  <input
                    type="number"
                    min="0"
                    value={form.salaryMin}
                    onChange={(e) => update("salaryMin", e.target.value)}
                    placeholder="Min"
                    className={input}
                  />
                </div>
                <div className={`${shell} ${errors.salaryMax ? bad : ok}`}>
                  <input
                    type="number"
                    min="0"
                    value={form.salaryMax}
                    onChange={(e) => update("salaryMax", e.target.value)}
                    placeholder="Max"
                    className={input}
                  />
                </div>
              </div>
            </Field>

            <Field label="Application Deadline">
              <TextField
                icon={Calendar}
                type="date"
                value={form.deadline}
                onChange={(e) => update("deadline", e.target.value)}
              />
            </Field>

            <Field label="Required Skills" className="sm:col-span-2">
              <TextField
                icon={Tags}
                value={form.skills}
                onChange={(e) => update("skills", e.target.value)}
                placeholder="React, Next.js, MongoDB — separate with commas"
              />
            </Field>

            <Field
              label="Job Description"
              error={errors.description}
              className="sm:col-span-2"
            >
              <textarea
                rows={5}
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Describe the role, the team, and what a typical week looks like..."
                className={`${shell} ${errors.description ? bad : ok} ${input} resize-none py-3`}
              />
            </Field>

            <Field label="Requirements" className="sm:col-span-2">
              <textarea
                rows={4}
                value={form.requirements}
                onChange={(e) => update("requirements", e.target.value)}
                placeholder="One requirement per line"
                className={`${shell} ${ok} ${input} resize-none py-3`}
              />
            </Field>
          </div>

          <div className="flex justify-end gap-3 border-t border-zinc-200 px-8 py-5 dark:border-white/10">
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:opacity-60 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {isSubmitting ? "Publishing..." : "Publish Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
