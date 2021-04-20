import React, { useEffect } from 'react';
import section05Image from '../images/06.jpg';
import next from '../images/next.png';

function Section_5() {
    useEffect(() => {
            const mouseFollow = document.getElementById('mouse-follow');

            if (mouseFollow) {
                document.querySelector('#carousel').addEventListener('mousemove', (e) => {
                    mouseFollow.style.cssText = `
                        left: ${e.layerX - 25}px;
                        top:  ${e.layerY - 25}px;
                    `;
                });
            }
    }, []);

    return (
        <div  className="picture-section">

            <div id="carousel" className="image-content">
                
                <div id="mouse-follow">
                    <img src={next}/>
                    <span style={{padding: 10}}>Next image</span>
                </div>

                <img src={section05Image}/>
            </div>
        </div>
    );
}

export default Section_5;