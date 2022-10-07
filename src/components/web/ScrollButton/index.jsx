import {useState} from "react";
import * as Icon from '@iconscout/react-unicons'

function ScrollButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div className="fixed bottom-[56px] right-0 m-5">
            <button onClick={scrollToTop}
                    className={`transition-all bg-primary-hover w-[46px] h-[46px] rounded-full flex items-center justify-center ${visible ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <Icon.UilArrowUp className="fill-white"/>
            </button>
        </div>
    );
}

export default ScrollButton;