import React, { useEffect, useState } from 'react';

function Loading(props) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       window.onload = function() {
           setLoaded(true);
       }
    }, []);

    return (
        <div className={`progress ${loaded ? 'loaded' : ''}`}>
            <span className="loading">Loading...</span>
        </div>
    );
}

export default Loading;