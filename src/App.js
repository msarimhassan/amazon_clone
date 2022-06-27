import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { UserContext } from './Context';
import { PublicRoutes } from './common/PublicRoutes';
import { PrivateRoutes } from './common/PrivateRoutes';
import { AuthRoutes } from './common/AuthRoutes';

const App = () => {
    const [token, setToken] = useState();

    useEffect(() => {
        const t = localStorage.getItem('AC-Token');
        if (t) {
            setToken(t);
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
            <UserContext.Provider value={{ setToken, token }}>
                <Router>
                    <Header />
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
