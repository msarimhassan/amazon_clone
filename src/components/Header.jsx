import React from 'react'
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import Amazonlogo from '../assets/logo.png';
import  {GrLocation}  from 'react-icons/gr';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {  Link } from 'react-router-dom';
const Header = () => {

    return (
        <div>
            <Navbar color='light' expand='md' light>
                <NavbarBrand href='#'>
                    <img src={Amazonlogo} alt='' width='110px' />
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
                    </Nav>
                    <NavbarText>
                        <Link to='cartpage'>
                            
                            <AiOutlineShoppingCart size='2em' />
                        </Link>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;