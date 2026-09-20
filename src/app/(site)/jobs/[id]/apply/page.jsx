import { getJobById } from "@/app/lib/api/jobs";
import { getUserSession } from "@/app/lib/core/session";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "@gravity-ui/icons";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  LayoutCells,
  ShieldKeyhole,
} from "@gravity-ui/icons";
import ApplicationForm from "./ApplicationForm";

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
  <div className="mx-auto max-w-3xl px-4 py-8">
    <Link
      href={`/jobs/${id}`}
      className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
    >
      <ArrowLeft className="size-4" />
      Back to this role
    </Link>

    <header className="relative overflow-hidden rounded-2xl bg-surface p-6 ring-1 ring-border/70 sm:p-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />

      <div className="flex flex-wrap items-start gap-5">
        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
          {job.companyLogo ? (
            <Image
              src={job.companyLogo}
              alt=""
              width={56}
              height={56}
              className="size-9 object-contain"
            />
          ) : (
            <span className="text-lg font-semibold text-neutral-700">
              {job.companyName?.charAt(0)}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium tracking-wider text-muted uppercase">
            Applying for
          </p>
          <h1 className="mt-1.5 text-2xl leading-tight font-semibold tracking-[-0.02em] text-balance text-foreground">
            {job.title}
          </h1>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
            <span className="font-medium text-foreground">
              {job.companyName}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 opacity-60" />
              {job.workplace === "Remote" ? "Remote" : job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="size-4 opacity-60" />
              {job.jobType}
            </span>
          </div>
        </div>
      </div>

      {/* steps */}
      <ol className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border/70 pt-5 text-xs">
        {["Your details", "Resume & links", "Experience", "Cover letter"].map(
          (step, index) => (
            <li key={step} className="flex items-center gap-2 text-muted">
              <span className="flex size-5 items-center justify-center rounded-full bg-default text-[10px] font-semibold text-foreground">
                {index + 1}
              </span>
              {step}
              {index < 3 && (
                <span aria-hidden="true" className="ml-1 opacity-40">
                  ·
                </span>
              )}
            </li>
          )
        )}
      </ol>
    </header>

    <div className="mt-6">
      <ApplicationForm applicant={user} job={job} />
    </div>
  </div>
);
};

export default ApplyJobPage;