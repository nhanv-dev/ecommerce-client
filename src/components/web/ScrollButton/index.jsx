import {useEffect, useState} from "react";
import * as Icon from '@iconscout/react-unicons'

function ScrollButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolled = document.documentElement.scrollTop;
            setVisible(scrolled > 300)
        });
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="fixed bottom-[80px] right-0 m-5 z-50">
            <button onClick={scrollToTop}
                    className={`transition-all bg-primary-hover w-[46px] h-[46px] rounded-full flex items-center justify-center ${visible ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <Icon.UilArrowUp className="fill-white"/>
            </button>
        </div>
    );
}

export default ScrollButton;