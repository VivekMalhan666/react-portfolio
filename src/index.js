import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Suspense fallback="Loading">
    <App />
  </Suspense>,

  document.getElementById('root')
);
registerServiceWorker();
