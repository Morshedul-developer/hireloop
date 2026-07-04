"use client";

import Image from "next/image";
import {
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineUsers,
  HiOutlineStar,
} from "react-icons/hi2";

const stats = [
  {
    icon: <HiOutlineBriefcase size={22} />,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: <HiOutlineBuildingOffice2 size={22} />,
    value: "12K",
    label: "Companies",
  },
  {
    icon: <HiOutlineUsers size={22} />,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: <HiOutlineStar size={22} />,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black">

      {/* Globe */}
      <div className="absolute inset-0 overflow-hidden">

        <Image
          src="/images/globe.png"
          alt="Globe"
          width={1080}
          height={1620}
          priority
          className="
            absolute
            left-1/2
            bottom-0
            -translate-x-1/2

            w-230
            max-w-none
            h-auto
            object-contain
            pointer-events-none
            select-none
          "
        />

      </div>

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-48 pb-20">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-2xl font-light leading-tight text-white md:text-4xl">
            Assisting over{" "}
            <span className="font-semibold">
              15,000
            </span>{" "}
            job seekers
            <br />
            find their dream positions.
          </h2>

        </div>

        {/* Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-white/10
                bg-black/65
                p-10
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
              "
            >
              <div className="mb-20 text-white">
                {item.icon}
              </div>

              <h3 className="text-6xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-3 text-xl text-zinc-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}