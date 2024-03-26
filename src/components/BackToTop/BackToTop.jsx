import { useEffect, useState } from "react";

import './back_to_top.scss'
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";

const BackToTop = ({theme}) => {
    const [isHover, setIsHover] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [display, setDisplay] = useState("");
    
    const listenScrollEvent = () => {
        if (window.scrollY > 700) {
            setScrolling(true)
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    } 

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className={`back-to-top ${theme.global.headingBox}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={scrolling ? {display: display}:{display: "none"}}>
            { isHover && 
            <div onClick={goToTop} className="back-to-top-content">
                <PiArrowFatLinesUpDuotone   />
            </div>
            }
        </div>
    )
}

export default BackToTop