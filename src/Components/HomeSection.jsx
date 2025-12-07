'use client';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import Spline3d from "./Spline3d";

// Components
const StatusBadge = () => (
  <div className="inline-block animate-pulse sm:mt-20 mx-auto lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-[#1A1A1A]/40 backdrop-blur-xl border border-[#00F0FF]/20">
        <span className="bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] text-transparent bg-clip-text text-xs sm:text-sm font-medium flex items-center">
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
);

const MainTitle = () => (
  <div className="space-y-1 sm:space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] bg-clip-text text-transparent">
          Annadata
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-1 sm:mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] bg-clip-text text-transparent">
          Aravind
        </span>
      </span>
    </h1>
  </div>
);

const TechStack = ({ tech }) => (
  <div className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-[#00F0FF]/30 backdrop-blur-sm border border-[#00F0FF]/30 text-xs sm:text-sm text-white transition-colors">
    {tech}
  </div>
);

const CTAButton = ({ href, text, icon, download }) => (
  <a href={href} download={download}>
    <button className="group relative w-[140px] sm:w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] rounded-xl opacity-50 blur group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-10 sm:h-11 bg-[#1A1A1A] backdrop-blur-xl rounded-lg border border-[#00F0FF]/20 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#00F0FF]/20 to-[#FF10F0]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm group-hover:gap-2 cursor-pointer sm:group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-[#F0F0F0] to-[#F0F0F0] bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <FontAwesomeIcon icon={icon} className={`w-3 h-3 sm:w-4 sm:h-4 text-[#F0F0F0] ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:-translate-y-1'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
);

const SocialLink = ({ icon, link, hoverColor }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3 sm:p-4">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-[#1A1A1A]/50 cursor-pointer backdrop-blur-lg p-3 sm:p-4 flex items-center justify-center border border-[#00F0FF]/20 group-hover:border-[#00F0FF]/40 transition-all duration-300">
        <FontAwesomeIcon
          icon={icon}
          size="xl"
          className="w-6 h-6 sm:w-8 sm:h-8 text-[#F0F0F0] transition-colors"
          style={{ "--hover-color": hoverColor }}
        />
      </div>
    </button>
  </a>
);

// Constants
const WORDS = ["Frontend Developer", "UX/UI Designer"];
const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind"];
const SOCIAL_LINKS = [
  { icon: faGithub, link: "https://github.com/aravind-415", hoverColor: "#FFFFFF" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/aravind-annadata", hoverColor: "#0077B5" },
  { icon: faInstagram, link: "https://www.instagram.com/aravind_415", hoverColor: "#E1306C" }
];

const HomeSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDelayed, setIsDelayed] = useState(false);

  // Delay the rendering of the page content by 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // AOS initialization and isLoaded transition
  useEffect(() => {
    if (isDelayed) {
      const initAOS = () => {
        AOS.init({
          once: true,
          offset: 10,
        });
      };

      initAOS();
      window.addEventListener('resize', initAOS);
      setIsLoaded(true);

      return () => window.removeEventListener('resize', initAOS);
    }
  }, [isDelayed]);

  // Show a black background with the Navbar during the delay
  if (!isDelayed) {
    return (
      <>
        <div className="bg-black min-h-screen"></div>
      </>
    );
  }

  return (
    <>
      <div className="bg-black overflow-hidden" id="Home">
        <div className={`relative z-10 mt-20 md:mt-5 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`} >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-col-reverse lg:flex-row items-center justify-center h-full py-8 sm:py-12 lg:py-16 md:justify-between gap-6 sm:gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-1"
                data-aos="fade-right"
                data-aos-delay="1200">
                <div className="space-y-3 sm:space-y-5">
                  <StatusBadge />
                  <MainTitle />

                  {/* Typing Effect with react-simple-typewriter */}
                  <div className="h-6 sm:h-8 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1800">
                    <span className="text-xl font-semibold sm:text-xl md:text-2xl bg-gradient-to-r from-[#F0F0F0] to-[#F0F0F0] bg-clip-text text-transparent">
                      <Typewriter
                        words={WORDS}
                        loop={1000}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-[#F0F0F0] max-w-md sm:max-w-lg lg:max-w-xl leading-relaxed mx-auto lg:mx-0"
                    data-aos="fade-up"
                    data-aos-delay="2000">
                    Full-Stack Developer Aspirant with a passion for React.js, JavaScript, and Tailwind, eager to create innovative and user-friendly web solutions.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="2200">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-row gap-2 sm:gap-3 w-full justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="2400">
                    <CTAButton href="/assets/resume/Aravind.pdf" text="Download My CV" icon={faDownload} download />
                    <CTAButton href="#Contact" text="Contact" icon={faEnvelope} />
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="2600">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} icon={social.icon} link={social.link} hoverColor={social.hoverColor} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Default Image */}
              {/* <div className="w-full sm:w-3/4 lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] relative flex items-center justify-center order-2 lg:order-2 mt-6 sm:mt-8 lg:mt-0"
                data-aos="fade-left"
                data-aos-delay="2000"
                data-aos-duration="1000">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative z-10 rounded-3xl overflow-hidden">
                    <Spline3d className="h-[1000px] w-[1000px]" />
                  </div>
                </div>
              </div> */}
              <div className="w-full sm:w-3/4 lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] relative flex items-center justify-center order-2 lg:order-2 mt-6 sm:mt-8 lg:mt-0">
              <Spline3d/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hover effect */}
      <style jsx global>{`
        button.group:hover .fa-brands {
          color: var(--hover-color) !important;
        }
      `}</style>
    </>
  );
};

export default HomeSection;