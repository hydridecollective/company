"use client";

import { Start } from "./main/Start";
import { Mission } from "./main/Mission";
import { motion, useScroll, useSpring, useTransform, motionValue } from "framer-motion";
import ReactFullpage from '@fullpage/react-fullpage';
import { useState } from "react";

export const Page = ({ children, page }) => {
    return (
        <div className="section" style={{
            overflow: "hidden"
        }}>
            {children}
        </div>
    );
};

export const Progress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

    return (
        <motion.div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-brand rounded-full" style={{ scaleX }} />
    );
};

export const Fullpage = () => {
    const [ currentPage, setCurrentPage ] = useState(0);
    return (
        <ReactFullpage
            scrollOverflow={false}
            scrollingSpeed={1000}
            navigation={true}
            parallax={true}
            onLeave={(origin, destination, direction) => {
                // set window.fpPage to the current page
                if (window) {
                    window.fpPage = destination.index;
                };
            }}
            on
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <>
                            <Start />
                            <Mission />
                        </>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
};