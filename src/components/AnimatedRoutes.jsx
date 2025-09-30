// REACT COMPONENTS IMPORTS
import { useRef, lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// PAGES
const Home = lazy(() => import("@/pages/Home"));
const Experience = lazy(() => import("@/pages/Experience"));
const Contact = lazy(() => import("@/pages/Contact"));
const Resume = lazy(() => import("@/pages/Resume"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));

// CUSTOMIZED CONTAINERS
const Layout = lazy(() => import("@/containers/Layout/Layout"));

// UTILS
import { toggleThemeProps } from "@/utils/prop-types";

const AnimatedRoutes = ({ toggle }) => {
  const location = useLocation();

  // Utility refs
  const skillsRef = useRef();
  const languageRef = useRef();
  const educationRef = useRef();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Navigate to="/notfound" replace />} />
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route
            path="/"
            element={
              <Layout
                themeToggler={toggle}
                languageRef={languageRef}
                skillsRef={skillsRef}
                educationRef={educationRef}
              />
            }
          >
            <Route
              index
              element={
                <Home skillsRef={skillsRef} educationRef={educationRef} />
              }
            />
            <Route path="experience" element={<Experience />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

AnimatedRoutes.propTypes = toggleThemeProps;
export default AnimatedRoutes;
