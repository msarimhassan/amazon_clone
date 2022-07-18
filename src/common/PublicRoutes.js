import NavRoutes from './NavRoutes';
import HomePage from '../Pages/Home';
import ProductPage from '../Pages/ProductPage';
import CartPage from '../Pages/Cart';
import ProductDetail from '../Pages/ProductsDetails';
import NotFound from '../components/NotFound';
export const PublicRoutes = [
 
    {
        link: NavRoutes.Homepage,
        element: <HomePage />,
    },
    {
        link: NavRoutes.ProductPage,
        element: <ProductPage />,
    },
    {
        link: NavRoutes.CartPage,
        element: <CartPage />,
    },
    {
        link:NavRoutes.ProductDetail,
        element:<ProductDetail/>

    },
    {
        link:NavRoutes.NotFound,
        element:<NotFound/>
    }
];
