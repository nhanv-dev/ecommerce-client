import { useEffect } from 'react';
import {useLocation, withRouter} from 'react-router-dom';

function ScrollToTop({ history }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;