import React from 'react';
import Head from 'next/head';
import { Panel, Divider } from 'rsuite';
import Layout from '../../components/Layout';
import * as text from '../../text/fiducials';

const Fiducials = () => (
    <>
        <Head>
            <title>Fiducial marks</title>
        </Head>
        <Layout>
            <main style={{
                width: '60%',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'justify'
            }} >
                <Divider style={{ marginTop: '4rem' }} />
                <Panel header={text.header[0]} >
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
                <Panel header={text.header[1]} >
                    {text.fiducialsAndPanalization}
                </Panel>
                <Panel header={text.header[2]} >
                    {text.fiducialsInLayout}
                </Panel>
                <Divider style={{ marginTop: '2rem' }} />
            </main>
        </Layout>
    </>
);

export default Fiducials;