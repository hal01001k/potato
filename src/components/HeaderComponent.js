import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {navstyle} from "./Attributes";
import Sidebar from "./sidebar";
function Header() {
    const Newnav = () => {
        return (
            <div>
                <Navbar className="newnav" style={navstyle} light>
                    <div>
                        <Nav>
                            <NavItem className="mr-auto">
                                <NavLink href="https://github.com/hal01001k">github</NavLink>
                            </NavItem>
                            <NavItem className="navbar-nav ml-auto">
                                <Sidebar/>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
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
