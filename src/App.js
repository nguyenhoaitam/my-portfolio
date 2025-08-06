import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/projects";
import { useTranslation } from "react-i18next";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const { t, i18n } = useTranslation();
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
                  {t("navbar.about")}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("skills")}
                >
                  {t("navbar.skills")}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("projects")}
                >
                  {t("navbar.projects")}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection("contact")}
                >
                  {t("navbar.contact")}
                </button>
              </li>
            </ul>
            <div className="language-switcher">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={
                  i18n.language === "en"
                    ? "btn btn-lang"
                    : "btn"
                }
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("vi")}
                className={
                  i18n.language === "vi"
                    ? "btn btn-lang"
                    : "btn"
                }
              >
                VI
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-5 mt-5">
        <section id="about" className="container py-5">
          <h3 className="mb-4 text-center">{t("navbar.about")}</h3>
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <img
                src={`${process.env.PUBLIC_URL}/anh.jpg`}
                alt="My avt"
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </div>

            <div className="col-md-8">
              <p>{t('about.content1')}</p>
              <p>{t('about.content2')}</p>
              <p>{t('about.content3')}</p>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-5">
          <h2 className="mb-4 text-center">{t("navbar.skills")}</h2>

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

        <Projects />

        <section id="contact" className="container py-5 bg-light">
          <h2 className="mb-4 text-center">{t("navbar.contact")}</h2>
          <p>
            <strong>{t("contact.phone")}:</strong> 0394873584
          </p>
          <p>
            <strong>Email:</strong> nguyenhoaitam16082003@gmail.com
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a href="https://facebook.com/tamaa168/" target="_blank">
              facebook.com/tamaa168/
            </a>
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
