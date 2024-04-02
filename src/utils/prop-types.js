// PROPS BEARER
import PropTypes from 'prop-types';

// PROPS 
export const SEOProps = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export const lottieProps = {
    animation: PropTypes.string.isRequired,
    width: PropTypes.string
};

export const glowCardProps = {
    children: PropTypes.object.isRequired,
    identifier: PropTypes.string.isRequired
};

export const themeProps = {
    colors: PropTypes.object,
    hero: PropTypes.object,
    experience: PropTypes.object,
    skills: PropTypes.object,
    contact: PropTypes.object,
    fontSize: PropTypes.string,
    tag: PropTypes.string,
    global: PropTypes.object,
}