import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-slate-600 dark:bg-[#050505] dark:text-zinc-400">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="mx-auto h-125 w-225 rounded-full border border-violet-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="HireLoop"
                width={150}
                height={50}
                priority
              />
            </Link>

            <p className="mt-8 max-w-sm text-lg leading-8 text-slate-500 dark:text-zinc-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social */}
            <div className="mt-14 flex items-center gap-4">
              <Link
                href="#"
                className="rounded-xl bg-slate-100 p-3 transition hover:bg-violet-600 hover:text-white dark:bg-[#111111]"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl bg-violet-600 p-3 text-white transition hover:bg-violet-500"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl bg-slate-100 p-3 transition hover:bg-violet-600 hover:text-white dark:bg-[#111111]"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="mb-8 text-xl font-semibold text-violet-600 dark:text-violet-500">
              Product
            </h3>

            <ul className="space-y-5">
              <li>
                <Link href="/jobs" className="hover:text-slate-900 dark:hover:text-white">
                  Job discovery
                </Link>
              </li>

              <li>
                <Link href="/ai" className="hover:text-slate-900 dark:hover:text-white">
                  Worker AI
                </Link>
              </li>

              <li>
                <Link href="/companies" className="hover:text-slate-900 dark:hover:text-white">
                  Companies
                </Link>
              </li>

              <li>
                <Link href="/salary" className="hover:text-slate-900 dark:hover:text-white">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-8 text-xl font-semibold text-violet-600 dark:text-violet-500">
              Navigation
            </h3>

            <ul className="space-y-5">
              <li>
                <Link href="/help-center" className="hover:text-slate-900 dark:hover:text-white">
                  Help Center
                </Link>
              </li>

              <li>
                <Link href="/career-library" className="hover:text-slate-900 dark:hover:text-white">
                  Career Library
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-8 text-xl font-semibold text-violet-600 dark:text-violet-500">
              Resources
            </h3>

            <ul className="space-y-5">
              <li>
                <Link href="/brand-guideline" className="hover:text-slate-900 dark:hover:text-white">
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link href="/newsroom" className="hover:text-slate-900 dark:hover:text-white">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}

        <div className="my-16 border-t border-slate-200 dark:border-zinc-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row dark:text-zinc-500">
          <p>© {new Date().getFullYear()} HireLoop. All rights reserved.</p>

          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
