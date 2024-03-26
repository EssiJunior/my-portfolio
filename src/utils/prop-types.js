
// PROPS BEARER
import PropTypes from 'prop-types';

export const SEOProps = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export const themeProps = {
    colors: PropTypes.object.isRequired,
    hero: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    contact: PropTypes.object.isRequired,
    fontSize: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    global: PropTypes.object.isRequired,
}