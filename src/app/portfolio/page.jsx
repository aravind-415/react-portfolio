"use client";
import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faAngular,
  faCss,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

// Static data for projects
const projects = [
  {
    id: "1",
    Img: "/assets/portfolio/Portfolio.png",
    Title: "My Portfolio",
    Description: "A web application showcasing my Skills and Projects.",
    Link: "/",
    TechStack: [faReact, faJs],
  },
  {
    id: "2",
    Img: "/assets/portfolio/talentvivid.png",
    Title: "Talentvivid",
    Description: "A Company Website",
    Link: "https://talentvivid.azurewebsites.net",
    TechStack: [faAngular, faPython, faCss,],
  },
  {
    id: "3",
    Img: "/assets/portfolio/Metacomic-Project.png",
    Title: "Metacomic Project",
    Description: "Developed a web app with my team during an internship.",
    Link: "https://aravind-415.github.io/Metacomic-1/",
    TechStack: [faHtml5, faCss3Alt, faBootstrap],
  },
  {
    id: "4",
    Img: "/assets/portfolio/Blog-Project.png",
    Title: "Blog Website",
    Description: "Built a blog website to improve web development skills.",
    Link: "https://aravind-415.github.io/Blog_web/",
    TechStack: [faHtml5, faCss3Alt, faBootstrap],
  },
  {
    id: "5",
    Img: "/assets/portfolio/AgriHack-Project.png",
    Title: "AgriHack - College Event",
    Description: "Developed the Agrihack event website as part of a team project.",
    Link: "https://aravind-415.github.io/Agri_Hack/",
    TechStack: [faJs, faBootstrap],
  },
  {
    id: "6",
    Img: "/assets/portfolio/Rog-Project.png",
    Title: "ROG Website Clone (4-Hour Challenge)",
    Description: "Developed a ROG clone overnight in just 4 hours.",
    Link: "https://aravind-415.github.io/Rog-Clone/",
    TechStack: [faHtml5, faCss3Alt, faBootstrap],
  },

];

// Static data for certificates
const certificates = [
  { Img: "/assets/Certificates/Amazon-AWS.png" },
  { Img: "/assets/Certificates/Microsoft.png" },
  { Img: "/assets/Certificates/Metacomic.png" },
  { Img: "/assets/Certificates/Slash Mark.png" },
  { Img: "/assets/Certificates/AICTE.png" },
  { Img: "/assets/Certificates/Sololearn Python.jpg" },
];

// Updated tech stacks with images
const techStacks = {
  programmingLanguages: [
    { image: "/assets/TechStack/python.png", language: "Python" },
    { image: "/assets/TechStack/js.png", language: "JavaScript" },
  ],
  technologies: [
    { image: "/assets/TechStack/html.png", language: "HTML" },
    { image: "/assets/TechStack/css.png", language: "CSS" },
    { image: "/assets/TechStack/react.png", language: "React.js" },
    { image: "/assets/TechStack/angular.png", language: "Angular.js" },
    { image: "/assets/TechStack/postgree.png", language: "SQL" },
    { image: "/assets/TechStack/tailwindcss.png", language: "Tailwind" },
    { image: "/assets/TechStack/bootstrap.webp", language: "Bootstrap 5" },
    { image: "/assets/TechStack/figma.png", language: "Figma" },
    { image: "/assets/TechStack/spline.png", language: "Spline" },
  ],
};

const CardProject = ({ Img, Title, Description, Link, TechStack }) => (
  <div className="bg-white/10 w-full max-w-[500px] h-[400px] backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-300 hover:shadow-xl group sm:max-w-[400px] sm:h-[360px] xs:max-w-[340px] xs:h-[320px] flex flex-col">
    <div className="overflow-hidden rounded-md h-56 mb-4 sm:h-48 xs:h-40">
      <img
        src={Img}
        alt={Title}
        className="w-full h-full object-cover rounded-md mb-4 group-hover:scale-110 duration-300"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl font-semibold text-white truncate">{Title}</h3>
    <p className="text-sm text-slate-400 mt-2 line-clamp-2 flex-grow">{Description}</p>
    <div className="flex gap-2 mt-3 items-center justify-between">
      <div className="flex gap-4">
        {TechStack.map((icon, idx) => (
          <FontAwesomeIcon key={idx} size="xl" icon={icon} className="text-white" />
        ))}
      </div>
      <a
        href={Link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 bg-purple-500/20 text-purple-300 hover:text-purple-100 text-md font-medium rounded-full transition-all duration-300 group relative overflow-hidden hover:bg-purple-500/30"
      >
        <span className="relative z-10">Discover</span>
        <FontAwesomeIcon
          icon={faRocket}
          className="w-4 h-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </a>
    </div>
  </div>
);

CardProject.propTypes = {
  Img: PropTypes.string,
  Title: PropTypes.string,
  Description: PropTypes.string,
  Link: PropTypes.string,
  TechStack: PropTypes.arrayOf(PropTypes.object),
};

// Certificate Component
const Certificate = ({ ImgSertif, onClick }) => (
  <div
    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-300 group cursor-pointer"
    onClick={() => onClick(ImgSertif)}
  >
    <div className="overflow-hidden rounded-md h-80 mb-4">
      <img
        src={ImgSertif}
        alt="Certificate"
        className="w-[450px] h-80 object-cover rounded-md group-hover:scale-105 duration-300"
        loading="lazy"
      />
    </div>
  </div>
);

Certificate.propTypes = {
  ImgSertif: PropTypes.string,
  onClick: PropTypes.func,
};

// TechStackIcon Component
const TechStackIcon = ({ TechStackImage, Language }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-300 hover:shadow-xl group">
    <img
      src={TechStackImage}
      alt={Language}
      className="w-12 h-12 object-contain"
      loading="lazy"
    />
    <span className="text-sm text-slate-300 mt-2">{Language}</span>
  </div>
);

TechStackIcon.propTypes = {
  TechStackImage: PropTypes.string,
  Language: PropTypes.string,
};

// ToggleButton Component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${
            isShowingMore
              ? "group-hover:-translate-y-0.5"
              : "group-hover:translate-y-0.5"
          }
        `}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

ToggleButton.propTypes = {
  onClick: PropTypes.func,
  isShowingMore: PropTypes.bool,
};

// TabPanel Component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className={`transition-opacity duration-300 my-10 ${
        value === index ? "opacity-100" : "opacity-0"
      }`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Main Portfolio Component
export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  }, []);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage("");
  };

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden py-10"
      id="Portfolio"
    >
      <div className="text-center sm:mb-10 lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#FF10F0]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            My Portfolio
          </h2>
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-2 transition-all duration-300"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              }
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-2 transition-all duration-300"
                >
                  <path d="M12 3v3m0 12v3m9-9h-3m-12 0H3m15.364-6.364l-2.121 2.121M5.757 18.364l-2.121 2.121m15.728 0l-2.121-2.121M5.757 5.636l-2.121-2.121" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              }
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-2 transition-all duration-300"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              }
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <div className="relative">
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5 justify-items-center">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      TechStack={project.TechStack}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("projects")}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <Certificate
                      ImgSertif={certificate.Img}
                      onClick={handleOpenModal}
                    />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden pb-[5%]">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 gap-5 mb-8">
                {techStacks.programmingLanguages.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <TechStackIcon
                      TechStackImage={stack.image}
                      Language={stack.language}
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Technologies
              </h3>
              <div className="flex container max-w-[800px] flex-wrap justify-center gap-5 mb-8">
                {techStacks.technologies.map((stack, index) => (
                  <div
                    className="w-32 h-32 flex-wrap"
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <TechStackIcon
                      TechStackImage={stack.image}
                      Language={stack.language}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </div>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="certificate-modal-title"
          aria-describedby="certificate-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1400px",
              maxHeight: "900px",
              bgcolor: "transparent",
              boxShadow: 24,
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={selectedImage}
              alt="Certificate Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-white/10 text-white rounded-full p-2 hover:bg-white/20 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}