import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';
import {navstyle,contain,containsm,navstylesm} from "./Attributes";

function Header() {
    const Newnav = () => {
        return (
            <div>
                <div className="d-none d-lg-block" style={ navstyle }>
                    <Navbar className="newnav" style={contain} light>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="https://github.com/hal01001k">github</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <div class="d-sm-none" style={navstylesm}>
                    <Navbar className="newnav" style={containsm} light>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="https://github.com/hal01001k">github</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
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
