import React from 'react';
import Head from 'next/head';
import { Panel, Row, Col, Grid } from 'rsuite';
import Layout from '../components/Layout';

const About = () => (
    <>
        <Head>
            <title>About</title>
        </Head>
        <Layout>
            <Panel header="SMT Stencils" shaded style={{
                width: 1050,
                marginTop: 60,
                marginLeft: 200
            }}>
                <img width="800" height="300" src="https://www.pcbelec.com/wp-content/uploads/2020/07/Unframe-SMT-Stencil.png" />
                <p style={{ marginTop: 20 }}>
                    The sole purpose of an SMT (Surface mount technology) stencil is to apply solder paste to a bare circuit board.
                    Each SMT stencil is a thin sheet of metal (usualy stainless steel) or other material with openings (called apertures) for each board component.
                    Once the stencil is properly aligned on top of the board, solder paste is applied over the openings (making a single pass, using a metal squeegee blade).
                    When the SMT stencil is removed from the board, solder paste will remain, ready for placement of the SMD (Surface mount device). This process, as opposed to hand soldering methods, ensures consistency, saves alot of time and allows mass production.
                    </p>
                <p style={{ marginTop: 40 }}>
                    Sheet thickness and aperture opening size control the volume of solder paste deposited on the board.
                    Too much solder paste causes solder balling, bridging, and tomb-stoning.
                    A lack of solder paste creates insufficient solder joints.
                    All of which compromise the electrical functionality of the board.
                    This is why it is recomended to use SMT stencils during PCB assembly.
                    </p>
                <p style={{ marginTop: 40 }}>
                    SMT stencils are made of robust materials and can be manufactured in three different ways.
                    </p>
                <p style={{ marginTop: 40 }}>
                    There are two types of SMT stencils based on their usage - Framed SMT stencil and Frameless STM stencils.
                    </p>
            </Panel>
            <Panel header="SMT stencils through Chemical Etching" shaded style={{
                width: 750,
                marginTop: 60,
                marginLeft: 300
            }}>
                <p>
                    As the name suggests the apertures are made through chemical etching.
                    Chemical etched SMT stencil cost less but are also with the lowest quality.
                    </p>
                <p style={{ marginTop: 30 }}>
                    The only time you should opt for etched stencils is when a multi-level is required and even then the apertures are laser cut.
                    The etch process for apertures is restrictive in that the minimum size achievable is around 3/2 times the sheet thickness.
                    This is not a problem with a laser cut stencil.
                    </p>
            </Panel>
            <Panel header="SMT stencils through Electroforming" shaded style={{
                width: 750,
                marginTop: 60,
                marginLeft: 350
            }}>
                <p>
                    Electroformed SMT stencils are usualy with the highest quality but their cost is also highest and take longer time to produce.
                    </p>
            </Panel>
            <Panel header="SMT stencils through Laser cutting" shaded style={{
                width: 750,
                marginTop: 60,
                marginLeft: 400
            }}>
                <p>
                    Apertures are created using laser machine.
                    Laser cutting produces accurate results and takes less time for manufacturing.
                    This is why laser cutting is the prefered technology for producing SMT stencils.
                    In fact over 90% of SMT stencils around the word are made through laser cutting.
                    </p>
            </Panel>
            <Grid fluid style={{
                marginLeft: 100,
                marginRight: 100,
                marginTop: 80
            }}>
                <Row gutter={80}>
                    <Col sm={12}>
                        <Panel shaded header="Framed SMT stencils">
                            <img width="500" height="300" src="https://www.pcbelec.com/wp-content/uploads/2020/07/Framed-PCB-Stencil.png" />
                            <p>
                                These type of stencils are permanently fixed on a frame.
                                They receive the necessary tension from border mesh.
                                Framed stencils are used in large volume PCB production runs.
                                Framed stencils feature smooth aperture walls, and they assure excellent print performance.
                                </p>
                        </Panel>
                    </Col>
                    <Col sm={12}>
                        <Panel shaded header="Frameless SMT stencils">
                            <img width="300" height="300" style={{ marginLeft: 120 }} src="https://www.pcbunlimited.com/spree/products/25/product/stainless_steel_smt_stencil.jpg?1526575336" />
                            <p>
                                Against framed stencils, these stencils are not permanently mounted to any frame.
                                These stencils are comparatively affordable than framed stencils and are recommended for short runs or prototype runs.
                                </p>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Layout>
    </>
);

export default About;