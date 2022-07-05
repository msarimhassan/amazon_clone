import React from 'react'
import Lottie from 'react-lottie';
import Loading from '../assets/animations/loading.json';

const Loader = () => {
       const mainDivStyles = {
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
       };
       const defaultOptions = {
           loop: true,
           autoplay: true,
           animationData: Loading,
           rendererSettings: {
               preserveAspectRatio: 'xMidYMid slice',
           },
    };
     return (
         <div style={mainDivStyles}>
             <Lottie options={defaultOptions} style={{width:'50px',height:'50px'}} />
         </div>
     );
}






export default function LoadingButton({loading,text,type}) {
  return (
      <button type={type} className={loading ? 'loading-btn2' : 'loading-btn'}>
          {loading ? <Loader /> : text}
    </button>
  )
}
