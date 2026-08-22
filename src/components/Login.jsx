"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import AuthLayout from "@/components/AuthLayout";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
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
      toast.success("Welcome back!");
      router.push("/");
    }, 900);
  };

  return (
    <AuthLayout
      badge="👋 Welcome back"
      title="Sign in to"
      highlight="HireLoop"
      subtitle="Pick up right where you left off."
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
              placeholder="••••••••"
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
          {errors.password && <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-400">
            <input
              type="checkbox"
              checked={form.remember}
              onChange={(event) => updateField("remember", event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 bg-white accent-violet-500 dark:border-white/20 dark:bg-white/5"
            />
            Remember me
          </label>

          <button
            type="button"
            onClick={() => toast("Password reset instructions will be emailed to you soon.")}
            className="text-sm font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
          >
            Forgot password?
          </button>
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
              Sign In <ArrowRight size={18} />
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
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">
          Create one
        </Link>
      </p>
    </AuthLayout>
  );
}
