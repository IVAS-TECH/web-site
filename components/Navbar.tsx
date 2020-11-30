import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Dropdown, Icon, IconButton } from 'rsuite';
import NavLink from './Link';
import Link from './Link';
import { useRouter } from 'next/router';
import ReactCountryFlag from 'react-country-flag';
import { useWindowWidth } from '@react-hook/window-size/throttled';

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

const NavBar = () => (
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
);

const Menu = () => (
    <Dropdown
        renderTitle={() => (
            <IconButton appearance="subtle" size="lg" style={{ width: '3.2rem', height: '3.2rem', marginTop: '0.3rem' }} icon={(
                <Icon icon="bars" style={{ width: '3.1rem', height: '3.1rem', fontSize: '2.4rem', paddingTop: '0.01rem' }} />
            )} />
        )}>
        <Dropdown.Menu title="SMT-Stencils">
            <DropdownItem href="/smt-stencils/introduction" title="Introduction" />
            <DropdownItem href="/smt-stencils/fiducial-marks" title="Fiducial marks" />
            <DropdownItem href="/smt-stencils/nano-coating" title="Nano coating" />
            <DropdownItem href="/smt-stencils/electrochemical-polishing" title="Electrochemical polishing" />
        </Dropdown.Menu>
        <Dropdown.Menu title="We offer">
            <DropdownItem href="/we-offer/smt-stencils" title="SMT Stencils" />
            <DropdownItem href="/we-offer/thin-precise-metal-elements" title="Thin precise metal elements" />
        </Dropdown.Menu>
        <DropdownItem href="/equipment" title="Equipment" />
        <DropdownItem href="/contact" title="Contact us" />
        <Dropdown.Item componentClass={'a'} href="https://example.com">Order</Dropdown.Item>
        <DropdownItem href="/faq" title="FAQ" />
        <DropdownItem href="/blog" title="Blog" />
    </Dropdown>
);

const Navigation: React.FC<{}> = () => {
    const width = useWindowWidth({
        fps: 40,
        leading: true
    });
    console.log(width);
    const isLargeEnough = width >= 1150;
    return isLargeEnough ? <NavBar/> : <Menu />;
}

const Bar: React.FC<{}> = () => {
    const [isBrowser, setBrowser] = useState(false);
    useEffect(() => setBrowser(true), []);
    return (
        <Navbar appearance="inverse">
            <Navbar.Header style={{ marginLeft: '2%', marginRight: '3%' }}>
                <Link href="/">
                    <b style={{ fontSize: '3rem' }}>
                        Ivas Tech
                    </b>
                </Link>
            </Navbar.Header>
            <Navbar.Body>
                {isBrowser ? <Navigation /> : <NavBar />}
                <Nav pullRight>
                    <NavItem href="/bg" title={<Lang code="BG" title="BG" />} />
                    <NavItem href="/" title={<Lang code="GB" title="EN" />} />
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

export default Bar;