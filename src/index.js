import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './utils/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap your App component with ErrorBoundary */}
    {/* This will catch any errors in the component tree below it */}
    {/* You can also add a fallback UI in ErrorBoundary for better user experience */}
    {/* For example, you can show a message like "Something went wrong" */}
    {/* You can also log the error to an error reporting service */}
    {/* This is useful for debugging and monitoring errors in production */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
// If you want to enable service worker for offline capabilities, uncomment the following line
// serviceWorkerRegistration.register();