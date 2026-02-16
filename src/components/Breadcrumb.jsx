// REACT COMPONENTS
import { memo } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

// ASSETS
import Typography from '@/components/Typography/Typography';

// UTILS
import { themeProps } from '@/utils/prop-types';

const Breadcrumb = memo(function Breadcrumb({ label, to, icon = 'ppyvfomi.json' }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const is_mobile_1 = useMediaQuery('(max-width: 700px)')

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 2.3, ease: "easeInOut" }}
            className={is_mobile_1 ? 'my-4 mx-12 flex flex-col justify-center items-center' : 'my-2 mx-12 w-4/5 max-w-[1000px]'}
        >
            <Breadcrumbs aria-label="breadcrumb"  color={{ color: `${theme.colors.text}` }}>
                <Link underline="hover" color={{ color: `${theme.colors.text}` }} href="/" className='link flex justify-center items-center'>
                    <lord-icon
                        src="https://cdn.lordicon.com/cnpvyndp.json"
                        trigger="hover"
                        colors={`primary:${theme.colors.text}`}
                        style={{ width: '30px', height: '30px' }}>
                    </lord-icon>
                    <Typography text={t('home')} />
                </Link>
                <Link underline="hover" color={{ color: `${theme.colors.text}` }} href={to} className='link flex justify-center items-center' >
                    <lord-icon
                        src={`https://cdn.lordicon.com/${icon}`}
                        trigger="hover"
                        colors={`primary:${theme.colors.text}`}
                        style={{ width: '30px', height: '30px' }}>
                    </lord-icon>
                    <Typography text={t(label)} />
                </Link>
            </Breadcrumbs>
        </motion.div>
    )
})

Breadcrumb.propTypes = themeProps;
export default Breadcrumb