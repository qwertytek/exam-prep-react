import React from 'react';
import ReactDOM from 'react-dom/client';

export function App() {
    return React.createElement('h1', undefined, 'Hello World');
}

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(App));
}