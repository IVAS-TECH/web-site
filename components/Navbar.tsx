import React from 'react';
import { Nav, Navbar } from 'rsuite';
import NavLink from './Link';
import Link from './Link';
import { useRouter } from 'next/router';

const NavItem: React.FC<{
    href: string,
    title: string
}> = ({ href, title }) => {
    const ruter = useRouter();
    return (
        <Nav.Item
            componentClass={NavLink}
            href={href}
            active={ruter.pathname === href}
            >
            {title}
        </Nav.Item>
    );
};

const Bar: React.FC<{}> = () => {
    return (
        <Navbar appearance="inverse">
            <Navbar.Header>
                <Link href="/">
                    <h3 style={{
                        paddingTop: 14,
                        paddingRight: 30,
                        paddingLeft: 15
                    }}>
                        Ivas Tech
                    </h3>
                </Link>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <NavItem href="/about" title="About" />
                    <NavItem href="/we-offer" title="We offer" />
                    <NavItem href="/equipment" title="Equipment" />
                    <NavItem href="/contact" title="Contact us" />
                    <Nav.Item componentClass={'a'} href="https://example.com">Order</Nav.Item>
                    <NavItem href="/faq" title="FAQ" />
                    <NavItem href="/blog" title="Blog" />
                </Nav>
                <Nav pullRight>
                    <Nav.Item>BG</Nav.Item>
                    <Nav.Item active>EN</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

export default Bar;