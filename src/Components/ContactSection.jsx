"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <div className="text-center lg:mb-8 mb-2 px-[5%] py-10">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF10F0]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Contact Me
          </h2>
        </div>
      </div>

      <div
        className="h-auto pb-10 flex items-center justify-center px-[5%] md:px-0"
        id="Contact"
      >
        <div className="w-full max-w-[1000px] grid grid-cols-1 gap-12">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
          >
            <div className="mb-8">
              <div className="inline-block relative group">
                <h2
                  className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF10F0]"
                  data-aos="zoom-in-up"
                  data-aos-duration="600"
                >
                  Get In Touch
                </h2>
              </div>
              <p className="text-gray-400">
                Have something to discuss? Send me a message and let's talk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>
              {/* hello */}
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                style={{ transition: "all 0.3s ease-in-out" }}
                className="w-full text-xl bg-gradient-to-r from-[#00F0FF] to-[#FF10F0] text-black py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Connect With Me Section */}
      <div className="flex justify-center px-[5%]">
        <div className="w-full max-w-[1000px] flex flex-col items-center justify-center h-auto py-8 sm:py-12 mb-[5%] rounded-3xl bg-white/10 backdrop-blur-xl">
          <div className="w-full px-[5%] sm:px-[8%]">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block relative group">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF10F0]"
                  data-aos="zoom-in-up"
                  data-aos-duration="600"
                >
                  Connect With Me
                </h2>
              </div>
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <a
                href="https://www.linkedin.com/in/aravind-annadata"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="bg-white/5 backdrop-blur-xl rounded-xl p-4 flex items-center space-x-4 hover:bg-white/20 hover:scale-105 group touch:hover:scale-100"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-[360deg]">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[#0A66C2]"
                    style={{ width: "28px", height: "28px" }}
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Let's Connect</p>
                  <p className="text-gray-400 text-xs sm:text-sm">on LinkedIn</p>
                </div>
              </a>
              <a
                href="https://instagram.com/aravind_415"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="bg-white/5 backdrop-blur-xl rounded-xl p-4 flex items-center space-x-4 hover:bg-white/20 hover:scale-105 group touch:hover:scale-100"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-[360deg]">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#E1306C]"
                    style={{ width: "28px", height: "28px" }}
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Instagram</p>
                  <p className="text-gray-400 text-xs sm:text-sm">@aravind415</p>
                </div>
              </a>
              <a
                href="https://github.com/aravind-415"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="bg-white/5 backdrop-blur-xl rounded-xl p-4 flex items-center space-x-4 hover:bg-white/20 hover:scale-105 group touch:hover:scale-100"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <div className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-[360deg]">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white"
                    style={{ width: "28px", height: "28px" }}
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Github</p>
                  <p className="text-gray-400 text-xs sm:text-sm">aravind-415</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;