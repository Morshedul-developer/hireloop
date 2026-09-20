"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CircleInfo } from "@gravity-ui/icons";
import {
  Description,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { createApplication } from "@/app/lib/actions/applications";

const urlPattern = /^https?:\/\/.+\..+/i;

const initialForm = {
  phone: "",
  resumeUrl: "",
  portfolioUrl: "",
  yearsOfExperience: "",
  coverLetter: "",
};

export default function ApplicationForm({ applicant, job }) {
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

    if (!form.phone.trim()) next.phone = "Phone number is required.";

    if (!form.resumeUrl.trim()) {
      next.resumeUrl = "A resume link is required.";
    } else if (!urlPattern.test(form.resumeUrl.trim())) {
      next.resumeUrl = "Enter a full link starting with https://";
    }

    if (form.portfolioUrl.trim() && !urlPattern.test(form.portfolioUrl.trim()))
      next.portfolioUrl = "Enter a full link starting with https://";

    if (form.yearsOfExperience === "") {
      next.yearsOfExperience = "Required.";
    } else if (Number(form.yearsOfExperience) < 0) {
      next.yearsOfExperience = "Cannot be negative.";
    }

    if (!form.coverLetter.trim()) {
      next.coverLetter = "Tell them why you're a fit.";
    } else if (form.coverLetter.trim().length < 50) {
      next.coverLetter = "Write at least 50 characters.";
    }

    return next;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      jobId: job._id,
      jobTitle: job.title,
      companyId: job.companyId,
      companyName: job.companyName,

      applicantId: applicant.id,
      applicantName: applicant.name,
      applicantEmail: applicant.email,

      phone: form.phone.trim(),
      resumeUrl: form.resumeUrl.trim(),
      portfolioUrl: form.portfolioUrl.trim(),
      yearsOfExperience: Number(form.yearsOfExperience),
      coverLetter: form.coverLetter.trim(),

      status: "Applied",
      appliedAt: new Date().toISOString(),
    };

    try {
      const res = await createApplication(payload);

      if (res?.insertedId) {
        toast.success("Application submitted.");
        router.push("/");
        // router.push("/dashboard/seeker/applications");
        return;
      }

      toast.error(res?.message || "Could not submit your application.");
    } catch (error) {
      toast.error(error?.message || "Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="w-full overflow-hidden rounded-2xl border border-border bg-surface">
        {/* signed-in strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-default/40 px-6 py-3">
          <p className="text-sm text-muted">
            Applying as{" "}
            <span className="font-medium text-foreground">{applicant.name}</span>
          </p>
          <p className="text-xs text-muted">{applicant.email}</p>
        </div>

        {/* fields */}
        <div className="space-y-4 p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <TextField
              className="w-full sm:col-span-2"
              type="tel"
              value={form.phone}
              onChange={(value) => update("phone", value)}
              isInvalid={Boolean(errors.phone)}
            >
              <Label>Phone number</Label>
              <Input placeholder="+880 1XXX-XXXXXX" />
              <FieldError>{errors.phone}</FieldError>
            </TextField>

            <TextField
              className="w-full"
              type="number"
              value={form.yearsOfExperience}
              onChange={(value) => update("yearsOfExperience", value)}
              isInvalid={Boolean(errors.yearsOfExperience)}
            >
              <Label>Experience</Label>
              <Input min="0" max="50" placeholder="Years" />
              <FieldError>{errors.yearsOfExperience}</FieldError>
            </TextField>
          </div>

          <TextField
            className="w-full"
            type="url"
            value={form.resumeUrl}
            onChange={(value) => update("resumeUrl", value)}
            isInvalid={Boolean(errors.resumeUrl)}
          >
            <Label>Resume link</Label>
            <Input placeholder="https://drive.google.com/file/d/..." />
            {errors.resumeUrl ? (
              <FieldError>{errors.resumeUrl}</FieldError>
            ) : (
              <Description>Make sure the link is publicly viewable</Description>
            )}
          </TextField>

          <TextField
            className="w-full"
            type="url"
            value={form.portfolioUrl}
            onChange={(value) => update("portfolioUrl", value)}
            isInvalid={Boolean(errors.portfolioUrl)}
          >
            <Label>Portfolio, GitHub or LinkedIn</Label>
            <Input placeholder="https://yoursite.com" />
            <FieldError>{errors.portfolioUrl}</FieldError>
          </TextField>

          <TextField
            className="w-full"
            value={form.coverLetter}
            onChange={(value) => update("coverLetter", value)}
            isInvalid={Boolean(errors.coverLetter)}
          >
            <div className="flex items-baseline justify-between gap-2">
              <Label>Why you&apos;re a fit</Label>
              <span className="text-xs text-muted">
                {form.coverLetter.length}/1500
              </span>
            </div>
            <TextArea
              rows={6}
              maxLength={1500}
              placeholder={`I'm applying for the ${job.title} role at ${job.companyName} because...`}
            />
            <FieldError>{errors.coverLetter}</FieldError>
          </TextField>
        </div>

        {/* footer */}
        <div className="flex flex-col-reverse items-center gap-3 border-t border-border bg-default/40 px-6 py-4 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-1.5 text-xs text-muted">
            <CircleInfo className="size-3.5 shrink-0" />
            Shared only with {job.companyName}
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-accent px-7 py-2.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit application"}
          </button>
        </div>
      </div>
    </form>
  );
}