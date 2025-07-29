import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "bootstrap";

import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

const projectsData = [
  {
    title: "Thesis Management System",
    description:
      "This project aims to develop a management system for handling graduation thesis activities in a university environment. The system supports four main user roles: administrators, academic officers, lecturers, and students. Academic officers can create and manage thesis topics, monitor progress, and generate reports. Lecturers are able to track the theses they supervise or review, provide feedback, and grade submissions. Students can submit their reports in stages, track progress, and view evaluations. The system is designed to digitize and automate the thesis management process, reducing manual work and enhancing transparency.",
    technologies: [
      "(Python) Django REST Framework",
      "React Native",
      "MySQL",
      "Firebase.",
    ],
    features: [
      "Login",
      "OAuth2 Authentication",
      "Thesis Management",
      "Council Creation and Management",
      "Submit Report",
      "Feedback and Drading",
      "Statistics",
      "Real-time Chat.",
    ],
    images: [
      { src: "/images/kl_dangnhap.jpg", tag: "Login" },
      { src: "/images/kl_quanlykhoaluan.jpg", tag: "Thesis Management" },
      { src: "/images/kl_chitietkhoaluan.jpg", tag: "Thesis Details" },
      { src: "/images/kl_quanlyhoidong.jpg", tag: "Council Management" },
      { src: "/images/kl_nopbaocao.jpg", tag: "Submit Report" },
      { src: "/images/kl_chamdiem.jpg", tag: "Grading" },
      { src: "/images/kl_suadiem.jpg", tag: "Edit Grades" },
      { src: "/images/kl_thongke.jpg", tag: "Statistics" },
      { src: "/images/kl_trochuyenthoigianthuc.jpg", tag: "Real-time Chat" },
    ],
    role: "Backend Developer (Designed database schema and developed RESTful APIs).",
    link: "https://github.com/nguyenhoaitam/thesis_management",
  },
  {
    title: "Wedding Restaurant Management System",
    description:
    "This project involves the development of a software system that supports the management and organization of weddings and events at restaurants and conference centers. The system serves three main user roles: administrators, staff, and customers each with specific functions tailored to their role. Administrators can manage banquet halls, menus, services, and view summary statistics. Customers can browse hall information, book events, make payments, and leave reviews after the event. Staff members can view assigned events and update service statuses. The system aims to streamline operations, minimize errors, and improve the overall customer service experience.",
     technologies: [
      "(Python) Django REST Framework",
      "ReactJS",
      "MySQL",
      "Firebase.",
    ],
    features: [
      "Registration",
      "Login",
      "OAuth2 Authentication",
      "Hall Browsing",
      "Event Booking",
      "Online Payment (Momo and ZaloPay)",
      "Event Review",
      "Reporting and Statistics",
      "Real-time Chat.",
    ],
    images: [
      { src: "/images/tc_dangky.jpg", tag: "Register" },
      { src: "/images/tc_dangnhap.jpg", tag: "Login" },
      { src: "/images/tc_tracuusanh.jpg", tag: "Hall Browsing" },
      { src: "/images/tc_chitietsanh.jpg", tag: "Hall Detail" },
      { src: "/images/tc_dattiec.jpg", tag: "Event Booking" },
      { src: "/images/tc_thanhtoan.jpg", tag: "Payment" },
      { src: "/images/tc_thanhtoanmomo.jpg", tag: "Payment (Momo)" },
      { src: "/images/tc_danhgia.jpg", tag: "Event Review" },
      { src: "/images/tc_thongke.jpg", tag: "Reporting and Statistics" },
      { src: "/images/tc_chat.jpg", tag: "Real-time Chat" },
    ],
    role: "Fullstack Developer (Defined use cases, designed database schema, implemented RESTful APIs, created UI mockups, and developed the frontend interface).",
    link: "https://github.com/nguyenhoaitam/WeddingRestaurantManagementBE",
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

        <div className="row bg-light p-4 rounder shadow" style={{minHeight: "600px"}}>
          <div className="col-md-6">
            <h4 className="text-success fw-bold">{currentProject.title}</h4>
            <p>
              <strong>Description: </strong>
              {currentProject.description}
            </p>

            <p>
              <strong>Role: </strong>
              {currentProject.role}
            </p>

            <p>
              <strong>Technologies: </strong>
              {currentProject.technologies.join(", ")}
            </p>

            <p>
              <strong>Features: </strong>
              {currentProject.features.join(", ")}
            </p>
            
            <p>
              <strong>Link: </strong>
              <a href={currentProject.link} target="_blank">View on GitHub</a>
            </p>
          </div>

          <div className="col-md-6 text-center rounder position-relative p-3">
            <img
              src={`${process.env.PUBLIC_URL}${currentImage.src}`}
              alt={currentImage.tag}
              className="img-fluid rounder img-prj"
              style={{ maxHeight: "350px", maxWidth: "500px" }}
            />
            <h5 className="mt-3 fw-bold">{currentImage.tag}</h5>

            <button
              className="btn btn-navigate position-absolute top-50 start-0 translate-middle-y"
              onClick={prevImage}
            >
              <HiArrowCircleLeft />
            </button>

            <button
              className="btn btn-navigate position-absolute top-50 end-0 translate-middle-y"
              onClick={nextImage}
            >
              <HiArrowCircleRight />
            </button>
          </div>
        </div>

        <div className="text-center mt-4 navigate_prj">
          <button
            className="btn btn-navigate mx-2"
            onClick={prevProject}
          >
            <HiArrowCircleLeft />
          </button>

          <button
            className="btn btn-navigate mx-2"
            onClick={nextProject}
          >
            <HiArrowCircleRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
