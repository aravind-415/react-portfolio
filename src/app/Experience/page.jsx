"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const experiences = [
        {
            year: "2024",
            role: "Junior Developer",
            company: "Talentvivid, Hyderabad",
            status: "Dec 2024 – Present",
            icon: faReact,
            isCurrent: true,
            description:
                "Working on UI development, reusable components, performance optimization, and collaborating with backend teams to build scalable production-ready features.",
        },
        {
            year: "2023",
            role: "Front-End Developer Intern",
            company: "Metacomic, Remote",
            status: "May 2023 – July 2023",
            icon: faReact,
            isCurrent: false,
            description:
                "Developed UI screens using React & Tailwind, improved UX consistency, and actively participated in team design discussions.",
        },
    ];

    return (
        <section id="experience" className="py-24 bg-black">
            <h2
                className="text-center text-5xl font-bold mb-20"
                data-aos="zoom-in"
            >
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF10F0]">
                    Experience
                </span>
            </h2>

            <div className="relative w-[90%] md:w-[70%] mx-auto">

                {/* Center Vertical Line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-70 rounded-full"></div>

                <div className="space-y-10">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                            data-aos-delay="500"
                            className={`relative flex flex-col md:flex-row gap-10 group ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Icon Node */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-8">
                                {exp.isCurrent ? (
                                    <div className="relative flex items-center justify-center w-12 h-12">
                                        <span className="absolute w-10 h-10 bg-cyan-400 rounded-full opacity-50 animate-ping"></span>
                                        <span className="relative w-5 h-5 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full shadow-xl block"></span>
                                    </div>
                                ) : (
                                    <span className="w-5 h-5 bg-gray-500 rounded-full shadow-md block"></span>
                                )}
                            </div>

                            {/* CARD WITH 3D TILT */}
                            <div
                                className="
                                    bg-[#0e0e0e] 
                                    border border-gray-800 
                                    p-8 rounded-2xl 
                                    w-full md:w-[48%]
                                    shadow-lg 
                                    transition-all duration-500 
                                    transform-gpu 
                                    [transform-style:preserve-3d]

                                    group-hover:-translate-y-2
                                    group-hover:shadow-cyan-500/20 
                                    group-hover:[transform:rotateX(6deg)_rotateY(6deg)_scale(1.03)]
                                "
                            >
                                {/* Year + Icon */}
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-cyan-300 font-semibold text-xl [transform:translateZ(30px)]">
                                        {exp.year}
                                    </p>

                                    <FontAwesomeIcon
                                        icon={exp.icon}
                                        className="text-pink-400 text-7xl [transform:translateZ(40px)]"
                                    />
                                </div>

                                {/* Role */}
                                <h3 className="text-2xl text-white font-semibold [transform:translateZ(25px)]">
                                    {exp.role}
                                </h3>

                                {/* Company */}
                                <p className="text-gray-300 mt-1 [transform:translateZ(20px)]">
                                    {exp.company}
                                </p>

                                {/* Duration */}
                                <p className="text-gray-500 text-sm italic mb-4 [transform:translateZ(15px)]">
                                    {exp.status}
                                </p>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed [transform:translateZ(10px)]">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
