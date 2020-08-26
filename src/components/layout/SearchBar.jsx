import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
    const searchRef = useRef(null);
    const search = () => searchLogs(searchRef.current.value);

    return (
        <nav style={{ marginBottom: 30 }}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required ref={searchRef} onChange={search} />
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

export default connect(null, { searchLogs })(SearchBar);
