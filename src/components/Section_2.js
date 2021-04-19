import React from 'react';
import section04Image from '../images/04.jpg';
function Section_2(props) {
    return (
        <div className="picture-section-2">
            <div className="information text-left" style={{marginRight: '-120px', zIndex: 9}}>
                <h2 className="title font-md">I can work to <br/>save my people.</h2><br/><br/>
                <p>Yamah, a midwife and supervisor <br/>of a maternal health clinic</p>
            </div>
            <img src={section04Image}/>
        </div>
    );
}

export default Section_2;