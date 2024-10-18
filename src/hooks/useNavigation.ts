// creating router implementation with 
import { useState, useEffect } from "react";

const useNavigation = () => {
    const [pathname, setPathname] = useState('/');

    useEffect(() => {
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