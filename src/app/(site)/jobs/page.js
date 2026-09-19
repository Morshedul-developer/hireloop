import { getJobs } from "@/app/lib/api/jobs";
import JobsFilter from "@/components/jobs/JobsFilter";

export default async function JobsPage() {
  const jobs = await getJobs("/api/jobs");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Browse Jobs
      </h1>
      <p className="mt-2 text-muted">
        {jobs.length} open {jobs.length === 1 ? "role" : "roles"} right now.
      </p>

      <div className="mt-8">
        <JobsFilter jobs={jobs} />
      </div>
    </div>
  );
}