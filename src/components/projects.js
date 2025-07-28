import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "bootstrap";

const projectsData = [
  {
    title: "Thesis Management System",
    description:
      "This project aims to develop a management system for handling graduation thesis activities in a university environment. The system supports four main user roles: administrators, academic officers, lecturers, and students. Academic officers can create and manage thesis topics, monitor progress, and generate reports. Lecturers are able to track the theses they supervise or review, provide feedback, and grade submissions. Students can submit their reports in stages, track progress, and view evaluations. The system is designed to digitize and automate the thesis management process, reducing manual work and enhancing transparency.",
    technologies: [
      "(Python) Django REST Framework",
      "React Native",
      "MySQL",
      "Firebase",
    ],
    features: [
      "Login",
      "OAuth2 Authentication",
      "Thesis management",
      "Council creation and management",
      "Report submission",
      "Feedback and grading",
      "Statistics",
      "Real-time chat",
    ],
    images: [
      { src: "./images/kl_chamdiem.jpg", tag: "CD" },
      { src: "/images/kl_chitietkhoaluan.jpg", tag: "" },
      { src: "/images/kl_dangnhap.jpg", tag: "" },
      { src: "/images/kl_nopbaocao.jpg", tag: "" },
      { src: "/images/kl_quanlykhoaluan.jpg", tag: "" },
      { src: "/images/kl_quanlyhoidong.jpg", tag: "" },
      { src: "/images/kl_suadiem.jpg", tag: "" },
      { src: "/images/kl_thongke.jpg", tag: "" },
      { src: "/images/kl_trochuyenthoigianthuc.jpg", tag: "" },
    ],
  },
];

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const currentProject = projectsData[projectIndex];
  const currentImage = currentProject.images[imageIndex];

  const nextProject = () => {
    const newIndex = (projectIndex + 1) % projectsData.length;
    setProjectIndex(newIndex);
    setImageIndex(0);
  };

  const prevProject = () => {
    const newIndex =
      (projectIndex - 1 + projectsData.length) % projectsData.length;
    setProjectIndex(newIndex);
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prev) =>
        (prev - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  return (
    <>
      <section id="projects" className="container py-5">
        <h2 className="text-center mb-4">PROJECTS</h2>

        <div className="row bg-light p-4 rounder shadow">

            <div className="col-md-6">
                <h4 className="text-success fw-bold">{currentProject.title}</h4>
                <p>
                    <strong>Description: </strong>
                    {currentProject.description}
                </p>

                <p>
                    <strong>Technologies: </strong>
                    {currentProject.technologies.join(", ")}
                </p>

                <p>
                    <strong>Features: </strong>
                    {currentProject.features.join(", ")}
                </p>
            </div>

            <div className="col-md-6 text-center rounder position-relative p-3">
                <img
                    src={currentImage.src}
                    alt={currentImage.tag}
                    className="img-fluid rounder"
                    style={{ maxHeight: "350px"}}
                />
                <h5 className="mt-3 fw-bold">{currentImage.tag}</h5>
                

            </div>

        </div>


      </section>
    </>
  );
};

export default Projects;