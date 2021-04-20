import React, { useState } from 'react';
import PlayButton from '../images/a_btn_play.png';

function Section_6() {
    const [show, setShow] = useState(false);

    return (
        <div className="video-area">
            <div className="cover-video" onClick={() => setShow('show-video-slider')}>
                <iframe className={`video ${show}`}   src={`https://www.youtube.com/embed/weBxTC2NKC8${show ? '?autoplay=1' : ''}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                <img src={PlayButton} />
            </div>
        </div>
    );
}

export default Section_6;