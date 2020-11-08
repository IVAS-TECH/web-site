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

const Lang: React.FC<{
    code: string,
    title: string
}> = ({ code, title }) => (
    <>
        <ReactCountryFlag
            countryCode={code}
            svg
            style={{
                width: '1.5em',
                height: '1.5em',
            }}
        />
        <span style={{ marginLeft: '0.5rem' }}>{title}</span>
    </>
);

const Bar: React.FC<{}> = () => {
    return (
        <Navbar appearance="inverse">
            <Navbar.Header>
                <Link href="/">
                    <b style={{
                        fontSize: '3rem',
                        paddingRight: '2rem',
                        paddingLeft: '2rem'
                    }}>
                        Ivas Tech
                    </b>
                </Link>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Dropdown title="SMT-Stencils">
                        <DropdownItem href="/smt-stencils/introduction" title="Introduction" />
                        <DropdownItem href="/smt-stencils/fiducial-marks" title="Fiducial marks" />
                        <DropdownItem href="/smt-stencils/nano-coating" title="Nano coating" />
                        <DropdownItem href="/smt-stencils/electrochemical-polishing" title="Electrochemical polishing" />
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
                    <NavItem href="/bg" title={<Lang code="BG" title="BG" />} />
                    <NavItem href="/" title={<Lang code="GB" title="EN" />} />
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

export default Bar;