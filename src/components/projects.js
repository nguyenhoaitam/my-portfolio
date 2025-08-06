import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";

import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

const projectsData = [
  {
    key: "thesis",
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
    link: "https://github.com/nguyenhoaitam/thesis_management",
  },
  {
    key: "wedding",
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
    link: "https://github.com/nguyenhoaitam/WeddingRestaurantManagementBE",
  },
];

const Projects = () => {
  const { t, i18n } = useTranslation();
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

  const key = currentProject.key;

  return (
    <>
      <section id="projects" className="container py-5">
        <h2 className="text-center mb-4">{t('navbar.projects')}</h2>

        <div className="row bg-light p-4 rounder shadow" style={{minHeight: "600px"}}>
          <div className="col-md-6">
            <h4 className="text-success fw-bold">{t(`projects.${key}.title`)}</h4>
            <p>
              <strong>{t("projects.description")}: </strong>
              {t(`projects.${key}.description`)}
            </p>

            <p>
              <strong>{t("projects.role")}: </strong>
              {t(`projects.${key}.role`)}
            </p>

            <p>
              <strong>{t("projects.technologies")}: </strong>
              {t(`projects.${key}.technologies`)}
            </p>

            <p>
              <strong>{t("projects.features")}: </strong>
              {t(`projects.${key}.features`)}
            </p>
            
            <p>
              <strong>{t("projects.link")}: </strong>
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
            <h5 className="mt-3 fw-bold">{t(`projects.${key}.images.${currentImage.tag}`)}</h5>

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
