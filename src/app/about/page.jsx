"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00F0FF] to-[#FF10F0]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
  </div>
);

const ProfileImage = () => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div
      className="relative group w-72 h-72 sm:w-80 sm:h-80"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 rounded-full overflow-hidden z-0 hidden sm:block">
        <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] rounded-full blur-2xl animate-spin-slower opacity-25" />
        <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] rounded-full blur-2xl animate-pulse-slow opacity-15" />
        <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] rounded-full blur-2xl animate-float opacity-15" />
      </div>
      <div className="relative w-full h-full">
        <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 hidden sm:block" />
          <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF]/10 to-[#FF10F0]/10 opacity-20 z-10 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block rounded-full" />
          <img
            src="/assets/aravind.jpeg"
            alt="Profile"
            className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 z-30"
            loading="lazy"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] opacity-20 transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StatCard = ({ color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration="1300" className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div
        className={`absolute -z-10 inset-0 bg-linear-to-r from-[#00F0FF] to-[#FF10F0] opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      ></div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <span className="text-white font-bold">{label[0]}</span>
        </div>
        <span
          className="text-4xl font-bold text-white"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>
      <div>
        <p
          className="text-sm uppercase tracking-wider text-gray-300 mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <p
          className="text-xs text-gray-400"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  // Initialize state for projects and certificates
  const [storedProjects, setStoredProjects] = useState([]);
  const [storedCertificates, setStoredCertificates] = useState([]);

  // Load data from localStorage on client side
  useEffect(() => {
    try {
      setStoredProjects(JSON.parse(localStorage.getItem("projects") || "[]"));
      setStoredCertificates(
        JSON.parse(localStorage.getItem("certificates") || "[]")
      );
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      setStoredProjects([]);
      setStoredCertificates([]);
    }
  }, []);

  const startDate = new Date("2024-12-14");
  const today = new Date();
  const YearExperience =
    today.getFullYear() -
    startDate.getFullYear() -
    (today <
    new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
      ? 1
      : 0);

  const statsData = [
    {
      color: "from-[#00F0FF] to-[#FF10F0]",
      value: 12,
      label: "Total Projects",
      description: "Innovative web solutions crafted",
      animation: "fade-right",
    },
    {
      color: "from-[#00F0FF] to-[#FF10F0]",
      value: 6,
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      color: "from-[#00F0FF] to-[#FF10F0]",
      value: '0.10Y',
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ];

  useEffect(() => {
    const initAOS = () => {
      AOS.init({ once: false });
    };
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
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm:mt-20"
      id="AboutMe"
    >
      <Header />
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00F0FF] to-[#FF10F0]">
                Hello, I'm
              </span>
              <span
                className="block mt-2 text-gray-200"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Annadata Aravind
              </span>
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              I am a passionate Full-Stack Developer Aspirant with hands-on
              experience in front-end development, creating responsive and
              user-friendly digital experiences using React, JavaScript, and
              Tailwind. I bring adaptability, teamwork, and creativity to every
              project I take on, with a strong focus on building efficient and
              engaging web applications.
            </p>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a
                href="/assets/resume/Aravind.pdf"
                download
                className="w-full lg:w-auto transition-all duration-500 group relative"
              >
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-linear-to-r from-[#00F0FF] to-[#FF10F0] text-black font-medium transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] cursor-pointer relative overflow-hidden group-hover:animate-linear-shift bg-size-[200%_200%]"
                  style={{ transition: "all 0.2s ease-in-out" }}
                >
                  Download CV
                  <span className="absolute inset-0 bg-linear-to-r from-[#00F0FF]/20 to-[#FF10F0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </a>
              <a
                href="#Portfolio"
                className="w-full lg:w-auto transition-all duration-500 group relative"
              >
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-[#FF10F0] text-[#FF10F0] font-medium bg-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] hover:border-[#00F0FF] cursor-pointer relative overflow-hidden group-hover:animate-linear-shift bg-size-[200%_200%] bg-linear-to-r from-transparent to-transparent hover:bg-linear-to-r hover:from-[#00F0FF]/10 hover:to-[#FF10F0]/10"
                  style={{ transition: "all 0.2s ease-in-out" }}
                >
                  View Projects
                  <span className="absolute inset-0 bg-linear-to-r from-[#00F0FF]/20 to-[#FF10F0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>
        <a href="#Portfolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }
        @keyframes linear-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
          background-size: 200% 200%;
        }
        .hover\\:border-gradient {
          border-image: linear-gradient(to right, #00f0ff, #ff10f0) 1;
          border-image-slice: 1;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
