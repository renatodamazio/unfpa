import React, { useState, useEffect } from 'react';
import './ScrollLoading_Styles.scss';

function ScrollLoading() {
    const [scroll, setScrool] = useState(0);
    const [strokeDashoffset, setstrokeDashoffset] = useState(0);
    const strokeDasharray = 933;
    const r = 147;
    const cx = 150;
    const cy = 150

    const handleScroll = () => {
        let top = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = parseInt(document.body.scrollHeight - window.innerHeight);
        
        let perc = Math.ceil(top*100/docHeight);

        let count = Math.abs(parseInt(strokeDasharray - (perc/100*strokeDasharray)));
        
        if (perc > 100) perc = 100;
        
        setstrokeDashoffset(count)
        setScrool(perc);
        
        
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="wrapper">
            <div className="container" data-scroll={scroll}>
                <svg className="scroll-progress" width="300" height="300">
                    <circle 
                        className="bg" 
                        r={r}
                        cx={cx} 
                        cy={cy} 
                        style={{opacity: 0.3}}
                        stroke="#fff"
                        fill="transparent" 
                        strokeLinecap="round"
                        strokeDasharray={4} />   
                    <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="5%" stopColor="#01E400"></stop>
                        <stop offset="25%" stopColor="#FEFF01"></stop>
                        <stop offset="40%" stopColor="#FF7E00"></stop>
                        <stop offset="60%" stopColor="#FB0300"></stop>
                        <stop offset="80%" stopColor="#9B004A"></stop>
                        <stop offset="100%" stopColor="#7D0022"></stop>
                    </linearGradient>
                    </defs>
                    <circle 
                        className="progress" 
                        fill="none" 
                        r={r}
                        cx={cx} 
                        cy={cy} 
                        stroke="url(#gradient)" 
                        strokeWidth="1" 
                        strokeDasharray={strokeDasharray} 
                        strokeDashoffset={strokeDashoffset} />
                </svg>
            </div>
        </div>
    );
}

export default ScrollLoading;