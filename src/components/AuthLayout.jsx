import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Apply to hand-picked roles in one click",
  "Track every application from a single dashboard",
  "Get AI-matched with companies actively hiring",
];

export default function AuthLayout({ badge, title, highlight, subtitle, children }) {
  return (
    <div className="grid min-h-screen bg-[#0b0b0e] text-white lg:grid-cols-2">
      {/* Branding panel */}

      <div className="relative hidden overflow-hidden border-r border-white/10 lg:flex lg:flex-col lg:justify-between lg:p-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        </div>

        <Link href="/" className="relative flex items-center">
          <Image src="/logo.png" alt="HireLoop" width={135} height={35} priority />
        </Link>

        <div className="relative">
          <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight">
            Land your next role, faster.
          </h1>
          <p className="mt-5 max-w-sm text-lg leading-8 text-zinc-400">
            HireLoop connects you with companies actively hiring across
            Bangladesh and remote-first teams.
          </p>

          <ul className="mt-10 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="mt-0.5 shrink-0 text-violet-400" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-sm text-zinc-500">
          © {new Date().getFullYear()} HireLoop. All rights reserved.
        </p>
      </div>

      {/* Form panel */}

      <div className="flex items-center justify-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-10 flex items-center lg:hidden">
            <Image src="/logo.png" alt="HireLoop" width={120} height={32} priority />
          </Link>

          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200">
            {badge}
          </span>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title} <span className="text-violet-400">{highlight}</span>
          </h2>

          <p className="mt-3 text-zinc-400">{subtitle}</p>

          <div className="mt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
