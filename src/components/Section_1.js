import React from 'react';
import iconLiberia from '../images/a_icon_liberia.png';

function Section_1() {
    return (
        <>
            <div className="text-center">
                <div className="align-center text-white text-center">
                    <img src={iconLiberia} style={{display: 'inline-block'}}/>
                    <h2 className="title font-xl">Libéria</h2>

                </div>
            </div>
            <a className="button-next-section"><span className="line-arrow"></span><i className="arrow down"></i></a>

        </>
    );
}

export default Section_1;