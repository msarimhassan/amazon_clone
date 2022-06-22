import React from 'react';
import Lottie from 'react-lottie'
import circleloader from './circleloader.json';

export default function Loader() {
    const mainDivStyles = {
        opacity: 0.6,
        height: '90vh',
        display: 'flex',
        zIndex: 9999999,
        justifyContent: 'center',
        alignItems: 'center',
    };
     const defaultOptions = {
         loop: true,
         autoplay: true,
         animationData: circleloader,
         rendererSettings: {
             preserveAspectRatio: 'xMidYMid slice',
         },
     };
    return (
        <div style={mainDivStyles}>
           <Lottie options={defaultOptions} style={{height:'200px', width:'200px'}}/>
        </div>
    );
}
