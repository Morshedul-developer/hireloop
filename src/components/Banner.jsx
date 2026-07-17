import {
  Briefcase,
  Search,
  MapPin,
  Building2,
  Users,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Background Blur */}
      <div className="absolute -top-40 left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">

        {/* LEFT */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-white/10 px-4 py-2 text-sm text-blue-300 backdrop-blur">
            <BadgeCheck size={16} />
            Bangladesh's Smart Job Platform
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl">
            Find Your
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {" "}Dream Job
            </span>
            <br />
            Faster Than Ever.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Discover thousands of verified jobs from top companies.
            Apply instantly and get hired with confidence.
          </p>

          {/* Search */}

          <div className="mt-10 rounded-2xl bg-white p-3 shadow-2xl">

            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_auto]">

              <div className="flex items-center gap-3 rounded-xl border px-4">
                <Search className="text-gray-500" />
                <input
                  placeholder="Job title or keyword"
                  className="h-14 w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border px-4">
                <MapPin className="text-gray-500" />
                <input
                  placeholder="Location"
                  className="h-14 w-full outline-none"
                />
              </div>

              <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700">
                Search Jobs
                <ArrowRight size={18} />
              </button>

            </div>

          </div>


          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "React",
              "Next.js",
              "Remote",
              "Frontend",
              "Backend",
              "UI/UX",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
              >
                {tag}
              </span>
            ))}

          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-8">

            <div>
              <h2 className="text-3xl font-bold text-white">15K+</h2>
              <p className="text-gray-400">Live Jobs</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">2.5K+</h2>
              <p className="text-gray-400">Companies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">100K+</h2>
              <p className="text-gray-400">Candidates</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative mt-20 lg:mt-0">

          <div className="relative h-[600px] w-[500px]">

            {/* Main Circle */}

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-3xl" />

            <img
              src="/banner/person.png"
              alt=""
              className="absolute bottom-0 z-20"
            />

            {/* Floating Card */}

            <div className="absolute left-0 top-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-500 p-3 text-white">
                  <Briefcase />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Frontend Developer
                  </h3>

                  <p className="text-sm text-gray-300">
                    Brain Station 23
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute bottom-24 right-0 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-green-500 p-3 text-white">
                  <Building2 />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    250+ Companies
                  </h3>

                  <p className="text-sm text-gray-300">
                    Hiring this week
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute bottom-0 left-16 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-purple-500 p-3 text-white">
                  <Users />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    98% Success Rate
                  </h3>

                  <p className="text-sm text-gray-300">
                    Trusted by Professionals
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}