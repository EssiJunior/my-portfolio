// UTILS
import { textVariant } from "@/utils/motion";
import { themeProps } from '@/utils/prop-types';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO/SEO';
import { baseURL } from '../utils';
import { motion } from 'framer-motion';

// STYLES
import { styles } from "@/styles/styles";
import '@/styles/projects.scss'
const Projects = ({theme}) => {
    //State for translation
    const { t } = useTranslation();

    return (
        <main className='projects' style={{ backgroundColor: `${theme.colors.bg}`, color: `${theme.colors.text}` }}>
            <Breadcrumb theme={theme} />
            <SEO
                title={`Essi Junior's portfolio - Projects`}
                description="This is Essi Junior's portfolio website projects page. Here you can view all my work."
                name='Essi Junior'
                type='experience'
                link={`${baseURL}/projects`} />

            <motion.div variants={textVariant()} className="mt-12">
                <p className={`${styles.sectionSubText} text-center ${theme.global.subHeading}`}>
                    {t('p1')}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    {t('projects')}.
                </h2>
            </motion.div>
        </main>
    )
}

Projects.propTypes = themeProps;
export default Projects