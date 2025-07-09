// REACT COMPONENT
import { memo } from 'react';

// HELMET (HTML head tag)
import { Helmet } from 'react-helmet-async';

// UTILITIES
import { SEOProps } from '@/utils/prop-types';
import { myImage } from '@/utils';


const SEO = memo(function SEO({title, description, name, type, link, image = myImage}) {
    return (
        <Helmet>
            { /* Standard metadata tags */ }
                <title>{title}</title>
                <meta name='description' content={description} />
                <link rel="canonical" href={link} />
            { /* End standard metadata tags */ }

            { /* Facebook tags */ }
                <meta property="og:type" content={type} />
                <meta property="og:url" content={link} />
                <meta property="og:title" content={title} />
                <meta property="og:image" content={image} />
                <meta property="og:description" content={description} />
            { /* End Facebook tags */ }

            { /* Twitter tags */ }
                <meta name="twitter:creator" content={name} />
                <meta name="twitter:card" content={type} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
            { /* End Twitter tags */ }
        </Helmet>
    )
})

SEO.propTypes = SEOProps;
export default SEO;