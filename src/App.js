import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileAppBar from './components/MobileAppBar';
import { UserContext } from './Context';
import { PublicRoutes } from './common/PublicRoutes';
import { PrivateRoutes } from './common/PrivateRoutes';
import { AuthRoutes } from './common/AuthRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
    const [token, setToken] = useState();
    const [currentUser, setCurrentUser] = useState();
   

    useEffect(() => {
        const t = localStorage.getItem('AC-Token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (t) {
            setToken(t);
        }

        if (user) {
            setCurrentUser(user);
        }
    }, []);


    const RoutesList = ({ data }) => {
        return (
            <Routes>
                {data.map((obj) => {
                    return <Route path={obj.link} element={obj.element} />;
                })}
            </Routes>
        );
    };

    return (
        <Suspense fallback={null}>
            <UserContext.Provider value={{ setToken, token, currentUser, setCurrentUser }}>
                {console.log(window.location.href)}
                <Router>
                    <Header />
                    <MobileAppBar />
                    <ToastContainer />
                    <RoutesList
                        data={
                            !token
                                ? [...PublicRoutes, ...AuthRoutes]
                                : [...PublicRoutes, ...PrivateRoutes]
                        }
                    />
                </Router>
            </UserContext.Provider>
        </Suspense>
    );
};

export default App;
