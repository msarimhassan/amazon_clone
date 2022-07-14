import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NotificationBadge from 'react-notification-badge';
import i18next from 'i18next';
import { useSelector } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';

import NavRoutes from '../common/NavRoutes';
import useToken from '../hooks/useToken';
import ChatList from '../Pages/Chat/ChatList';
import Chat from '../Pages/Chat';
import Logo from '../assets/logo.png';
import { Icons } from '../common';
import UsaFlag from '../assets/usa-flag.svg';
import FrenchFlag from '../assets/french-flag.svg';

export default function MobileAppBar() {
    const { GI, AI,CG,FA,BS } = Icons;
    let navigate = useNavigate();
    const [hide, setHide] = useState(true);
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentChat, setCurrentChat] = useState({});
    const { token, Logout } = useToken();
    const cartCount = useSelector((state) => state.cart.cartProducts);
    const handleLogout = () => {
        setHide(true);
        Logout();
        navigate(NavRoutes.Login);
    };

    const handleNavigation = (route) => {
        setHide(true);
        navigate(route);
    }
     const handleLanguage = (e) => {
         i18next.changeLanguage(e.target.value);
         window.location.reload();
    };
    const OpenChats = () => {
        setHide(true);
         setOpen(!open);
     };

    return (
        <>
            <ChatList
                open={open}
                setOpen={setOpen}
                setShowModal={setShowModal}
                showModal={showModal}
                setCurrentChat={setCurrentChat}
            />
            {!open ? (
                <Chat
                    shopId={currentChat?.shop}
                    Header='Chat'
                    conversationId={currentChat.conversation?._id}
                    open={showModal}
                    setOpen={setShowModal}
                />
            ) : null}
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
                        <div style={{ float: 'right' }}>
                            <UncontrolledDropdown>
                                <DropdownToggle nav caret style={{ color: 'white' }}>
                                    {i18next.language == 'en' ? (
                                        <img src={UsaFlag} width='30px' height='25px' />
                                    ) : (
                                        <img src={FrenchFlag} width='30px' height='25px' />
                                    )}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem value='en' onClick={(e) => handleLanguage(e)}>
                                        English
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem value='fr' onClick={(e) => handleLanguage(e)}>
                                        French
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{ height: '90vh' }}
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
                                        <li onClick={() => handleNavigation(NavRoutes.myOrder)}>
                                            <AI.AiOutlineShopping /> Orders
                                        </li>
                                        <li onClick={() => OpenChats()}>
                                            <BS.BsFillChatSquareFill /> Chats
                                        </li>
                                        <li onClick={() => handleLogout()}>
                                            <AI.AiOutlineLogout /> Logout
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
        </>
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