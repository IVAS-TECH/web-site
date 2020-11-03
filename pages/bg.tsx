import React from 'react';
import Head from 'next/head';
import { Panel, Divider } from 'rsuite';
import Layout from '../components/Layout';
import * as text from '../text/about';

const Test = () => (
    <>
        <Head>
            <title>Test</title>
        </Head>
        <Layout>
            <Panel header="SMT Stencils" shaded style={{
                width: '63rem',
                marginTop: '4rem',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
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
            <Panel header="SMT stencils through Chemical Etching" shaded style={{
                width: '50rem',
                marginTop: '4rem',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <p>
                    {text.chemicalEtching[0]}
                </p>
                <p style={{ marginTop: '2rem' }}>
                    {text.chemicalEtching[1]}
                </p>
            </Panel>
            <Panel header="SMT stencils through Electroforming" shaded style={{
                width: '41rem',
                marginTop: '4rem',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <p>
                    {text.electroformed}
                </p>
            </Panel>
            <Panel header="SMT stencils through Laser cutting" shaded style={{
                width: '50rem',
                marginTop: '4rem',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <p>
                    {text.laserCut}
                </p>
            </Panel>
            <Panel shaded header="Framed SMT stencils" style={{
                width: '58rem',
                marginTop: '4rem',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <img width="500" height="300" src="https://www.pcbelec.com/wp-content/uploads/2020/07/Framed-PCB-Stencil.png" />
                <p>
                    {text.framed[0]}
                </p>
                <p style={{ marginTop: 12 }}>
                    {text.framed[1]}
                </p>
            </Panel>
            <Panel shaded header="Frameless SMT stencils" style={{
                width: '40rem',
                marginTop: '4rem',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
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
            <Panel shaded style={{ width: '46rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '6rem' }}>
                {text.fiducials}
            </Panel>
            <Panel
                shaded
                header="Fiducial marks and Pick and place machine"
                style={{ width: '68rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '4rem' }}>
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
            <Panel shaded header="Fiducial marks and panalization" style={{ width: '54rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '4rem' }}>
                {text.fiducialsAndPanalization}
            </Panel>
            <Panel shaded header="Fiducial marks in layout desing" style={{ width: '47rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '4rem' }}>
                {text.fiducialsInLayout}
            </Panel>
            <Divider style={{ marginTop: '6rem' }}>Post processing</Divider>
            <Panel shaded header="Nano coating" style={{ width: '52rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '6rem' }}>
                Some text
            </Panel>
            <Panel shaded header="Electrochemical polishing" style={{ width: '46rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '4rem' }}>
                Some text
            </Panel>
        </Layout>
    </>
);

export default Test;