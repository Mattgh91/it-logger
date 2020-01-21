import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech }) => {
    return (
        <>
            {tech.firstName} {tech.lastName}
            <a href="#!" className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
};

export default TechItem;
