"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User, Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      nextErrors.password = "Use at least 8 characters.";
    }

    if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!form.agreeToTerms) {
      nextErrors.agreeToTerms = "You must accept the terms to continue.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Account created! Welcome to HireLoop.");
      router.push("/");
    }, 900);
  };

  return (
    <AuthLayout
      badge="🚀 Get started"
      title="Create your"
      highlight="account"
      subtitle="Join HireLoop and start applying in minutes."
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
            Full name
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white/5 px-4 py-3 transition ${
              errors.name ? "border-red-500/60" : "border-white/10 focus-within:border-violet-400/60"
            }`}
          >
            <User className="shrink-0 text-zinc-500" size={18} />
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Jane Rahman"
              className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
          {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
            Email address
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white/5 px-4 py-3 transition ${
              errors.email ? "border-red-500/60" : "border-white/10 focus-within:border-violet-400/60"
            }`}
          >
            <Mail className="shrink-0 text-zinc-500" size={18} />
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-zinc-300">
            Password
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white/5 px-4 py-3 transition ${
              errors.password ? "border-red-500/60" : "border-white/10 focus-within:border-violet-400/60"
            }`}
          >
            <Lock className="shrink-0 text-zinc-500" size={18} />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(event) => updateField("password", event.target.value)}
              placeholder="At least 8 characters"
              className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="shrink-0 text-zinc-500 transition hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && <p className="mt-2 text-sm text-red-400">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-zinc-300">
            Confirm password
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white/5 px-4 py-3 transition ${
              errors.confirmPassword ? "border-red-500/60" : "border-white/10 focus-within:border-violet-400/60"
            }`}
          >
            <Lock className="shrink-0 text-zinc-500" size={18} />
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={form.confirmPassword}
              onChange={(event) => updateField("confirmPassword", event.target.value)}
              placeholder="Re-enter your password"
              className="w-full bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-400">{errors.confirmPassword}</p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm text-zinc-400">
            <input
              type="checkbox"
              checked={form.agreeToTerms}
              onChange={(event) => updateField("agreeToTerms", event.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-violet-500"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="text-violet-300 hover:text-violet-200">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-violet-300 hover:text-violet-200">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="mt-2 text-sm text-red-400">{errors.agreeToTerms}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 py-3.5 font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Create Account <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-violet-300 hover:text-violet-200">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
