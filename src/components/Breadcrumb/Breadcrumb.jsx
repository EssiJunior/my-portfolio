import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';

import './breadcrumb.scss'
import { useTranslation } from 'react-i18next';

// UTILS
import { themeProps } from '@/utils/prop-types';
import Typography from '../Typography/Typography';

const Breadcrumb = ({theme, label, to, icon='ppyvfomi.json'}) => {
    //State for translation
    const { t } = useTranslation();
    const is_mobile_1 = useMediaQuery('(max-width: 700px)')

    return (
        <Breadcrumbs aria-label="breadcrumb" className={is_mobile_1 ? 'breadcrumb-m':'breadcrumb'} color={{color: `${theme.colors.text}`}}>
            <Link underline="hover" color={{color: `${theme.colors.text}`}} href="/" className='link'>
                <lord-icon
                    src="https://cdn.lordicon.com/cnpvyndp.json"
                    trigger="hover"
                    colors={`primary:${theme.colors.text}`}
                    style={{width:'30px', height:'30px'}}>
                </lord-icon>
                <Typography text={t('home')} />
            </Link>
            <Link underline="hover" color={{color: `${theme.colors.text}`}} href={to} className='link' >
                <lord-icon
                    src={`https://cdn.lordicon.com/${icon}`}
                    trigger="hover"
                    colors={`primary:${theme.colors.text}`}
                    style={{width:'30px', height:'30px'}}>
                </lord-icon>
                <Typography text={t(label)} />
            </Link>
        </Breadcrumbs>
    )
}

Breadcrumb.propTypes = themeProps;
export default Breadcrumb