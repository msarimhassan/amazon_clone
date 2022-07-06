import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Icons } from '../common';
import NotificationBadge from 'react-notification-badge';
import { useSelector } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Input,Row,Col
} from 'reactstrap';
import NavRoutes from '../common/NavRoutes';
import useToken from '../hooks/useToken';

export default function MobileAppBar() {
    const { GI, AI,CG,FA } = Icons;
    let navigate = useNavigate();
    const [hide, setHide] = useState(true);
    const { token } = useToken();
    const cartCount = useSelector((state) => state.cart.cartProducts);
    const handleLogout = () => {

    };

    const handleNavigation = (route) => {
        setHide(true);
        navigate(route);
    }

    return (
        <div className='MobileBar'>
            <div className='Mobile-Nav ps-2 pe-2'>
                <GI.GiHamburgerMenu size={35} onClick={() => setHide(!hide)} />
                <img
                    src={Logo}
                    alt='amazon-logo'
                    width={150}
                    onClick={() => handleNavigation(NavRoutes.Homepage)}
                />
                {token ? (
                    <Link to={NavRoutes.CartPage}>
                        <div>
                            <NotificationBadge count={cartCount?.length} />
                            <AI.AiOutlineShoppingCart size='2em' color='white' />
                        </div>
                    </Link>
                ) : (
                    <Button color='warning' onClick={() => navigate(NavRoutes.Login)}>
                        Login
                    </Button>
                )}
            </div>

            <div hidden={hide} className='overlay'>
                <div className='d-flex justify-content-between p-3'>
                    <img
                        src={Logo}
                        alt='amazon-logo'
                        width={100}
                        onClick={() => handleNavigation(NavRoutes.Homepage)}
                    />
                    <AI.AiOutlineClose size={30} color='white' onClick={() => setHide(!hide)} />
                </div>

                <div className='overlay-menu'>
                    <div
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '60vh' }}
                    >
                        <ul>
                            {token ? (
                                <>
                                    <li onClick={() => handleNavigation()}>
                                        <AI.AiOutlineSearch /> Search
                                    </li>
                                    <li onClick={() => handleNavigation(NavRoutes.profile)}>
                                        <CG.CgProfile /> Profile
                                    </li>
                                    <li onClick={() => handleNavigation(NavRoutes.myCards)}>
                                        <AI.AiTwotoneCreditCard /> Card
                                    </li>
                                    <li onClick={() => handleNavigation(NavRoutes.address)}>
                                        <FA.FaAddressBook /> Address
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <AI.AiOutlineSearch /> Search
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

//   {
//       token ? (
//           <UncontrolledDropdown>
//               <DropdownToggle caret style={{ backgroundColor: 'transparent', border: 0 }}>
//                   <img
//                       src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
//                       className='rounded-circle shadow-4'
//                       width='50px'
//                       alt='Avatar'
//                   />
//               </DropdownToggle>
//               <DropdownMenu right>
//                   <DropdownItem onClick={() => navigate(NavRoutes.profile)}>Profile</DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem onClick={() => navigate(NavRoutes.myOrder)}>Order</DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem onClick={() => navigate(NavRoutes.myCards)}>Cards</DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem onClick={() => navigate(NavRoutes.address)}>Addresses</DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem onClick={() => handleLogout()}>Logout</DropdownItem>
//               </DropdownMenu>
//           </UncontrolledDropdown>
//       ) : (
//           <Button color='warning' onClick={() => navigate(NavRoutes.Login)}>
//               Login
//           </Button>
//       );
//   }



//  <div className='d-flex flex-row ps-5 pe-5'>
//      <Input
//          placeholder='Search'
//          onChange={(e) => handleQuery(e.target.value)}
//          className='Search-Box'
//      />
//      <button className='Search-Btn'>
//          <AI.AiOutlineSearch size='25px' />
//      </button>
//  </div>;