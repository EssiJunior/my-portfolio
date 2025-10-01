// REACT COMPONENTS
import { useEffect, useState, memo, useCallback } from "react";
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";
import { useTheme } from 'styled-components'

// UTILS
import { themeProps } from "@/utils/prop-types";

// STYLE
import './back_to_top.css'

const BackToTop = memo(function BackToTop() {
    const theme = useTheme()
    const [scrolling, setScrolling] = useState(false);
    const [display, setDisplay] = useState("");

    const listenScrollEvent = useCallback(() => {
        if (window.scrollY > 700) {
            setScrolling(true)
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }, [])

    const goToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, [listenScrollEvent]);

    return (
        <div className={`back-to-top flex justify-center items-center ${theme.global.headingBox}`}
            style={scrolling ? { display: display } : { display: "none" }}>
            <div onClick={goToTop} className="back-to-top-content">
                <PiArrowFatLinesUpDuotone />
            </div>
        </div>
    )
})

BackToTop.propTypes = themeProps;
export default BackToTop