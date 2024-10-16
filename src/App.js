export function App() {
    return React.createElement('h1', null, 'Hello World');
}

const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(App), rootElement);