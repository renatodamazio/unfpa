import React, {useEffect} from 'react';
import banner1 from '../images/08.png';
import banner2 from '../images/04.jpg';
import hoverEffect from 'hover-effect';
import texture from '../images/textures/1.jpg';

function Section_7(props) {
    useEffect(() => {
        Array.from(document.querySelectorAll('.image-box')).forEach((e) => {
            const imgs = Array.from(e.querySelectorAll('img'));
            new hoverEffect({
                parent: e,
                intensity: 0.3,
                image1: imgs[0].getAttribute('src'),
                image2: imgs[1].getAttribute('src'),
                displacementImage: texture
            });
        });

    }, []);
    
    return (
        <div>
            <div className="section-multiple-banner">
                <div className="actions">
                    With support from Johnson Johnson, UNFPA is working to
                    equip midwives with the skills they need to ensure safe birth.

                    <span>
                        <button>equipped</button>
                        <button>unequipped clinic</button>
                    </span>
                </div>
                <div className="content">
                    <div className="image-box">    
                        <img src={banner1} className="figure"/>
                        <img src={banner2} className="figure" height="500px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section_7;