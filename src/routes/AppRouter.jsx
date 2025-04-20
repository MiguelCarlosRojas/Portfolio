import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import DetailEducation from "../pages/detailEducation/detailEducation";
import DetailProject from "../pages/detailProject/detailProject";
import { ProjectsProvider } from "../shared/context/ProjectsContext";

export default function AppRouter({ isDarkMode, toggleDarkMode }) {
  return (
    <BrowserRouter>
      <ProjectsProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route path="/education/:id" element={<DetailEducation />} />
          <Route path="/project/:url" element={<DetailProject />} />
        </Routes>
      </ProjectsProvider>
    </BrowserRouter>
  );
}

AppRouter.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};