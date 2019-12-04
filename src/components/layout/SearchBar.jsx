import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
    return (
        <nav style={{ marginBottom: 30 }}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    );
};

SearchBar.propTypes = {

};

export default SearchBar;
