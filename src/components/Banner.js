import React from 'react';
import ScrollLoading from './ScrollLoadingComponent/ScrollLoading';

function Banner() {
    return (
        <section className="section-banner" style={{position: 'fixed', top: '0%'}}>
            <div className="scroll_area">
                <div className="wrapper_area">
                    <div className="fixed_item"><ScrollLoading/></div>
                    <div className="ghost_section"></div>
                </div>
            </div>
        </section>
    );
}

export default Banner;