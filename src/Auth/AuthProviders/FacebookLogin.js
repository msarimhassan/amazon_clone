// const LoginFacebook = ({ responseFacebook }) => {
//     const handleClick=()=>{
//         console.log('clicked');
//     };
//     return (<div>Sarim</div>)
// };

// export default LoginFacebook;
import React from 'react';
import FacebookLogin from 'react-facebook-login';

const appId = '4661616267408716';
export default function Facebooklogin({ responseFacebook,componentClicked }) {
    return (
        <FacebookLogin
            appId='1088597931155576'
            autoLoad={true}
            fields='name,email,picture'
            onClick={componentClicked}
            callback={responseFacebook}
            cssClass='my-facebook-button-class'
            icon='fa-facebook'
        />
    );
}
