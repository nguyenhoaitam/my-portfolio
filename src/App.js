import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/projects"

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            NGUYỄN HOÀI TÂM
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("about")}
                >
                  ABOUT
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("skills")}
                >
                  SKILLS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("projects")}
                >
                  PROJECTS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("contact")}
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="pt-5 mt-5">
        <section id="about" className="container py-5">
          <h3 className="mb-4 text-center">ABOUT ME</h3>
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <img
                src="/anh.jpg"
                alt="My avt"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </div>

            <div className="col-md-8">
              <p>
                Hello, I'm <strong>Nguyen Hoai Tam</strong>, a graduate in
                Information Technology from{" "}
                <strong>Ho Chi Minh City Open University</strong>. Throughout my
                studies, I participated in various personal and team projects,
                which helped me build a solid foundation in software development
                processes.
              </p>
              <p>
                I am eager to learn, always open to new challenges, and
                committed to continuous self-improvement. I am currently seeking
                an opportunity for employment or internship in a professional
                environment where I can apply my knowledge, enhance my skills,
                and contribute to the success of the development team.
              </p>
              <p>
                I believe that with my passion for technology, sense of
                responsibility, and strong teamwork skills, I can be a valuable
                candidate and grow sustainably in this field.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-5">
          <h2 className="mb-4 text-center">Skills</h2>

          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <span className="badge bg-primary mb-2">HTML</span>
                <span className="badge bg-primary mb-2">CSS</span>
                <span className="badge bg-primary mb-2">JavaScript</span>
                <span className="badge bg-primary mb-2">ReactJS</span>
                <span className="badge bg-primary mb-2">ReactNative</span>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <span className="badge bg-success mb-2">Django</span>
                <span className="badge bg-success mb-2">Spring Boot</span>
                <span className="badge bg-success mb-2">RESTful APIs</span>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <span className="badge bg-warning text-dark mb-2">MySQL</span>
                <span className="badge bg-warning text-dark mb-2">SQL</span>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <span className="badge bg-dark mb-2">Git/Github</span>
                <span className="badge bg-dark mb-2">Postman</span>
              </div>
            </div>
          </div>
        </section>

        <Projects/>

        <section id="contact" className="container py-5 bg-light">
          <h2>Contact</h2>
          <p>Email: tamnguyen@example.com</p>
          <p>LinkedIn: linkedin.com/in/tamnguyen</p>
        </section>
      </div>
    </>
  );
}

export default App;
