import React, {useEffect, useState} from "react";
import Mask from './mask.png';

export const MaskImg = () => {
    const [opacity, setOpacity] = useState(0);
    const [marginTop, setMarginTop] = useState();

    useEffect(() => {
            window.onscroll =()=>{
                const winheight= window.innerHeight;
                const scrollTop = window.pageYOffset;
                const trackLength = 1500 - winheight;
                const pctScrolled = Math.floor(scrollTop/trackLength * 100);

                setMarginTop((25 - pctScrolled/5)+"%");
                setOpacity(pctScrolled/100);
            }
    });

    return (
        <img className="maskImg" src={Mask} alt="" style={{opacity: opacity, marginTop: marginTop}}/>
    )
};