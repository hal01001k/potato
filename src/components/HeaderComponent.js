import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';
// import { Navbar, Nav,NavbarBrand,Form} from 'react-bootstrap';
import Sidebar from "./sidebar";
import {navstyle} from "./Attributes";

function Header() {
    const Newnav = () => {
        return (
            <div>
                <Navbar className="newnav" style={ navstyle } light>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="https://github.com/hal01001k">github</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                {/*<Navbar  >*/}
                {/*    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                {/*    <Form inline>*/}
                {/*        <Sidebar />*/}
                {/*    </Form>*/}
                {/*</Navbar>*/}

            </div>
        );
    }
    return (
        <div>
            <Newnav/>
        </div>
    )
}

export default Header;
