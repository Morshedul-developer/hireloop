import { getLoggedInRecruiterCompany } from "@/app/lib/api/companies";
import { getCompanyJobs } from "@/app/lib/api/jobs";
import JobsTable from "@/components/dashboard/JobsTable";
import Link from "next/link";

const RecruiterJobsPage = async () => {
  const company = await getLoggedInRecruiterCompany();
  const companyId = company._id;
  const jobs = await getCompanyJobs(companyId);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Jobs</h1>
          <p className="text-sm text-zinc-500">
            {jobs.length} job{jobs.length === 1 ? "" : "s"} posted
          </p>
        </div>
        <Link
          href="/dashboard/recruiter/jobs/new"
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900"
        >
          Post New Job
        </Link>
      </div>

      <JobsTable jobs={jobs} />
    </div>
  );
};

export default RecruiterJobsPage;