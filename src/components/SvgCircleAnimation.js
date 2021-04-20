import React, {useEffect} from 'react';

var angle_increment = 6;

function SvgCircleAnimation({ start }) {
    var interval = 30;
    var angle = 0;
    
    useEffect(() => {
        window.clearInterval(window.timer);
        animate();
    }, [start])

    const animate = () => {
        var circle = document.getElementById('green-halo');

        window.timer = window.setInterval(function() {
            circle.setAttribute("stroke-dasharray", angle + ", 20000");

            if (start === 1) {
            
                if (angle >= 360) {
                    window.clearInterval(window.timer);
                }
            
                angle += angle_increment;
            
            } else {
                
                if (angle == 0) {
                    // window.clearInterval(window.timer);
                }

                angle -= angle_increment;
            }
        }.bind(this), interval);
    }

    return (
        <div className="center-circle">
            <svg style={{width:100, height:200, top:0, left:0}}>
                <circle cx="30" cy="30" r="27" id="green-halo" fill="none" stroke="#D99E94" strokeWidth="15" strokeDasharray="0,20000" transform="rotate(-90,100,100)" />
            </svg>
        </div>
    );
}

export default SvgCircleAnimation;