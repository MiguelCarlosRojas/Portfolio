import PropTypes from "prop-types";
import styles from "./home.module.css";
import Nav from "./sections/nav/Nav";
import Header from "./sections/header/Header";
import Careers from "./sections/careers/Careers";
import Experience from "./sections/experience/Experience";
/* import Projects from "./sections/projects/Projects"; */
import Education from "./sections/education/Education";
import Contact from "./sections/contact/Contact";
import Footer from "../../shared/components/footer/footer";

export default function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <div id="container" className={styles.container}>
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Header />
      <Careers />
      <Experience />
      {/* <Projects /> */}
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};