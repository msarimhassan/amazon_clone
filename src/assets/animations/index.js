import React from 'react';
import Lottie from 'react-lottie'
import amazonloader from './amazonloader.json';

export default function Loader() {
    const mainDivStyles = {
        
        height: '90vh',
        display: 'flex',
        zIndex: 9999999,
        justifyContent: 'center',
        alignItems: 'center',
    };
     const defaultOptions = {
         loop: true,
         autoplay: true,
         animationData: amazonloader,
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

// opacity: 0.6,