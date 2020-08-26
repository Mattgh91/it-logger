import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
    const deleteTechF = techId => {
        deleteTech(techId);
        M.toast({ html: 'Tech deleted' })
    };

    return (
        <>
            {tech.firstName} {tech.lastName}
            <a href="#!" className="secondary-content" onClick={() => deleteTechF(tech.id)}>
                <i className="material-icons grey-text">delete</i>
            </a>
        </>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
