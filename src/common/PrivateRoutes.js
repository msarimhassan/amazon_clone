import Order from '../Pages/Order';
import NavRoutes from './NavRoutes';
import ConfirmOrder from '../Pages/Order/ConfirmOrder';
import OrderDetails from '../Pages/OrderDetails';
import Card from '../Pages/Card';

export const PrivateRoutes=[
    {
        link:NavRoutes.Order,
        element:<Order/>
    },
    {
        link: NavRoutes.confirmOrder,
        element:<ConfirmOrder/>
    },
    {
        link: NavRoutes.myOrder,
        element:<OrderDetails/>
    }, {
        link: NavRoutes.myCards,
        element:<Card/>
        
    }
]