"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User, Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import AuthLayout from "@/components/AuthLayout";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { level: 1, label: "Weak", color: "bg-red-500", text: "text-red-500 dark:text-red-400" };
  if (score <= 2) return { level: 2, label: "Fair", color: "bg-amber-500", text: "text-amber-600 dark:text-amber-400" };
  if (score <= 3) return { level: 3, label: "Good", color: "bg-blue-500", text: "text-blue-600 dark:text-blue-400" };
  return { level: 4, label: "Strong", color: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400" };
}

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

  const passwordStrength = getPasswordStrength(form.password);

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
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Full name
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white px-4 py-3 transition dark:bg-white/5 ${
              errors.name
                ? "border-red-500/60"
                : "border-slate-200 focus-within:border-violet-400 dark:border-white/10 dark:focus-within:border-violet-400/60"
            }`}
          >
            <User className="shrink-0 text-slate-400 dark:text-zinc-500" size={18} />
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Jane Rahman"
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>
          {errors.name && <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Email address
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white px-4 py-3 transition dark:bg-white/5 ${
              errors.email
                ? "border-red-500/60"
                : "border-slate-200 focus-within:border-violet-400 dark:border-white/10 dark:focus-within:border-violet-400/60"
            }`}
          >
            <Mail className="shrink-0 text-slate-400 dark:text-zinc-500" size={18} />
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>
          {errors.email && <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Password
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white px-4 py-3 transition dark:bg-white/5 ${
              errors.password
                ? "border-red-500/60"
                : "border-slate-200 focus-within:border-violet-400 dark:border-white/10 dark:focus-within:border-violet-400/60"
            }`}
          >
            <Lock className="shrink-0 text-slate-400 dark:text-zinc-500" size={18} />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(event) => updateField("password", event.target.value)}
              placeholder="At least 8 characters"
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="shrink-0 text-slate-400 transition hover:text-slate-900 dark:text-zinc-500 dark:hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {form.password && (
            <div className="mt-3">
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      index < passwordStrength.level ? passwordStrength.color : "bg-slate-200 dark:bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <p className={`mt-1.5 text-xs font-medium ${passwordStrength.text}`}>
                {passwordStrength.label} password
              </p>
            </div>
          )}

          {errors.password && <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">
            Confirm password
          </label>
          <div
            className={`flex items-center gap-2 rounded-xl border bg-white px-4 py-3 transition dark:bg-white/5 ${
              errors.confirmPassword
                ? "border-red-500/60"
                : "border-slate-200 focus-within:border-violet-400 dark:border-white/10 dark:focus-within:border-violet-400/60"
            }`}
          >
            <Lock className="shrink-0 text-slate-400 dark:text-zinc-500" size={18} />
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={form.confirmPassword}
              onChange={(event) => updateField("confirmPassword", event.target.value)}
              placeholder="Re-enter your password"
              className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-zinc-500"
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errors.confirmPassword}</p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm text-slate-600 dark:text-zinc-400">
            <input
              type="checkbox"
              checked={form.agreeToTerms}
              onChange={(event) => updateField("agreeToTerms", event.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 bg-white accent-violet-500 dark:border-white/20 dark:bg-white/5"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errors.agreeToTerms}</p>
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

      <div className="mt-7 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-zinc-500">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => toast("Google sign-in is coming soon.")}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:bg-white/10"
        >
          <FaGoogle size={16} />
          Google
        </button>
        <button
          type="button"
          onClick={() => toast("LinkedIn sign-in is coming soon.")}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:bg-white/10"
        >
          <FaLinkedinIn size={16} />
          LinkedIn
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-600 dark:text-zinc-400">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
