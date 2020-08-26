import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
    const deleteTechF = () => {
        deleteTech(tech.id);
        M.toast({ html: `Tech deleted: ${tech.firstName} ${tech.lastName}` })
    };

    return (
        <>
            {tech.firstName} {tech.lastName}
            <a href="#!" className="secondary-content" onClick={deleteTechF}>
                <i className="material-icons grey-text">delete</i>
            </a>
        </>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
