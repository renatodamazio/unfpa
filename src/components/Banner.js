import React from 'react';
import ScrollLoading from './ScrollLoadingComponent/ScrollLoading';

function Banner() {
    return (
        <div className="scroll_area">
            <div className="wrapper_area">
                <div className="fixed_item"><ScrollLoading/></div>
                <div className="ghost_section"></div>
            </div>
        </div>
    );
}

export default Banner;