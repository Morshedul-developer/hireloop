"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  Plus,
  PencilToSquare,
  Globe,
  MapPin,
  Persons,
  Briefcase,
  CircleCheck,
  CircleXmark,
  Clock,
  CircleExclamation,
} from "@gravity-ui/icons";
import { Button, Surface, useOverlayState } from "@heroui/react";
import CompanyForm from "@/components/dashboard/CompanyForm";
import { createCompany } from "@/app/lib/actions/companies";

const statusMap = {
  pending: {
    label: "Pending review",
    icon: Clock,
    className: "bg-warning-soft text-warning-soft-foreground",
    note: "An admin is reviewing your registration. You can post jobs once it's approved.",
  },
  approved: {
    label: "Approved",
    icon: CircleCheck,
    className: "bg-success-soft text-success-soft-foreground",
    note: null,
  },
  rejected: {
    label: "Rejected",
    icon: CircleXmark,
    className: "bg-danger-soft text-danger-soft-foreground",
    note: "Your registration was declined. Update your details and it will be reviewed again.",
  },
};

export default function CompanyProfile({ recruiter, recruiterCompany }) {
  const [company, setCompany] = useState(recruiterCompany);
  const modal = useOverlayState();

  const handleSubmit = async (payload) => {
  const isEdit = Boolean(company);
  const data = { ...payload, recruiterId: recruiter.id };

  const res = await createCompany(data);

  if (res.insertedId) {
    setCompany(data);
    toast.success(isEdit ? "Company updated." : "Company submitted for review.");
  } else {
    toast.error("Could not save the company.");
  }
};

  /* ---------- empty state ---------- */
  if (!company) {
    return (
      <>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-default text-foreground">
              <Briefcase className="size-6" />
            </div>

            <h1 className="mt-5 text-xl font-semibold text-foreground">
              No company registered yet
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Register your company to start posting jobs on HireLoop. An admin
              will review it before your listings go public.
            </p>

            <Button className="mt-6" onPress={modal.open}>
              <Plus className="size-4" />
              Register Company
            </Button>
          </div>
        </div>

        <CompanyForm
          isOpen={modal.isOpen}
          onOpenChange={modal.setOpen}
          onSubmit={handleSubmit}
        />
      </>
    );
  }

  /* ---------- registered ---------- */
  const status = statusMap[company.status] ?? statusMap.pending;
  const StatusIcon = status.icon;

  return (
    <>
      <div className="mx-auto max-w-3xl space-y-4">
        {status.note && (
          <Surface className="flex items-start gap-3 rounded-2xl p-4">
            <CircleExclamation className="mt-0.5 size-4 shrink-0 text-muted" />
            <p className="text-sm text-foreground">{status.note}</p>
          </Surface>
        )}

        <Surface className="overflow-hidden rounded-2xl">
          {/* header */}
          <div className="flex flex-wrap items-start gap-4 border-b border-border px-6 py-6 sm:px-8">
            {company.logo ? (
              <Image
                src={company.logo}
                alt={company.name}
                width={64}
                height={64}
                className="size-16 rounded-xl border border-border object-cover"
              />
            ) : (
              <div className="flex size-16 items-center justify-center rounded-xl bg-default text-xl font-semibold text-muted">
                {company.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-semibold text-foreground">
                  {company.name}
                </h1>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
                >
                  <StatusIcon className="size-3" />
                  {status.label}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{company.industry}</p>
            </div>

            <Button variant="secondary" onPress={modal.open}>
              <PencilToSquare className="size-4" />
              Edit
            </Button>
          </div>

          {/* details */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-5 px-6 py-6 sm:grid-cols-2 sm:px-8">
            <div>
              <dt className="flex items-center gap-1.5 text-xs tracking-wide text-muted uppercase">
                <MapPin className="size-3" />
                Location
              </dt>
              <dd className="mt-1.5 text-sm text-foreground">
                {company.location}
              </dd>
            </div>

            <div>
              <dt className="flex items-center gap-1.5 text-xs tracking-wide text-muted uppercase">
                <Persons className="size-3" />
                Company Size
              </dt>
              <dd className="mt-1.5 text-sm text-foreground">
                {company.employeeRange}
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="flex items-center gap-1.5 text-xs tracking-wide text-muted uppercase">
                <Globe className="size-3" />
                Website
              </dt>
              <dd className="mt-1.5 text-sm">
                {company.website ? (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground underline underline-offset-2 hover:text-muted"
                  >
                    {company.website.replace(/^https?:\/\//, "")}
                  </a>
                ) : (
                  <span className="text-muted">Not added</span>
                )}
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-xs tracking-wide text-muted uppercase">
                About
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed whitespace-pre-line text-muted">
                {company.description}
              </dd>
            </div>
          </dl>
        </Surface>
      </div>

      <CompanyForm
        key={company._id}
        isOpen={modal.isOpen}
        onOpenChange={modal.setOpen}
        onSubmit={handleSubmit}
        initialData={company}
      />
    </>
  );
}
