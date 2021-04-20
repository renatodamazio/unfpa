import React from 'react';
import iconLiberia from '../images/a_icon_liberia.png';
function Section_1({ progress }) {
    return (
        <>
            <div className="text-center">
                <div className={`align-center text-white text-center`}>
                    <img src={iconLiberia} className={`fx ${progress ? 'animate' : ''}`} style={{display: 'inline-block'}}/>
                    <h2 className={`fx ${progress ? 'animate' : ''} title font-xl fx`}>Libéria</h2>

                </div>
            </div>
            <a className="button-next-section"><span className="line-arrow"></span><i className="arrow down"></i></a>

        </>
    );
}

export default Section_1;