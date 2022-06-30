import React, { useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    NavbarText,
    Button,
} from 'reactstrap';
import { GrLocation, GrLogin } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import useToken from '../hooks/useToken';
import NotificationBadge from 'react-notification-badge';

import Amazonlogo from '../assets/logo.png';
import UsaFlag from '../assets/usa-flag.svg';
import FrenchFlag from '../assets/french-flag.svg';
import NavRoutes from '../common/NavRoutes';
import { useState } from 'react';
import '../styles/Header.css';
import { Icons } from '../common';

const Header = () => {
    const { AI,GI } = Icons;
    const itemCount = useSelector((state) => state.counter.itemcount);
    const cartCount = useSelector((state) => state.cart.cartProducts);
    const { Logout, token } = useToken();
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openDrop, setOpenDrop] = useState(false);
    const handleNavbar = () => {
        console.log('Toggle');
        setOpen(!open);
    };
    useEffect(() => {
        if (localStorage.getItem('i8nextLng')?.length > 2) {
            i18next.changeLanguage('en');
        }
    }, []);

    const handleLanguage = (e) => {
        i18next.changeLanguage(e.target.value);
        window.location.reload()
    };
    const handleLogout = () => {
        Logout();
        navigate(NavRoutes.Login);
    };
    const { t } = useTranslation(['Categories']);
    return (
        <div>
            <Navbar style={{ backgroundColor: '#131921', color: 'white' }} expand='lg'>
                <NavbarBrand href='/'>
                    <img src={Amazonlogo} alt='Amazon-Logo' width='150px' />
                </NavbarBrand>
                <NavbarToggler onClick={() => handleNavbar()} style={{ color: 'white' }}>
                    <GI.GiHamburgerMenu size={40} />
                </NavbarToggler>
                <Collapse isOpen={open} navbar>
                    <Nav className='m-auto' navbar>
                        {/* <NavItem>
                            <NavLink>
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    Orders
                                </Link>
                            </NavLink>
                        </NavItem> */}
                        <NavItem>
                            <div className='d-flex flex-row'>
                                <Input placeholder='Search' className='Search-Box' />
                                <button className='Search-Btn'>
                                    <AI.AiOutlineSearch size='25px' />
                                </button>
                            </div>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
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
                    </Nav>
                    <NavbarText className='me-3'>
                        {cartCount?.length}
                        <Link to={NavRoutes.CartPage}>
                            <AI.AiOutlineShoppingCart size='2em' color='white' />
                        </Link>
                    </NavbarText>
                    {token ? (
                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                style={{ backgroundColor: 'transparent', border: 0 }}
                            >
                                <img
                                    src='https://mdbcdn.b-cdn.net/img/new/avatars/1.webp'
                                    className='rounded-circle shadow-4'
                                    width='50px'
                                    alt='Avatar'
                                />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>{t('profile')}</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => navigate(NavRoutes.myOrder)}>
                                    Order
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() =>navigate(NavRoutes.myCards)}>Cards</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => handleLogout()}>Logout</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    ) : (
                        <NavbarText>
                            <Button color='warning' onClick={() => navigate(NavRoutes.Login)}>
                                Login
                            </Button>
                        </NavbarText>
                    )}
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
