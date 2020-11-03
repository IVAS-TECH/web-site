import React from 'react';
import Head from 'next/head';
import { Panel, Divider } from 'rsuite';
import Layout from '../components/Layout';
import * as text from '../text/about';

const Test: React.FC<{ panel: 'clean' | 'bordered' | 'shaded' }> = ({ panel }) => {
    const isBordered = panel === 'bordered';
    const isShaded = panel === 'shaded';
    return (
        <>
            <Head>
                <title>Test Page</title>
            </Head>
            <Layout>
                <div style={{
                    width: '60%',
                    marginTop: '4rem',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <Panel header="SMT Stencils" shaded={isShaded} bordered={isBordered}>
                        <img width="800" height="300" src="https://www.pcbelec.com/wp-content/uploads/2020/07/Unframe-SMT-Stencil.png" />
                        <p style={{ marginTop: '1rem' }}>
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
                        <p style={{ marginTop: '2rem' }}>
                            {text.smtStencils[4]}
                        </p>
                    </Panel>
                    <Panel header="SMT stencils through Chemical Etching" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem' }}>
                        <p>
                            {text.chemicalEtching[0]}
                        </p>
                        <p style={{ marginTop: '2rem' }}>
                            {text.chemicalEtching[1]}
                        </p>
                    </Panel>
                    <Panel header="SMT stencils through Electroforming" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem' }}>
                        <p>
                            {text.electroformed}
                        </p>
                    </Panel>
                    <Panel header="SMT stencils through Laser cutting" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem' }}>
                        <p>
                            {text.laserCut}
                        </p>
                    </Panel>
                    <Panel header="Framed SMT stencils" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem' }}>
                        <img width="500" height="300" src="https://www.pcbelec.com/wp-content/uploads/2020/07/Framed-PCB-Stencil.png" />
                        <p>
                            {text.framed[0]}
                        </p>
                        <p style={{ marginTop: 12 }}>
                            {text.framed[1]}
                        </p>
                    </Panel>
                    <Panel header="Frameless SMT stencils" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem' }}>
                        <img width="300" height="300" style={{ marginLeft: 120 }} src="https://www.pcbunlimited.com/spree/products/25/product/stainless_steel_smt_stencil.jpg?1526575336" />
                        <p>
                            {text.frameless[0]}
                        </p>
                        <ul>
                            <li>{text.frameless[1]}</li>
                            <li>{text.frameless[2]}</li>
                        </ul>
                    </Panel>
                    <Divider style={{ marginTop: '6rem' }}>Fiducial marks</Divider>
                    <Panel shaded={isShaded} bordered={isBordered} style={{ marginTop: '6rem'}}>
                        {text.fiducials}
                    </Panel>
                    <Panel
                        header="Fiducial marks and Pick and place machine"
                        shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem'}}>
                        <p>
                            {text.fiducialsAndPickAndPlace[0]}
                        </p>
                        <p style={{ marginTop: '2rem' }}>
                            {text.fiducialsAndPickAndPlace[1]}
                        </p>
                        <p style={{ marginTop: '1.5rem' }}>
                            {text.fiducialsAndPickAndPlace[2]}
                        </p>
                    </Panel>
                    <Panel header="Fiducial marks and panalization" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem'}}>
                        {text.fiducialsAndPanalization}
                    </Panel>
                    <Panel header="Fiducial marks in layout desing" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem'}}>
                        {text.fiducialsInLayout}
                    </Panel>
                    <Divider style={{ marginTop: '6rem' }}>Post processing</Divider>
                    <Panel header="Nano coating" shaded={isShaded} bordered={isBordered} style={{ marginTop: '6rem'}}>
                        Some text
                </Panel>
                    <Panel header="Electrochemical polishing" shaded={isShaded} bordered={isBordered} style={{ marginTop: '4rem'}}>
                        Some text
                </Panel>
                </div>
            </Layout>
        </>
    );
};

export default Test;