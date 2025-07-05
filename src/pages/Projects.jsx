// REACT COMPONENTS IMPORTS
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { useTheme } from "styled-components";

// CUSTOMIZED COMPONENTS
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import SEO from "@/components/SEO/SEO";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

// UTILS
import { textVariant } from "@/utils/motion";
import { themeProps } from "@/utils/prop-types";
import { baseURL, projects, realisations } from "@/utils";

// STYLES
import { styles } from "@/styles/styles";
import "@/styles/projects.scss";

const Projects = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <main
      className="projects"
      style={{
        backgroundColor: `${theme.colors.bg}`,
        color: `${theme.colors.text}`,
      }}
    >
      <Breadcrumb label="projects" to="/projects" />
      <SEO
        title={`Essi Junior's portfolio - Projects`}
        description="This is Essi Junior's portfolio website projects page. Here you can view all my work."
        name="Essi Junior"
        type="projects"
        link={`${baseURL}/projects`}
      />

      <motion.div variants={textVariant()} className="mt-12">
        <p
          className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}
        >
          {t("p1")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("projects")}.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()} className="mt-24">
        <p
          className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}
        >
          {t("p2")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("p3")}.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {realisations.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </main>
  );
};

Projects.propTypes = themeProps;
export default Projects;
