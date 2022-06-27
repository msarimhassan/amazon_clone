import React,{useEffect} from 'react'
import {Button,Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import { GrLocation,GrLogin } from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import useToken from '../hooks/useToken';

import Amazonlogo from '../assets/logo.png';
import NavRoutes from '../common/NavRoutes';

const Header = () => {

     const itemCount=useSelector(state=>state.counter.itemcount);
    const cartCount = useSelector((state) => state.cart.cartProducts);
    const { Logout,token } = useToken();
    let navigate = useNavigate();
      
useEffect(()=>{
    if(localStorage.getItem('i8nextLng')?.length>2){
         i18next.changeLanguage('en');

    }
},[])

const handleLanguage=(e)=>{
   i18next.changeLanguage(e.target.value);
    }
    const handleLogout = () => {
        console.log('Logout')
        Logout();
        navigate(NavRoutes.Login);

    }
      
    return (
        <div>
            <Navbar color='light' expand='md' light>
                <NavbarBrand href='#'>
                    <Link to='/'>
                        <img src={Amazonlogo} alt='' width='110px' />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() {}} />
                <Collapse navbar>
                    <Nav className='me-auto' navbar>
                        <NavItem>
                            <NavLink href='#'>
                                Deliver to Pakistan <GrLocation />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#'>GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle caret nav>
                                Account and List
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Profile</DropdownItem>
                                <DropdownItem>Account</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Logout</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/* For languages */}
                        <select name='languages' id='languages' onChange={handleLanguage}>
                            Languages
                            <option value='en'>English</option>
                            <option value='fr'>French</option>
                        </select>
                    </Nav>
                    <NavbarText>
                        {token ? <button onClick={()=>handleLogout()}>
                            <GrLogin />
                            Logout
                            </button>
                         : <Link to={NavRoutes.Login} style={{ textDecoration: 'none' }}>
                            <GrLogin />
                            Login
                        </Link>}
                        
                        <Link to='cartpage'>
                            <AiOutlineShoppingCart size='2em' />
                            {cartCount.length}
                        </Link>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;