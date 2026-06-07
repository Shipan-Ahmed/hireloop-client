"use client";

import Image from "next/image";

import {
    HiOutlineBriefcase,
    HiOutlineOfficeBuilding,
} from "react-icons/hi";

import {
    FiUsers,
    FiStar,
} from "react-icons/fi";

const stats = [
    {
        icon: <HiOutlineBriefcase size={22} />,
        value: "50K",
        label: "Active Jobs",
    },
    {
        icon: <HiOutlineOfficeBuilding size={22} />,
        value: "12K",
        label: "Companies",
    },
    {
        icon: <FiUsers size={22} />,
        value: "2M",
        label: "Job Seekers",
    },
    {
        icon: <FiStar size={22} />,
        value: "97%",
        label: "Satisfaction Rate",
    },
];

export default function StatsSection() {
    return (
        <section className="relative overflow-hidden py-10 lg:py-32 bg-[#030303] ">
            {/* Globe Background */}
            <div className="absolute  inset-0 flex justify-center">
                <div className="relative h-[1000px] w-[1000px]">
                    <Image
                        src="/images/globe.png"
                        alt="Globe"
                        fill
                        priority
                        className="
object-contain
opacity-80
scale-125
drop-shadow-[0_0_120px_rgba(99,102,241,0.7)] 
"
                    />
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className=" relative z-10 mx-auto max-w-6xl px-6 mt-10">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-medium leading-tight text-white md:text-2xl">
                        Assisting over{" "}
                        <span className="text-indigo-400">
                            15,000 job seekers
                        </span>
                        <br />
                        find their dream positions.
                    </h2>
                </div>

                {/* Stats Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-20">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:border-indigo-500/50
                hover:bg-white/[0.05]
              "
                        >
                            <div className="text-gray-300">
                                {item.icon}
                            </div>

                            <h3 className="mt-10 text-3xl font-bold text-white">
                                {item.value}
                            </h3>

                            <p className="mt-3 text-lg text-gray-400">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}