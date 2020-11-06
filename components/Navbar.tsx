import React from 'react';
import { Nav, Navbar, Dropdown, Divider } from 'rsuite';
import NavLink from './Link';
import Link from './Link';
import { useRouter } from 'next/router';
import ReactCountryFlag from 'react-country-flag';

const NavItem: React.FC<{
    href: string,
    title: React.ReactNode
}> = ({ href, title }) => {
    const ruter = useRouter();
    return (
        <Nav.Item
            componentClass={NavLink}
            href={href}
            active={!!ruter.pathname.match(href)}
            >
            {title}
        </Nav.Item>
    );
};

const DropdownItem: React.FC<{
    href: string,
    title: string
}> = ({ href, title }) => {
    const ruter = useRouter();
    return (
        <Dropdown.Item
            componentClass={NavLink}
            href={href}
            >
            {title}
        </Dropdown.Item>
    );
};


const Bar: React.FC<{}> = () => {
    return (
        <Navbar appearance="inverse">
            <Navbar.Header>
                <Link href="/">
                    <h1 style={{
                        paddingTop: '0.7rem',
                        paddingRight: '6rem',
                        paddingLeft: '2rem'
                    }}>
                        Ivas Tech
                    </h1>
                </Link>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Dropdown title="About">
                        <DropdownItem href="/about/smt-stencils" title="SMT Stencils" />
                        <DropdownItem href="/about/fiducial-marks" title="Fiducial marks" />
                        <DropdownItem href="/about/nano-coating" title="Nano coating" />
                        <DropdownItem href="/about/electrochemical-polishing" title="Electrochemical polishing" />
                    </Dropdown>
                    <Dropdown title="We offer">
                        <DropdownItem href="/we-offer/smt-stencils" title="SMT Stencils" />
                        <DropdownItem href="/we-offer/thin-precise-metal-elements" title="Thin precise metal elements" />
                    </Dropdown>
                    <NavItem href="/equipment" title="Equipment" />
                    <NavItem href="/contact" title="Contact us" />
                    <Nav.Item componentClass={'a'} href="https://example.com">Order</Nav.Item>
                    <NavItem href="/faq" title="FAQ" />
                    <NavItem href="/blog" title="Blog" />
                </Nav>
                <Nav pullRight>
                    <NavItem href="/bg" title={
                        <>
                            <ReactCountryFlag
                                countryCode="BG"
                                svg
                                style={{
                                    width: '1.5em',
                                    height: '1.5em',
                                }}
                            />
                            <span style={{ marginLeft: '0.5rem' }}>BG</span>
                        </>
                    }/>
                    <NavItem href="/" title={
                        <>
                            <ReactCountryFlag
                                countryCode="EU"
                                svg
                                style={{
                                    width: '1.5em',
                                    height: '1.5em',
                                }}
                            />
                            <span style={{ marginLeft: '0.5rem' }}>EN</span>
                        </>
                    }/>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

export default Bar;