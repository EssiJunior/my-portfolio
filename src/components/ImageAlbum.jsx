"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

// ASSETS
import { me1, me2, me3, me4, me5 } from "@/assets/me";

export default function ScrollHorizontal() {

    const { t } = useTranslation();

    const items = [
        { id: 1, color: "#ff0088", label: t(`intro`), image: me1 },
        { id: 2, color: "#dd00ee", label: t(`a2`), image: me2 },
        { id: 3, color: "#9911ff", label: t(`a3`), image: me3 },
        { id: 4, color: "#0d63f8", label: t(`a4`), image: me4 },
        { id: 5, color: "#0cdcf7", label: t(`a5`), image: me5 },
    ]

    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Move from first item centered to last item centered
    const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
    const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

    return (
        <div id="example">
            <div ref={containerRef} className="h-[300vh] relative">
                <div className="sticky-wrapper sticky top-0">
                    <motion.div className="gallery" style={{ x }}>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                style={
                                    {
                                        "--item-color": item.color,
                                        "--item-image": `url(${item.image})`,
                                    }
                                }
                            >
                                <div className="item-content">
                                    <span className="item-number font-extrabold">0{item.id}</span>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
            #example {
                height: auto;
                overflow: visible;
            }

            .sticky-wrapper {
                padding: 50px 0;
                width: 400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                overflow: visible;
            }

            .gallery {
                display: flex;
                gap: 30px;
                will-change: transform;
            }

            .gallery-item {
                flex-shrink: 0;
                width: 400px;
                height: 500px;
                border-radius: 12px;
                position: relative;
                overflow: hidden;
                background-image: var(--item-image);
                background-size: cover;
                background-position: center;
                }
                
             .gallery-item::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to bottom,
                    transparent 60%,
                    var(--item-color)
                    );
                backdrop-filter: grayscale(90%);
                transition:backdrop-filter 0.3s ease-in;
                mix-blend-mode: multiply;
            }
                
            .gallery-item:hover::before{
                backdrop-filter: none;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }

            .item-number {
                font-size: 40px;
                color: var(--item-color);
                display: block;
                margin-bottom: 8px;
            }

            .gallery-item p {
                font-size: 18px;
                color: #f5f5f5;
                margin: 0;
            }
                
            @media (max-width: 600px) {
                .sticky-wrapper {
                    width: 280px;
                }

                .gallery {
                    gap: 15px;
                }

                .gallery-item {
                    width: 300px;
                    height: 550px;
                }
            }


            @media (prefers-reduced-motion: reduce) {
                .gallery {
                    transform: none !important;
                }
                .scroll-container {
                    height: auto;
                }
                .sticky-wrapper {
                    position: relative;
                    height: auto;
                    width: 100%;
                    overflow-x: auto;
                    padding: 50px 0;
                }
            }
        `}</style>
    )
}

/**
 * ==============   Data   ================
 */

const ITEM_WIDTH = 400
const GAP = 30
