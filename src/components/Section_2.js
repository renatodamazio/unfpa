import React, {useEffect} from 'react';
import section04Image from '../images/04.jpg';
import hoverEffect from 'hover-effect';
import texture from '../images/textures/16.jpg';
import SvgCircleAnimation from './SvgCircleAnimation';

function Section_2({ progress, completeHover, completeScrollSection3 }) {    
    useEffect(() => {
        Array.from(document.querySelectorAll('.image-content-box')).forEach((e) => {
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
        <div className="picture-section-2">
            <div className="information text-left" style={{marginRight: '-120px', zIndex: 9}}>
                <h2 className={`title font-md fx ${progress === 1 ? 'reveal-text' : ''}`}>I can work to <br/>save my people.</h2><br/><br/>
                <p className={`fx ${progress === 1 ? 'reveal-text' : ''}`}>Yamah, a midwife and supervisor <br/>of a maternal health clinic</p>
            </div>
            <div className="image-content-box">
                <img src={section04Image}/>
                <img src={section04Image} style={{position: 'absolute', top: 0 }}/>
                <div className={`line-orange ${completeHover ? ' full-height' : ''}`}>
                    <SvgCircleAnimation start={completeScrollSection3}/>
                </div>
            </div>
        </div>
    );
}

export default Section_2;