"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  Briefcase,
  ArrowUpFromLine,
  TrashBin,
} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

const industries = [
  "Technology",
  "Fintech",
  "E-Commerce",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Media & Entertainment",
  "Consulting",
  "Developer Tools",
  "Other",
];

const employeeRanges = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
];

const emptyForm = {
  name: "",
  industry: "",
  website: "",
  location: "",
  employeeRange: "1-10 employees",
  logo: "",
  description: "",
};

export default function CompanyForm({
  isOpen,
  onOpenChange,
  onSubmit,
  initialData = null,
}) {
  const [form, setForm] = useState(initialData ?? emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const isEdit = Boolean(initialData);

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleLogoUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      toast.error("Only PNG or JPG images are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be under 5MB.");
      return;
    }

    setIsUploading(true);

    try {
      const body = new FormData();
      body.append("image", file);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        { method: "POST", body }
      );
      const data = await res.json();

      if (!data.success) throw new Error("Upload failed");

      update("logo", data.data.display_url);
      toast.success("Logo uploaded.");
    } catch {
      toast.error("Could not upload the logo. Try again.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Company name is required.";
    if (!form.industry) next.industry = "Pick an industry.";
    if (!form.location.trim()) next.location = "Location is required.";
    if (!form.description.trim()) next.description = "Add a short description.";
    else if (form.description.trim().length < 15)
      next.description = "Write at least 15 characters.";
    return next;
  };

  const handleSubmit = async (close) => {
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setIsSubmitting(true);

    const payload = {
      ...form,
      name: form.name.trim(),
      website: form.website.trim()
        ? `https://${form.website.trim().replace(/^https?:\/\//, "")}`
        : "",
    };

    try {
      await onSubmit(payload);
      close();
    } catch (error) {
      toast.error(error?.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal.Backdrop isOpen={isOpen} variant="blur" onOpenChange={onOpenChange}>
      <Modal.Container placement="auto" scroll="inside" size="lg">
        <Modal.Dialog>
          {({ close }) => (
            <>
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Briefcase className="size-5" />
                </Modal.Icon>
                <Modal.Heading>
                  {isEdit ? "Edit Company" : "Register New Company"}
                </Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  {isEdit
                    ? "Update your business details."
                    : "Enter your business details to start hiring on HireLoop."}
                </p>
              </Modal.Header>

              <Modal.Body>
                <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                  <TextField
                    className="w-full"
                    isInvalid={Boolean(errors.name)}
                    value={form.name}
                    onChange={(value) => update("name", value)}
                  >
                    <Label>Company Name</Label>
                    <Input placeholder="e.g. Acme Corp" />
                    <FieldError>{errors.name}</FieldError>
                  </TextField>

                  <Select
                    fullWidth
                    isInvalid={Boolean(errors.industry)}
                    placeholder="Select industry"
                    value={form.industry || null}
                    onChange={(value) => update("industry", value)}
                  >
                    <Label>Industry / Category</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        {industries.map((item) => (
                          <ListBox.Item key={item} id={item} textValue={item}>
                            {item}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                    <FieldError>{errors.industry}</FieldError>
                  </Select>

                  <TextField
                    className="w-full"
                    value={form.website}
                    onChange={(value) => update("website", value)}
                  >
                    <Label>Website URL</Label>
                    <Input placeholder="www.company.com" />
                    <Description>Optional — https:// is added for you</Description>
                  </TextField>

                  <TextField
                    className="w-full"
                    isInvalid={Boolean(errors.location)}
                    value={form.location}
                    onChange={(value) => update("location", value)}
                  >
                    <Label>Location</Label>
                    <Input placeholder="City, Country" />
                    <FieldError>{errors.location}</FieldError>
                  </TextField>

                  <Select
                    fullWidth
                    value={form.employeeRange}
                    onChange={(value) => update("employeeRange", value)}
                  >
                    <Label>Employee Count Range</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        {employeeRanges.map((item) => (
                          <ListBox.Item key={item} id={item} textValue={item}>
                            {item}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <div className="flex flex-col gap-1">
                    <Label>Company Logo</Label>
                    <div className="flex items-center gap-3">
                      {form.logo ? (
                        <div className="relative shrink-0">
                          <Image
                            src={form.logo}
                            alt="Logo preview"
                            width={56}
                            height={56}
                            className="size-14 rounded-lg border border-border object-cover"
                          />
                          <button
                            type="button"
                            aria-label="Remove logo"
                            onClick={() => update("logo", "")}
                            className="absolute -top-1.5 -right-1.5 rounded-full bg-danger p-1 text-danger-foreground"
                          >
                            <TrashBin className="size-2.5" />
                          </button>
                        </div>
                      ) : (
                        <label
                          className={`flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-dashed border-border transition hover:border-foreground/40 ${
                            isUploading ? "opacity-50" : ""
                          }`}
                        >
                          <ArrowUpFromLine className="size-4 text-muted" />
                          <input
                            type="file"
                            accept="image/png, image/jpeg"
                            disabled={isUploading}
                            onChange={handleLogoUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                      <div className="text-sm">
                        <p className="font-medium text-foreground">
                          {isUploading
                            ? "Uploading..."
                            : form.logo
                              ? "Logo added"
                              : "Upload image"}
                        </p>
                        <p className="text-xs text-muted">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  <TextField
                    className="w-full sm:col-span-2"
                    isInvalid={Boolean(errors.description)}
                    value={form.description}
                    onChange={(value) => update("description", value)}
                  >
                    <Label>Brief Description</Label>
                    <TextArea
                      rows={5}
                      maxLength={500}
                      placeholder="Tell us about your company's mission and culture..."
                    />
                    {errors.description ? (
                      <FieldError>{errors.description}</FieldError>
                    ) : (
                      <Description>{form.description.length}/500</Description>
                    )}
                  </TextField>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button
                  isDisabled={isSubmitting || isUploading}
                  onPress={() => handleSubmit(close)}
                >
                  {isSubmitting
                    ? "Saving..."
                    : isEdit
                      ? "Save Changes"
                      : "Register Company"}
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}