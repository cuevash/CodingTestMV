// This file is a css reset and needs to be imported before 'index.css'
import './globalCss'
import './index.css';
import './global.css'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
