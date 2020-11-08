import React from 'react';
import Head from 'next/head';
import { Panel, Divider } from 'rsuite';
import Layout from '../components/Layout';
import NavLink from '../components/Link';

const Home = () => (
    <>
        <Head>
            <title>Ivas Tech</title>
        </Head>
        <Layout>
            <div style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '60%'
            }} >
            <Divider style={{ marginTop: '6rem' }} />
                <img
                    width="600"
                    height="200"
                    src="https://cdn-media.itead.cc/media/wysiwyg/PCB/SMTStencil_banner.jpg"
                    style={{ marginTop: '1rem' }}    
                />
                <p style={{ marginTop: '4rem' }}>
                    <b>Ivas Tech</b> manifactures SMT stencils and produces thin and precise metal elements such as buisness cards.
                </p>
                <Divider />
            </div>
        </Layout>
    </>
);

export default Home;