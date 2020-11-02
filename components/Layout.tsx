import React from 'react';
import { Container, Content, Footer, Header } from 'rsuite';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Container>
        <Header>
            <Navbar/>
        </Header>
        <Content>
            {children}
        </Content>
        <Footer style={{ marginTop: '5rem' }}>
            <span style={{ margin: '1rem' }}>
                Ivas Tech
            </span>
        </Footer>
    </Container>
);

export default Layout;