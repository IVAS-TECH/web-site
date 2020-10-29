import React from 'react';
import Head from 'next/head';
import { Panel, Button, Nav} from 'rsuite';
import Layout from '../components/Layout';
import NavLink from '../components/Link';

const Home = () => (
    <>
        <Head>
            <title>Ivas Tech</title>
        </Head>
        <Layout>
            <Panel shaded style={{
                width: 640,
                marginTop: 60,
                marginLeft: 400
            }}>
                <img width="600" height="200" src="https://cdn-media.itead.cc/media/wysiwyg/PCB/SMTStencil_banner.jpg" />
                <p style={{ marginTop: 20 }}>
                    <b>Ivas Tech</b> manifactures SMT stencils and produces thin metal elements such as buisness cards.
                </p>
            </Panel>
            <Panel shaded style={{
                width: 700,
                marginTop: 60,
                marginLeft: 500
            }}>
                You can read more about SMT stencils, types of SMT stencils, fiducial marks,
                nano coating and electrochemical polishing at the <NavLink href="/about">About page</NavLink>.
            </Panel>
            <Panel shaded style={{
                width: 860,
                marginTop: 50,
                marginLeft: 450
            }}>
                At the <NavLink href="/we-offer">We offer page</NavLink> you can find all the details about what <NavLink href="/we-offer">SMT stencils we can manifacture</NavLink> and find information about <NavLink href="/we-offer/other">our capbilities for producing thin metal elements</NavLink>.
            </Panel>
            <Panel shaded style={{
                width: 800,
                marginTop: 60,
                marginLeft: 370
            }}>
                As the name suggests at the <NavLink href="/equipment">Equipment page</NavLink> you can find all about our equipment.
            </Panel>
            <Panel shaded style={{
                width: 1000,
                marginTop: 70,
                marginLeft: 250
            }}>
                By visiting <a>Order</a> you will be redirected to our WEB application for ordering SMT stencils.
                If you want us to produce thin metal elements for you or have any questions please <NavLink href="/contact">Contact us</NavLink>.
                We also have a <NavLink href="/faq">FAQ</NavLink> page where you can find answers to frequantly asked questions.
                
            </Panel>
            <Panel shaded style={{
                width: 600,
                marginTop: 60,
                marginLeft: 300
            }}>
                In our <NavLink href="/blog">Blog</NavLink> we post information about SMT stencils, companies wich trust us, news about our company and more.
            </Panel>
        </Layout>
    </>
);

export default Home;