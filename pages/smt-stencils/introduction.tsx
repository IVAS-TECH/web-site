import React from 'react';
import Head from 'next/head';
import { Panel, Divider } from 'rsuite';
import Layout from '../../components/Layout';
import * as text from '../../text/introduction';

const Intro = () => (
    <>
        <Head>
            <title>SMT-Stencils</title>
        </Head>
        <Layout>
            <main className="ivas-standart-layout">
                <Divider className="ivas-gap-from-navbar" />
                <Panel header={text.header[0]}>
                    <img width="800" height="300" src="https://www.pcbelec.com/wp-content/uploads/2020/07/Unframe-SMT-Stencil.png" />
                    <p style={{ marginTop: '2rem' }}>
                        {text.smtStencils[0]}
                    </p>
                    <p style={{ marginTop: '2rem' }}>
                        {text.smtStencils[1]}
                    </p>
                    <p style={{ marginTop: '2rem' }}>
                        {text.smtStencils[2]}
                    </p>
                    <p style={{ marginTop: '2rem' }}>
                        {text.smtStencils[3]}
                    </p>
                    <ul style={{ marginTop: '1rem' }}>
                        <li>{text.technology[0]}</li>
                        <li>{text.technology[1]}</li>
                        <li>{text.technology[2]}</li>
                    </ul>
                    <p style={{ marginTop: '2rem' }}>
                        {text.smtStencils[4]}
                    </p>
                </Panel>
                <Panel header={text.header[1]} style={{ marginTop: '1rem' }}>
                    <p>
                        {text.chemicalEtching[0]}
                    </p>
                    <p style={{ marginTop: '2rem' }}>
                        {text.chemicalEtching[1]}
                    </p>
                </Panel>
                <Panel header={text.header[2]} style={{ marginTop: '1rem' }}>
                    <p>
                        {text.electroformed}
                    </p>
                </Panel>
                <Panel header={text.header[3]} style={{ marginTop: '1rem' }}>
                    <p>
                        {text.laserCut}
                    </p>
                </Panel>
                <Panel header={text.header[4]} style={{ marginTop: '2rem' }}>
                    <img width="500" height="300" src="https://www.pcbelec.com/wp-content/uploads/2020/07/Framed-PCB-Stencil.png" />
                    <p style={{ marginTop: '1rem' }}>
                        {text.framed[0]}
                    </p>
                    <p style={{ marginTop: 12 }}>
                        {text.framed[1]}
                    </p>
                </Panel>
                <Panel header={text.header[5]} style={{ marginTop: '2rem' }}>
                    <img width="300" height="300" style={{ marginLeft: 120 }} src="https://www.pcbunlimited.com/spree/products/25/product/stainless_steel_smt_stencil.jpg?1526575336" />
                    <p style={{ marginTop: '1rem' }}>
                        {text.frameless[0]}
                    </p>
                    <ul style={{ marginTop: '1rem' }}>
                        <li>{text.frameless[1]}</li>
                        <li>{text.frameless[2]}</li>
                    </ul>
                </Panel>
                <Divider style={{ marginTop: '2rem' }} />
            </main>
        </Layout>
    </>
);

export default Intro;