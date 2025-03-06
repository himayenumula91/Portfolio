import React, { useState, useRef, useEffect } from "react";
import "../styles/Projects.css";

function Projects() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    {
      title: "E-commerce Website for Online retails",
      period: "Jan 2023 to Apr 2023",
      technology: "React js, Java, Spring Boot, Spring MVC, MySQL",
      moreInfo:
        "Developed a full-stack e-commerce platform for electronics with a seamless shopping experience! Built with React.js for a dynamic UI and Spring Boot for robust backend functionality. Features include secure purchases, order management, and an optimized MSSQL Server database for efficiency!.",
      repo: "https://github.com/himayenumula91/e-commerce",

    },
    {
      title: "TO-DO-LIST App",
      period: "July 2022 to Nov 2022",
      technology: "React.js",
      moreInfo:
        "Stay organized and boost productivity with this dynamic To- Do List app built in React.js! Effortlessly add, edit, and delete tasks while enjoying a sleek, responsive interface! Never miss a task again—manage your day with ease!.",
      repo: "https://github.com/himayenumula91/TODO-List",
    },
    {
      title: "Simple-Interst-Calculator",
      period: "Jan 2023 to Apr 2023",
      technology: "HTML, JavaScript, CSS",
      moreInfo:
        " A simple interest calculator built with HTML, CSS, and JavaScript allows users to input principal, rate, and time to compute interest instantly. The result is displayed dynamically upon user input or button click.",
      repo: "https://github.com/himayenumula91/Simple-Interest-Calculator",
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    if (modalVisible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalVisible]);

  return (
    <div>
      <h2 className="projectsSectionHeader">Projects</h2>
      <hr className="projectsSectionDivider" />
      <div className="projectsList">
        {projects.map((project, index) => (
          <Project key={index} project={project} openModal={openModal} />
        ))}
      </div>
      {modalVisible && (
        <Modal project={currentProject} onClose={closeModal} ref={modalRef} />
      )}
      <div className="gitDiv">
        <button className="gitButton">
          <a
            href="https://github.com/himayenumula91"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Github Profile For More Projects
          </a>
        </button>
      </div>
    </div>
  );
}

const Project = ({ project, openModal }) => (
  <div className="myproject">
    <h2>{project.title}</h2>
    <h3>{project.period}</h3>
    <p className="projectTechnology">Technology Stack: {project.technology}</p>
    <button onClick={() => openModal(project)}>More Info</button>
  </div>
);

const Modal = React.forwardRef(({ project, onClose }, ref) => (
  <div className="modalOverlay" onClick={onClose}>
    <div
      className="modalContent"
      onClick={(e) => e.stopPropagation()}
      ref={ref}
    >
      <div className="modalHeader">
        <h2>{project.title}</h2>
        <i className="fas fa-times closeIcon" onClick={onClose}></i>
      </div>
      <h3>{project.period}</h3>
      <p>{project.moreInfo}</p>
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      )}
    </div>
  </div>
));

export default Projects;