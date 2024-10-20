// creating router implementation with hooks
import { useState, useEffect } from "react";

const useNavigation = () => {
    const [pathname, setPathname] = useState('/');

    // deals with back button
    useEffect(() => {
        const handlePopState = () => {
            setPathname(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);

        if(pathname !== window.location.pathname) {
            setPathname(window.location.pathname);
        }
    }, [pathname])
    
    const pushPath = (p: string) => {
        window.history.pushState({}, '', p);
        setPathname(p);
    };

    return {
        pathname,
        pushPath
    };
}

export default useNavigation;