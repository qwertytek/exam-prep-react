import useNavigation from "./hooks/useNavigation";

const routes = [
    '/',
    '/page2'
];

const App = () => {
    const { pathname, pushPath } = useNavigation();
    return (
        <main>
            {
                pathname === routes[0]
                    && (
                        <h1>
                            Hello World
                        </h1>
                    )
            }
            {
                pathname === routes[1]
                    && (
                        <h1>
                            Not at Home
                        </h1>
                    )
            }
            <button
                onClick={
                    () => {
                        if(pathname === routes[0]) {
                            pushPath(routes[1])
                        }

                        if(pathname === routes[1]) {
                            pushPath(routes[0])
                        }
                    }
                }
            >
                {
                    pathname === routes[0] ? `Leave Home` : `Back Home`
                }
            </button>
        </main>
    );
};

export default App;