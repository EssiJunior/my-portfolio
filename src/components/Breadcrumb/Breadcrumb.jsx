import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';

import './breadcrumb.scss'

const Breadcrumb = ({page, to}) => {
    const is_mobile_1 = useMediaQuery('(max-width: 700px)')

    return (
        <Breadcrumbs aria-label="breadcrumb" className={is_mobile_1 ? 'breadcrumb-m':'breadcrumb'}>
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            {
                page !== 'Home' &&
                <Link
                    underline="hover"
                    color="inherit"
                    href={to}
                >
                    {page}
                </Link>
            }
        </Breadcrumbs>
    )
}

export default Breadcrumb