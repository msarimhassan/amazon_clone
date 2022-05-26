import { GoogleLogin } from 'react-google-login';

const client = '602962461138-h83tgckucrbsbh5m4q7e9d1doh3hrq50.apps.googleusercontent.com';

const client_secret = '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';

const Login = ({responseGoogle}) => {
    return (
        <GoogleLogin
            clientId={client}
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default Login;
