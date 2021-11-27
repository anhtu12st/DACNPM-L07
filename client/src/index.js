import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './Contexts/UserContext';

const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Render the top component to the root.
root.render(
    <UserProvider>
      <App />
    </UserProvider>
);