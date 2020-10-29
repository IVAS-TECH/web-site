import React from 'react';
import Head from 'next/head';
import { Panel, PanelGroup } from 'rsuite';
import Layout from '../components/Layout';

const FAQ = () => (
    <>
        <Head>
            <title>FAQ</title>
        </Head>
        <Layout>
            <PanelGroup accordion bordered style={{ marginTop: 70, marginLeft: 'auto', marginRight: 'auto', width: '70%' }}>
                <Panel header="Why would I need a PCB Stencil ?">
                    Stencils replace hand soldering of surface mount devices, and the inconsistencies created by hand soldering. They allow for direct placement of solder paste to the surface to be soldered. 
                </Panel>
                <Panel header="How Do I Choose My Stencil Thickness ?">
                    The stencil thickness is determined by the smallest component land pattern. If you are not sure, our design staff can choose the optimum thickness based on the data you supply.
                </Panel>
                <Panel header="What are home base apertures and why would I need them ?">
                    Home base apertures are used to control solder balling and tomb-stoning of chip components such as 0603’s and 0805’s. The shape is generated by taking a percentage of the length of the pad, and percentage of the width of the pad to create a partial triangle where the points face toward the center of the component body. The resulting shape resembles a baseball "Home base" which is where its name is derived. The most commonly utilized percentage for length and width is 50%.   
                </Panel>
                <Panel header="What are Trapezoidal Apertures and why would I need them ?">
                    Trapezoidal Apertures are created by distorting the beam on the laser, creating a draft in the aperture wall. Trapezoidal Apertures are effective if you plan on a long dwell time between printing of solder paste and placement of components. The taper in the aperture wall causes the paste to sit on top of itself, rather than sliding out the sides. The shape of the trapezoid can be seen in cross section of the stencil opening. 
                </Panel>
                <Panel header="What are fiducials? Do I need them on my PCB stencil ?">
                    Fiducials are alignment marks consisting of a 1mm circle surrounded by a 2mm clearance. If your screen printer is equipped with a vision system, fiducials half cut (into the thickness) of the stencil will allow for the printer to automatically align the board with the stencil. If you are manually aligning the stencil with the board, you could either fully cut the fiducials through the stencil or just use any surface mount pad to align the stencil.
                </Panel>
                <Panel header="Does the nano coating get into the aperture walls ?">
                    Yes, the coating will treat both the surface of the stencil, as well as the aperture walls.
                </Panel>
                <Panel header="Does the coating contaminate the flux ?">
                    No, the nano particles bond with the metal resulting in a thickness of only 2-4 nanometers. Trace elements of the coating would not be detectable in the flux with even the most sophisticated test instruments.
                </Panel>
                <Panel header="How do I know if the nano coating is there ?">
                    The coating can be tested by marking the surface of the stencil with a marker. If the ink beads up, the coating is present.
                </Panel>
            </PanelGroup>
        </Layout>
    </>
);

export default FAQ;
