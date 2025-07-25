// REACT COMPONENTS
import { memo } from 'react'
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next';

// CUSTOMIZED COMPONENTS
import ProjectCard from '@/components/ProjectsCard/ProjectsCard';
import Button from '@/components/Button/Button';

// UTILITIES
import { themeProps } from '@/utils/prop-types';
import { projects } from '@/utils';

const Projects = memo(function Projects() {
    const theme = useTheme()
    const {t} = useTranslation();

    return (
        <main id='projects' className="relative z-50  my-12 lg:my-24">

            <div className="flex justify-center">
                <div className="flex  items-center">
                    <span className={`w-24 h-[2px] ${theme.global.headingBox}`}></span>
                    <span className={`${theme.global.headingBox} w-fit text-white p-2 px-5 my-10 text-xl rounded-md capitalize`}>
                        {t('prs')}
                    </span>
                    <span className={`w-24 h-[2px] ${theme.global.headingBox}`}></span>
                </div>
            </div>

            <div className="pt-24">
                <div className="flex flex-col gap-6">
                    {projects.slice(0,5).map(project => (
                        <div
                            id={`sticky-card-${project.id}`}
                            key={project.id}
                            className="sticky-card mx-auto max-w-2xl sticky"
                            style={{ width: "90%" }}
                        >
                            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                                <ProjectCard project={project} theme={theme} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="action">
                <Link to='/projects'><Button text={t('all')} bg={theme.tag === 'light' ? 'black' : ''} icon={<GrNext />} /></Link>
            </div>
        </main>
    );
})

Projects.propTypes = themeProps;
export default Projects;