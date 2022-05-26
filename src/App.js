import { Suspense } from 'react';
import HomePage from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';
import ProductDetail from './Pages/ProductDetail';
import CartPage from './Pages/CartPage';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import NavRoutes from './common/NavRoutes';
import Header from './components/Header';

const App = () => {
    return (
        <Suspense fallback={null}>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path={NavRoutes.ProductPage} element={<ProductPage />} />
                    <Route path={NavRoutes.CartPage} element={<CartPage />} />
                    <Route path={NavRoutes.ProductDetail} element={<ProductDetail />} />
                    <Route path={NavRoutes.Login} element={<Login />} />
                    <Route path={NavRoutes.Signup} element={<Signup />} />
                </Routes>
            </Router>
        </Suspense>
    );
};

export default App;
