import React, {useState} from 'react';
import banner1 from '../images/08.png';
import banner2 from '../images/un-team.png';
import banner3 from '../images/un-medic.jpg';

function Section_7() {   
    const showImage = (index) => {
        document.querySelector('#default').classList.add('hidden');

        hideImage();
        document.querySelector(`#img-${index}`).classList.add('image-visible')
    };

    const hideImage = () => {

        const visibleImage = document.querySelectorAll('.image-visible');
        
        if (visibleImage.length) {
            document.querySelector('#default').classList.remove('hidden');
            visibleImage[0].classList.remove('image-visible');
        }
    }

    return (
        <div>
            <div className="section-multiple-banner">
                <div className="content">
                    <span className="actions">
                        <div className="text-wrapper">
                            With support from Johnson Johnson, UNFPA is working to equip <br/> midwives with the skills they need to ensure safe birth.
                        </div>
                        <div className="buttonWrapper">
                            <div className="buttonSectionAction" >
                                <button onMouseEnter={() => { showImage(1) }} onMouseLeave={() => { hideImage() }}>
                                    equipped
                                </button>
                            </div>
                            <div className="buttonSectionAction">
                                <button onMouseEnter={() => { showImage(2) }} onMouseLeave={() => { hideImage() }}>
                                    unequipped clinic
                                </button>
                            </div>
                        </div>
                    </span>
                    <div className="image-box">    
                        <img src={banner2} id="img-1" className="figure hidden" height="536px"/>
                        <img src={banner3} id="img-2" className="figure hidden" height="536px"/>
                        <img src={banner1} id="default" className="figure" height="536px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section_7;