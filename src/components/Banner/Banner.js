import React, { useEffect, useState } from 'react';
import './Banner_styles.scss';
import ScrollLoading from '../ScrollLoadingComponent/ScrollLoading';
import 'particles.js';
// import particlesJS from 'particles.js';
import iconJJ from '../../images/a_icon_jnj_white.png';
import mouse from '../../images/mouse.png';

const particlesJS = window.particlesJS;

function Banner({ setnextStep, nextStep }) {
    const [bannerIndex, setbannerIndex] = useState(0);
    const [zindexBanner1, setzindexBanner1] = useState(1);
    const [zindexBanner2, setzindexBanner2] = useState(0);
    const [parcent, getpercent] = useState(0);

    const particleEffect = () => {
        particlesJS.load('particles-js', '/assets/particles.json', function() {
            console.log('callback - particles-js config loaded');
        });
    }

    useEffect(() => {
        particleEffect();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (bannerIndex == 0) {
                setzindexBanner1(1);
                setzindexBanner2(0);
            } else {
                setzindexBanner1(0);
                setzindexBanner2(1);
            };            
        }, 1000);
    }, [bannerIndex]);

    return (
        <div className="banners">
           {    
                !nextStep ? (  
                    <section className={`page-view section-banner ${bannerIndex == 1 ? 'hide' : ''}`} style={{top: '0%', zIndex: zindexBanner1 }}>
                        <div className="page-view">

                            <div className="wrapper_area">

                                <div id="particles-js"></div>

                                <div className="fixed_item">
                                    <h2 className="align-center text-white title">
                                        Every 2 minutes, a woman dies giving birth

                                       <div className="mouse-icon">
                                           <span className="w-full"><img src={mouse} width="20" height="30" /></span>
                                           <p style={{opacity: 0.4}}>scroll down</p>
                                        </div> 
                                    </h2>

                                    <ScrollLoading getpercent={getpercent} setbannerIndex={setbannerIndex}/>
                                </div>
                                <div className="ghost_section"></div>
                            </div>
                        </div>

                        <div className="bannerFooter flex text-center w-full justify-center items-center">
                            <span className="text-transparent ">safe birth even here ® 2018 . Privacy Policy and Terms of Use . Sponsored by </span> 
                            &nbsp;&nbsp;<img src={iconJJ} />
                        </div>
                    </section>
                ) : ''
            }
            <section className={`page-view section-banner-2  ${bannerIndex == 0 && !nextStep ? 'hide' : ''}`} style={{top: '0%', zIndex: zindexBanner2 }}>
                <div className="align-center text-lg text-white w-full text-center">    
                    <h2 className="title">
                        That’s 830 women every day.
                    </h2>
                </div>
                <div className="button-content">
                    <a href="#!" className="next-step-button link" onClick={() => { setnextStep(true) }}>Next</a>
                </div>
            </section>
        </div>
    );
}

export default Banner;