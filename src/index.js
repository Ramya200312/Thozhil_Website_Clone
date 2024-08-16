import React from 'react';
import ReactDOM from 'react-dom/client'; // Note this import

import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <Router >
    <App />
    </Router>
);
