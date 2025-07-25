import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Tooltip from "../../../../shared/components/tooltip/tooltip";
import PrimaryButton from "../../../../shared/components/primaryButton/primaryButton";
import { motion } from "framer-motion";

const icons = [
  {
    title: "logo",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.694 18.3059C20.345 18.3059 22.494 16.1568 22.494 13.5059C22.494 10.8549 20.345 8.70587 17.694 8.70587C15.0431 8.70587 12.894 10.8549 12.894 13.5059C12.894 16.1568 15.0431 18.3059 17.694 18.3059Z"
          stroke="#7D8AFF"
          strokeWidth="3"
        />
        <path
          d="M17.6938 34.3058C26.5304 34.3058 33.6938 27.1424 33.6938 18.3058C33.6938 9.46929 26.5304 2.30585 17.6938 2.30585C8.85729 2.30585 1.69385 9.46929 1.69385 18.3058C1.69385 27.1424 8.85729 34.3058 17.6938 34.3058Z"
          stroke="#7D8AFF"
          strokeWidth="3"
        />
        <path
          d="M27.2456 31.1058C26.9896 26.4786 25.5736 23.1058 17.6936 23.1058C9.8136 23.1058 8.3976 26.4786 8.1416 31.1058"
          stroke="#7D8AFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "world",
    svg: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.8 9H24.2M1.8 17H24.2M1 13C1 14.5759 1.31039 16.1363 1.91345 17.5922C2.5165 19.0481 3.40042 20.371 4.51472 21.4853C5.62902 22.5996 6.95189 23.4835 8.4078 24.0866C9.86371 24.6896 11.4241 25 13 25C14.5759 25 16.1363 24.6896 17.5922 24.0866C19.0481 23.4835 20.371 22.5996 21.4853 21.4853C22.5996 20.371 23.4835 19.0481 24.0866 17.5922C24.6896 16.1363 25 14.5759 25 13C25 9.8174 23.7357 6.76516 21.4853 4.51472C19.2348 2.26428 16.1826 1 13 1C9.8174 1 6.76516 2.26428 4.51472 4.51472C2.26428 6.76516 1 9.8174 1 13Z"
          stroke="#4557FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3333 1C10.0871 4.59948 8.89624 8.75715 8.89624 13C8.89624 17.2428 10.0871 21.4005 12.3333 25M13.6666 1C15.9128 4.59948 17.1037 8.75715 17.1037 13C17.1037 17.2428 15.9128 21.4005 13.6666 25"
          stroke="#4557FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "sun",
    svg: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0001 26C22.4183 26 26.0001 22.4183 26.0001 18C26.0001 13.5817 22.4183 10 18.0001 10C13.5818 10 10.0001 13.5817 10.0001 18C10.0001 22.4183 13.5818 26 18.0001 26Z"
          stroke="#4557FB"
          strokeWidth="3"
        />
        <path
          d="M18 2V5.2M18 30.8V34M5.2 18H2M34 18H30.8M30.4448 5.5568L26.8896 8.8064M5.5552 5.5568L9.1104 8.8064M9.1104 26.8896L5.5552 30.4448M30.4448 30.4432L26.8896 26.888"
          stroke="#4557FB"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "moon",
    svg: (
      <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.8548 16.8779C29.8548 20.5293 28.4043 24.0311 25.8225 26.613C23.2406 29.1949 19.7388 30.6454 16.0874 30.6454V32.8779C24.9239 32.8779 32.0874 25.7144 32.0874 16.8779H29.8548ZM16.0874 30.6454C12.436 30.6454 8.93425 29.1949 6.35235 26.613C3.77045 24.0311 2.31996 20.5293 2.31996 16.8779H0.0874023C0.0874023 25.7144 7.25094 32.8779 16.0874 32.8779V30.6454ZM2.31996 16.8779C2.31996 13.2266 3.77045 9.72477 6.35235 7.14288C8.93425 4.56098 12.436 3.11049 16.0874 3.11049V0.87793C7.25094 0.87793 0.0874023 8.04146 0.0874023 16.8779H2.31996ZM21.2967 20.2268C19.0269 20.2268 16.8501 19.3251 15.2452 17.7201C13.6402 16.1152 12.7386 13.9384 12.7386 11.6686H10.506C10.506 14.5305 11.6429 17.2752 13.6665 19.2988C15.6902 21.3225 18.4348 22.4593 21.2967 22.4593V20.2268ZM28.6269 16.0876C27.8658 17.3511 26.7908 18.3963 25.5064 19.1215C24.2219 19.8468 22.7718 20.2276 21.2967 20.2268V22.4593C23.1563 22.4603 24.9846 21.9805 26.6041 21.0664C28.2236 20.1524 29.5793 18.8351 30.5395 17.2426L28.6269 16.0876ZM12.7386 11.6686C12.7379 10.1936 13.1187 8.74348 13.844 7.45908C14.5692 6.17467 15.6143 5.09965 16.8777 4.33839L15.7228 2.42732C14.1303 3.38731 12.8131 4.74271 11.8991 6.36194C10.985 7.98117 10.5051 9.80922 10.506 11.6686H12.7386ZM16.0874 3.11049C15.9365 3.10693 15.7931 3.04379 15.6885 2.93486C15.6246 2.8727 15.5819 2.79198 15.5665 2.70416C15.5605 2.65802 15.5635 2.52407 15.7228 2.42732L16.8777 4.33839C17.6264 3.88593 17.8675 3.05691 17.7797 2.405C17.6874 1.72779 17.1546 0.87793 16.0874 0.87793V3.11049ZM30.5395 17.2426C30.4413 17.4018 30.3073 17.4048 30.2612 17.3989C30.1734 17.3834 30.0926 17.3407 30.0305 17.2768C29.9215 17.1723 29.8584 17.0289 29.8548 16.8779H32.0874C32.0874 15.8108 31.2375 15.2779 30.5603 15.1857C29.9084 15.0978 29.0794 15.339 28.6269 16.0876L30.5395 17.2426Z"
          fill="#4557FB"
        />
      </svg>
    ),
  },
];

const getIcon = (title) => {
  const icon = icons.find((icon) => icon.title === title);
  return icon ? icon.svg : null;
};

export default function Nav({ isDarkMode, toggleDarkMode }) {
  const [listVisible, setListVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const screenWidthCollapsed = 1024;

  const updateCollapsedState = () => {
    setIsCollapsed(
      window.innerWidth <= screenWidthCollapsed || window.scrollY > 0
    );
  };

  const handleHoverNav = (isHover) => {
    if (window.innerWidth > screenWidthCollapsed) {
      setIsCollapsed(!isHover && window.scrollY > 0);
    }
  };

  useEffect(() => {
    updateCollapsedState();

    window.addEventListener("scroll", updateCollapsedState);
    window.addEventListener("resize", updateCollapsedState);

    return () => {
      window.removeEventListener("scroll", updateCollapsedState);
      window.removeEventListener("resize", updateCollapsedState);
    };
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    if (window.innerWidth <= screenWidthCollapsed) {
      setListVisible(false);
    }
  };

  return (
    <motion.nav
      className={`${styles.nav} ${listVisible ? styles.open : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div
        className={styles.coverList}
        onClick={() => setListVisible(false)}
      ></div>
      <div
        className={`${styles.navLeft} ${isCollapsed ? styles.collapsed : ""}`}
        onMouseEnter={() => handleHoverNav(true)}
        onMouseLeave={() => handleHoverNav(false)}
      >
        <button
          to="#"
          className={styles.menu}
          aria-label={
            !listVisible
              ? "Abrir menú de navegación"
              : "Cerrar menú de navegación"
          }
          onClick={() => setListVisible((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.links}>
          <button
            onClick={() => handleScroll("header")}
            className={`${styles.logo} ${styles.navLink}`}
            aria-label="Ir al inicio"
          >
            {getIcon("logo")}
          </button>
          <button
            onClick={() => handleScroll("experience")}
            className={styles.navLink}
          >
            <span>Experiencia</span>
          </button>
          {/* <button
            onClick={() => handleScroll("projects")}
            className={styles.navLink}
          >
            <span>Proyectos</span>
          </button> */}
          <button
            onClick={() => handleScroll("education")}
            className={styles.navLink}
          >
            <span>Educación</span>
          </button>
        </div>
        <PrimaryButton
          text="Contáctame"
          onClick={() => handleScroll("contact")}
          fontSize="15px"
        />
      </div>
      <div className={styles.navRight}>
        <Tooltip
          text="Estamos trabajando en ello."
          ariaLabel="Cambiar idioma a Inglés"
          anchorSide="right"
        >
          <button className={styles.navSetting}>
            {getIcon("world")}
            <span>EN</span>
          </button>
        </Tooltip>
        <Tooltip
          text={`Ver modo ${isDarkMode ? "claro" : "oscuro"}`}
          anchorSide="right"
        >
          <button
            onClick={toggleDarkMode}
            className={`${styles.navSetting} ${styles.switchSetting}
					${isDarkMode ? styles.dark : styles.light}`}
          >
            <div className={styles.backdrop}>
              <span className={`${styles.icon} ${styles.sun}`}>
                {getIcon("sun")}
              </span>
              <span className={`${styles.icon} ${styles.moon}`}>
                {getIcon("moon")}
              </span>
            </div>
          </button>
        </Tooltip>
      </div>
      <div className={styles.navList}>
        <button
          className={`${styles.navLink}`}
          onClick={() => handleScroll("header")}
          style={{
            animationDelay: `${0.1}s`,
          }}
        >
          <span>Inicio</span>
        </button>
        <button
          onClick={() => handleScroll("experience")}
          className={styles.navLink}
          style={{
            animationDelay: `${0.1 * 2}s`,
          }}
        >
          <span>Experiencia</span>
        </button>
        {/* <button
          className={styles.navLink}
          onClick={() => handleScroll("projects")}
          style={{
            animationDelay: `${0.1 * 3}s`,
          }}
        >
          <span>Proyectos</span>
        </button> */}
        <button
          className={styles.navLink}
          onClick={() => handleScroll("education")}
          style={{
            animationDelay: `${0.1 * 4}s`,
          }}
        >
          <span>Educación</span>
        </button>
        <div
          className={styles.settingList}
          style={{
            animationDelay: `${0.1 * 5}s`,
          }}
        >
          <button
            className={styles.navSetting}
            aria-label="Cambiar idioma a Inglés (Aún no disponible)"
          >
            {getIcon("world")}
            <span>EN</span>
          </button>
          <button
            onClick={toggleDarkMode}
            className={`${styles.navSetting} ${styles.switchSetting}
					${isDarkMode ? styles.dark : styles.light}`}
            aria-label={isDarkMode ? "Ver modo oscuro" : "Ver modo claro"}
          >
            <div className={styles.backdrop}>
              <span className={`${styles.icon} ${styles.sun}`}>
                {getIcon("sun")}
              </span>
              <span className={`${styles.icon} ${styles.moon}`}>
                {getIcon("moon")}
              </span>
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

Nav.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
