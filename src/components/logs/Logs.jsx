import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/logActions';

const Logs = ({
    log: {
        logs,
        loading,
        current,
        error,
    },
    getLogs,
}) => {
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs && logs.length === 0
                ? (<p className="center">No Logs to show...</p>)
                : (
                    logs && logs.map(log => (
                        <LogItem log={log} key={log.id} />
                    ))
            )}
        </ul>
    );
};

const mapStateToProps = state => ({
    log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
