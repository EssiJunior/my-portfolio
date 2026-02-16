// REACT COMPONENTS
import { memo } from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next';

// CUSTOMIZED COMPONENTS
import ProjectsCard from '@/components/ProjectsCard';
import Button from '@/components/Button/Button';
import PrimaryHeadingOverlay from '@/components/Overlays/PrimaryHeadingOverlay';
import PrimaryHeading from '@/components/Headings/Primary';
import LineOverlay from '@/components/Overlays/LineOverlay';

// UTILITIES
import { projects } from '@/utils';
import { themeProps } from '@/utils/prop-types';

// ASSETS
import { GrLinkNext } from "react-icons/gr";

const Projects = memo(function Projects() {
    const theme = useTheme()
    const {t} = useTranslation();

    return (
        <main id='projects' className="container relative z-50 ">
            <PrimaryHeadingOverlay />
            <LineOverlay />

            <PrimaryHeading subText={t('p1')} text={t('prs')} />


            <div className="pt-24">
                <div className="flex flex-col gap-6">
                    {projects.slice(0,5).map(project => (
                        <div
                            id={`sticky-card-${project.id}`}
                            key={project.id}
                            className="sticky-card mx-auto max-w-2xl "
                        >
                                <ProjectsCard project={project} theme={theme} />
                        </div>
                    ))}
                </div>
            </div>


            <div className="action">
                <Link to='/projects'><Button text={t('all')} bg={theme.tag === 'light' ? 'black' : ''} icon={<GrLinkNext />} /></Link>
            </div>
        </main>
    );
})

Projects.propTypes = themeProps;
export default Projects;