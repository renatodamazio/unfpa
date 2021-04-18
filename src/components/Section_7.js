import React from 'react';
import banner1 from '../images/08.png';

function Section_7(props) {
    return (
        <div>
            <div className="section-multiple-banner">
                <div className="actions">
                    With support from Johnson Johnson, UNFPA is working to
                    equip midwives with the skills they need to ensure safe birth.

                    <span>
                        <button>equipped</button>
                        <button>unequipped clinic</button>
                    </span>
                </div>
                <div className="section_7-banners">
                    <img src={banner1} className="figure"/>
                </div>
            </div>
        </div>
    );
}

export default Section_7;