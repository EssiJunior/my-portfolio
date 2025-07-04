// UTILS
import { textVariant } from "@/utils/motion";
import { themeProps } from '@/utils/prop-types';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';

// STYLES
import { styles } from "@/styles/styles";
import '@/styles/projects.scss'
import { VerticalTimeline } from "react-vertical-timeline-component";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { useTheme } from "styled-components";
import { baseURL, projects, realisations } from "../utils";

const Projects = () => {
    const theme = useTheme()

    //State for translation
    const { t } = useTranslation();

    return (
        <motion.main 
        
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity:0, transition: {duration:1}}}

        className='projects' style={{ backgroundColor: `${theme.colors.bg}`, color: `${theme.colors.text}` }}>
            <Breadcrumb  label='projects' to='/projects' />
            <SEO
                title={`Essi Junior's portfolio - Projects`}
                description="This is Essi Junior's portfolio website projects page. Here you can view all my work."
                name='Essi Junior'
                type='projects'
                link={`${baseURL}/projects`} />

            <motion.div variants={textVariant()} className="mt-12">
                <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}>
                    {t('p1')}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    {t('projects')}.
                </h2>
            </motion.div>

            {/* <h1 className="gradient__text">#TODO</h1> */}

            
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                        {/* <ProjectCard
                            key={`project-${1}`}
                            project={projects[0]}
                            theme={theme}
                        /> */}
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            project={project}
                            theme={theme}
                        />
                    ))}
                </VerticalTimeline>
            </div>

            
            <motion.div variants={textVariant()} className="mt-24">
                <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}>
                    {t('p2')}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    {t('p3')}.
                </h2>
            </motion.div>

            {/* <h1 className="gradient__text">#TODO</h1> */}

            
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                        {/* <ProjectCard
                            key={`project-${1}`}
                            project={projects[0]}
                            theme={theme}
                        /> */}
                    {realisations.map((project, index) => (
                        <ProjectCard
                            key={`project-${index}`}
                            project={project}
                            theme={theme}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </motion.main>
    )
}

Projects.propTypes = themeProps;
export default Projects