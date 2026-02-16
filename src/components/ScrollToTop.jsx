// REACT COMPONENTS
import { useEffect, useState, memo, useCallback } from "react";
import { PiArrowBendLeftUpThin } from "react-icons/pi";
import { useTheme } from 'styled-components'

// UTILS
import { themeProps } from "@/utils/prop-types";

const ScrollToTop = memo(function ScrollToTop() {
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
        <div className={`group fixed right-5 bottom-5 h-20 w-20 p-2 rounded-full flex justify-center items-center z-[1201] transition-all duration-300 hover:scale-110 hover:outline-yellow-300 ease-in-out shadow  border border-transparent outline outline-1 -outline-offset-8 outline-white ${theme.global.headingBox}`}
            style={scrolling ? { display: display } : { display: "none" }}>
            <div onClick={goToTop} className="flex items-center justify-center h-full w-full rounded-full bg-gradient-to-b from-primary to-secondary cursor-pointer">
                <PiArrowBendLeftUpThin size={30} className=" transition-all duration-300 ease-in-out text-white group-hover:text-yellow-300"/>
            </div>
        </div>
    )
})

ScrollToTop.propTypes = themeProps;
export default ScrollToTop