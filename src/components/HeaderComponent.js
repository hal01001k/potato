import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

function Header() {
    const Newnav = (props) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className={"container"}>
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggle}/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/hal01001k">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>SimpleText</NavbarText>
                        </Collapse>
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
