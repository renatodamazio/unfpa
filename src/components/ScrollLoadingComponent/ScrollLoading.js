import React, { useState, useEffect } from 'react';
import './ScrollLoading_Styles.scss';

function ScrollLoading() {
    const [scroll, setScrool] = useState(0);
    const [strokeDashoffset, setstrokeDashoffset] = useState(0);

    const handleScroll = () => {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        let perc = Math.ceil(top*100/docHeight);

        setstrokeDashoffset(264 - (perc/100*264));
        setScrool(perc);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="wrapper">
            <div className="container" data-scroll={scroll}>
                <svg className="scroll-progress" width="90" height="90">
                    <circle 
                        className="bg" 
                        r="42"
                        cx="45" 
                        cy="45" 
                        fill="transparent" 
                        strokeDasharray="264" 
                        strokeDashoffset="0" />   
                    <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="5%" stop-color="#01E400"></stop>
                        <stop offset="25%" stop-color="#FEFF01"></stop>
                        <stop offset="40%" stop-color="#FF7E00"></stop>
                        <stop offset="60%" stop-color="#FB0300"></stop>
                        <stop offset="80%" stop-color="#9B004A"></stop>
                        <stop offset="100%" stop-color="#7D0022"></stop>
                    </linearGradient>
                    </defs>
                    <circle 
                        className="progress" 
                        fill="none" 
                        r="42" 
                        cx="45" 
                        cy="45" 
                        stroke="url(#gradient)" 
                        strokeWidth="1" 
                        strokeDasharray="264" 
                        strokeDashoffset={strokeDashoffset} />
                </svg>
            </div>
        </div>
    );
}

export default ScrollLoading;