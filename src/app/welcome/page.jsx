"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 180);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ children, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group h-18 hover:scale-110 transition-transform duration-300 "
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full h-18 w-18 flex justify-center items-center border border-white/10 text-white">
      {children}
    </div>
  </a>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true); // Start exit animation
      setTimeout(() => {
        setIsVisible(false); // Unmount
        onLoadingComplete?.(); // Callback
      }, 500); // Match transition duration
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#030014] z-50 transition-all duration-1000 ease-in-out 
        ${
          isExiting
            ? "blur-md scale-110 opacity-0"
            : "blur-0 scale-100 opacity-100"
        }`}
    >
      <BackgroundEffect />

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Icons */}
          <div className="flex justify-center h-14 gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            <div data-aos="fade-up" data-aos-delay="200">
              <IconButton link="https://github.com">
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </IconButton>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <IconButton link="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </IconButton>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <IconButton link="mailto:example@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </IconButton>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
              <div className="mb-2 sm:mb-4">
                <span
                  className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="4000"
                >
                  Welcome
                </span>{" "}
                <span
                  className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="4000"
                >
                  To
                </span>{" "}
                <span
                  className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="4000"
                >
                  My
                </span>
              </div>
              <div>
                <span
                  className="inline-block px-2 bg-gradient-to-r from-[#FF10F0] to-[#00F0FF] bg-clip-text text-transparent"
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="4000"
                >
                  Portfolio
                </span>{" "}
                <span
                  className="inline-block px-2 bg-gradient-to-r from-[#FF10F0] to-[#00F0FF] bg-clip-text text-transparent"
                  data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-duration="4000"
                >
                  Website
                </span>
              </div>
            </h1>
          </div>

          {/* Website Link */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <a
              href="http://aravindportfolio.xyz/"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
              <div className="relative flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-indigo-600 text-xl"
                />
                <span className="bg-gradient-to-r from-[#FF10F0] to-[#00F0FF] bg-clip-text text-transparent">
                  <TypewriterEffect text="www.aravindportfolio.xyz" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
