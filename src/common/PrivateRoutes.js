import Order from '../Pages/Order';
import NavRoutes from './NavRoutes';
import ConfirmOrder from '../Pages/Order/ConfirmOrder';

export const PrivateRoutes=[
    {
        link:NavRoutes.Order,
        element:<Order/>
    },
    {
        link: NavRoutes.confirmOrder,
        element:<ConfirmOrder/>
    }
]