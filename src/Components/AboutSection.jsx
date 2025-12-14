"use client";

import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ----------------------- HEADER ----------------------- */
const Header = () => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <h2
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF10F0]"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About Me
    </h2>
  </div>
);

/* ----------------------- PROFILE IMAGE ----------------------- */
const ProfileImage = () => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 p-0 py-2">
    <div
      className="relative group w-72 h-72 sm:w-80 sm:h-80"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 rounded-full overflow-hidden hidden sm:block opacity-25">
        <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] rounded-full blur-2xl animate-pulse-slow opacity-15" />
        <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] rounded-full blur-2xl animate-float opacity-15" />
      </div>

      <div className="relative w-full h-full">
        <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full transition-all duration-700 group-hover:border-white/40" />

          <img
            src="/assets/aravind.jpeg"
            alt="Profile"
            className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Hover Effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700 hidden sm:block">
            <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] opacity-20 -translate-x-full group-hover:translate-x-full duration-1000" />
            <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] opacity-20 translate-y-full group-hover:-translate-y-full duration-1000 delay-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ----------------------- STAT CARD ----------------------- */
const StatCard = ({ color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration="1300" className="relative group">
    <div className="relative bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 h-full">
      <div className="absolute -z-10 inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 group-hover:rotate-6 transition-transform">
          <span className="text-white font-bold">{label[0]}</span>
        </div>

        <span className="text-4xl font-bold text-white">{value}</span>
      </div>

      <p className="text-sm uppercase tracking-wider text-gray-300">{label}</p>
      <p className="text-xs text-gray-400 mt-1">{description}</p>
    </div>
  </div>
);

/* ----------------------- MAIN ABOUT PAGE ----------------------- */
const AboutSection = () => {
  const [storedProjects, setStoredProjects] = useState([]);
  const [storedCertificates, setStoredCertificates] = useState([]);

  /* Load LocalStorage data */
  useEffect(() => {
    try {
      setStoredProjects(JSON.parse(localStorage.getItem("projects") || "[]"));
      setStoredCertificates(JSON.parse(localStorage.getItem("certificates") || "[]"));
    } catch {
      setStoredProjects([]);
      setStoredCertificates([]);
    }
  }, []);

  /* ----------- CALCULATE EXPERIENCE DECIMAL FORMAT ----------- */
  const calculateExperienceDecimal = (startDate) => {
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const monthDecimal = (months / 10).toFixed(2);

    return `${(years + Number(monthDecimal)).toFixed(2)}Y`;
  };

  /* Compute experience once */
  const experienceFormatted = useMemo(() => {
    return calculateExperienceDecimal(new Date("2024-12-14"));
  }, []);

  /* ----------- STATS DATA ----------- */
  const statsData = useMemo(
    () => [
      {
        color: "from-[#00F0FF] to-[#FF10F0]",
        value: storedProjects.length || 12,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
        animation: "fade-right",
      },
      {
        color: "from-[#00F0FF] to-[#FF10F0]",
        value: storedCertificates.length || 6,
        label: "Certificates",
        description: "Professional skills validated",
        animation: "fade-up",
      },
      {
        color: "from-[#00F0FF] to-[#FF10F0]",
        value: experienceFormatted,
        label: "Years of Experience",
        description: "Continuous learning journey",
        animation: "fade-left",
      },
    ],
    [storedProjects, storedCertificates, experienceFormatted]
  );

  /* Initialize AOS */
  useEffect(() => {
    const initAOS = () => AOS.init({ once: false });
    initAOS();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-10 sm:mt-20" id="AboutMe">
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: Text */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00F0FF] to-[#FF10F0]">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200">Annadata Aravind</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 text-justify leading-relaxed" data-aos="fade-right">
              I am a passionate Full-Stack Developer Aspirant with hands-on experience in front-end
              development, creating responsive and user-friendly digital experiences using React, JavaScript,
              and Tailwind.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4">
              <a href="/assets/resume/Aravind_resume.pdf" download>
                <button className="w-full sm:px-6 py-3 rounded-lg bg-linear-to-r from-[#00F0FF] to-[#FF10F0] text-black font-medium hover:scale-110 duration-300">
                  Download CV
                </button>
              </a>

              <a href="#Portfolio">
                <button className="w-full sm:px-6 py-3 rounded-lg border-2 border-[#FF10F0] text-[#FF10F0] hover:border-[#00F0FF] hover:scale-110 duration-300">
                  View Projects
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT: Image */}
          <ProfileImage />
        </div>

        {/* Stats Cards */}
        <a href="#Portfolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
