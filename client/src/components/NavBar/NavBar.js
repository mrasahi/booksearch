import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavBar = () => {
    return (
        <>
            <Navbar color="dark" dark expand="md">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/saved/">Saved</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar