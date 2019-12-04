import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => M.AutoInit());
    return (
        <div className="App">
          <div className="card-panel teal lighten-2">
            <i className="material-icons">
              accessibility
            </i>
            <i className="material-icons">
              accessibility
            </i>
            <i className="material-icons">
              accessibility
            </i>
            Disab-led
            <i className="material-icons">
              accessibility
            </i>
            <i className="material-icons">
              accessibility
            </i>
            <i className="material-icons">
              accessibility
            </i>
          </div>
        </div>
    );
};

export default App;
