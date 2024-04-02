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

export const buttonProps = {
    text: PropTypes.string,
    width: PropTypes.string,
    icon: PropTypes.object,
    bg: PropTypes.string,
    fontWeight: PropTypes.object,
    borderWidth: PropTypes.string
}

export const experienceCardProps = {
    experience: PropTypes.string,
    theme: PropTypes.object,
}

export const projectCardProps = {
    project: PropTypes.string,
    theme: PropTypes.object,
}

export const languageProps = {
    style: PropTypes.object,
    text: PropTypes.string,
    page: PropTypes.string,
    languageRef: PropTypes.object
}

export const typographyProps = {
    style: PropTypes.object,
    text: PropTypes.string,
    isGradient: PropTypes.bool,
    className: PropTypes.string
}