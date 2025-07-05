// REACT COMPONENTS IMPORTS
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

// REACT COMPONENTS STYLE(S)
import "react-vertical-timeline-component/style.min.css";

// CUSTOMIZED COMPONENTS
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import SEO from "@/components/SEO/SEO";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

// UTILITIES
import { textVariant } from "@/utils/motion";
import { themeProps } from "@/utils/prop-types";
import { baseURL, experiences } from "@/utils";

// STYLES
import { styles } from "@/styles/styles";
import "@/styles/experience_page.scss";

const Experience = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <motion.main
      className="experience-page"
      style={{
        backgroundColor: `${theme.colors.bg}`,
        color: `${theme.colors.text}`,
      }}
    >
      <Breadcrumb label="experience" to="/experience" />

      <SEO
        title={`Essi Junior's portfolio - Experience`}
        description="This is Essi Junior's portfolio website experience page. Here you can view all his professional skills, public works and work mentatility."
        name="Essi Junior"
        type="experience"
        link={`${baseURL}/experience`}
      />

      <motion.div variants={textVariant()} className="mt-12">
        <p
          className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}
        >
          {t("e1")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t("e2")}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences(t).map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.main>
  );
};

Experience.propTypes = themeProps;
export default Experience;