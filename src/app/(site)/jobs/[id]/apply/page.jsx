import { getJobById } from "@/app/lib/api/jobs";
import { getUserSession } from "@/app/lib/core/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  LayoutCells,
  ShieldKeyhole,
} from "@gravity-ui/icons";

const ApplyJobPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  const job = await getJobById(id);

  if (!user) {
    redirect(`/auth/sign-in?redirect=/jobs/${id}/apply`);
  }

  if (user.role !== "seeker") {
    const isRecruiter = user.role === "recruiter";

    return (
      <div className="mx-auto flex min-h-[70vh] max-w-lg items-center px-4 py-12">
        <div className="w-full rounded-2xl bg-surface p-8 text-center ring-1 ring-border/70 sm:p-10">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-warning-soft text-warning-soft-foreground">
            <ShieldKeyhole className="size-6" />
          </div>

          <h1 className="mt-6 text-xl font-semibold tracking-[-0.01em] text-foreground">
            Only job seekers can apply
          </h1>

          <p className="mt-2.5 leading-relaxed text-muted">
            You&apos;re signed in as{" "}
            <span className="font-medium text-foreground">{user.name}</span> with
            a {user.role} account.{" "}
            {isRecruiter
              ? "Recruiter accounts post and manage roles rather than apply to them."
              : "This account type doesn't have an applicant profile."}
          </p>

          {job && (
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-default/50 px-4 py-3 text-left">
              <Briefcase className="size-4 shrink-0 text-muted" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {job.title}
                </p>
                <p className="truncate text-xs text-muted">
                  {job.companyName} · {job.location}
                </p>
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-col gap-2.5">
            {isRecruiter && (
              <Link
                href="/dashboard/recruiter"
                className="group flex items-center justify-center gap-2 rounded-xl bg-accent py-3 font-semibold text-accent-foreground shadow-lg shadow-accent/25 ring-1 ring-inset ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/35"
              >
                <LayoutCells className="size-4" />
                Go to your dashboard
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            )}

            <Link
              href={`/jobs/${id}`}
              className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-muted ring-1 ring-border/70 transition-colors hover:bg-default hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to this role
            </Link>
          </div>

          <p className="mt-6 border-t border-border/70 pt-5 text-sm text-muted">
            Need to apply for jobs?{" "}
            <Link
              href="/auth/sign-in"
              className="font-medium text-foreground underline underline-offset-2 hover:no-underline"
            >
              Sign in with a seeker account
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Apply for {job.title}</h1>
    </div>
  );
};

export default ApplyJobPage;