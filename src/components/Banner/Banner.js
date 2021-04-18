import React, { useEffect, useState } from 'react';
import './Banner_styles.scss';
import ScrollLoading from '../ScrollLoadingComponent/ScrollLoading';
import iconJJ from '../../images/a_icon_jnj_white.png';

function Banner({ setnextStep, nextStep }) {
    const [bannerIndex, setbannerIndex] = useState(0);
    const [zindexBanner1, setzindexBanner1] = useState(1);
    const [zindexBanner2, setzindexBanner2] = useState(0);
    const [parcent, getpercent] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (bannerIndex == 0) {
                setzindexBanner1(1);
                setzindexBanner2(0);
            } else {
                setzindexBanner1(0);
                setzindexBanner2(1);
            }
        }, 1000);
    }, [bannerIndex])

    return (
        <div className="banners">
           {    
                !nextStep ? (  
                    <section className={`page-view section-banner ${bannerIndex == 1 ? 'hide' : ''}`} style={{top: '0%', zIndex: zindexBanner1 }}>
                        <div className="page-view">

                            <div className="wrapper_area">

                                <div className="fixed_item">
                                    <h2 className="align-center text-white title">
                                        Every 2 minutes, a woman dies giving birth
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
               {bannerIndex}
               <a href="#!" onClick={() => { setnextStep(true) }}>Next</a>
            </section>
        </div>
    );
}

export default Banner;