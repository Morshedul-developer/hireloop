import Image from "next/image";
import {
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineUsers,
  HiOutlineStar,
} from "react-icons/hi2";

const stats = [
  {
    icon: <HiOutlineBriefcase size={28} />,
    number: "50K",
    label: "Active Jobs",
  },
  {
    icon: <HiOutlineBuildingOffice2 size={28} />,
    number: "12K",
    label: "Companies",
  },
  {
    icon: <HiOutlineUsers size={28} />,
    number: "2M",
    label: "Job Seekers",
  },
  {
    icon: <HiOutlineStar size={28} />,
    number: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black">

      {/* Globe Background */}
      <Image
        src="/images/globe.png"
        alt="Globe"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-40">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <h2 className="text-3xl font-light leading-relaxed text-white md:text-5xl">
            Assisting over{" "}
            <span className="font-semibold">15,000</span>{" "}
            job seekers
            <br />
            find their dream positions.
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-black/45 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/40 hover:bg-black/60"
            >
              <div className="mb-14 text-white">
                {item.icon}
              </div>

              <h3 className="text-6xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-3 text-lg text-zinc-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}