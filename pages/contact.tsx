import React from 'react';
import GoogleMap from 'google-map-react';
import Head from 'next/head';
import { Grid, Row, Col, List, Panel, Button, Drawer, Input } from 'rsuite';
import Layout from '../components/Layout';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const location = {
    lat: 42.6727967,
    lng: 23.3826534
};

const LocationPin
    : React.FC<{ text: string, lat: number, lng: number }>
    = ({ text }) => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '11rem',
            color: 'red'
        }}>
            <Icon icon={locationIcon} style={{ fontSize: '3.4rem' }} />
            <b style={{ fontSize: '1.6rem' }}>{text}</b>
        </div>
    );

const Map: React.FC<{}> = () => (
    <GoogleMap
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GMAP_API_KEY as string}}
        defaultCenter={location}
        defaultZoom={17}>
        <LocationPin text="Ivas Tech" lat={location. lat} lng={location.lng} />
    </GoogleMap>
);

const MessageUs: React.FC<{}> = () => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <Button color="green" size="lg" style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem'
            }} onClick={() => setOpen(true)}>
                Message us
            </Button>
            <Drawer
                size="md"
                backdrop
                show={isOpen}
                onHide={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>Message Ivas Tech</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <Input placeholder="Name" />
                    <Input placeholder="Email address" style={{ marginTop: '1.3rem', marginBottom: '1.3rem' }} />
                    <Input componentClass="textarea" rows={12} style={{ maxHeight: 'none' }} placeholder="Message" />
                </Drawer.Body>
                <Drawer.Footer>
                    <Button size="lg" appearance="primary">
                        Send message
                    </Button>
                </Drawer.Footer>
            </Drawer>
        </>
    );
};

const Contact = () => (
    <>
        <Head>
            <title>Contact us</title>
        </Head>
        <Layout>
                <Grid fluid style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem', width: '90%' }}>
                    <Row gutter={70}>
                        <Col xs={12}>
                            <Panel header="Our contacts">
                                <List size="lg">
                                    <List.Item>
                                        <Row>
                                            <Col xs={6}>
                                                Address:
                                            </Col>
                                            <Col xs={16} xsOffset={2} >
                                                10 bul. Asen Yordanov, Sofia, Bulgaria
                                            </Col>
                                        </Row>
                                    </List.Item>
                                    <List.Item>
                                        <Row>
                                            <Col xs={6}>
                                                Email:
                                            </Col>
                                            <Col xs={16} xsOffset={2}>
                                                smtstencil@ivastech.com
                                            </Col>
                                        </Row>
                                    </List.Item>
                                    <List.Item>
                                        <Row>
                                            <Col xs={6}>
                                                Telephone:
                                            </Col>
                                            <Col xs={16} xsOffset={2}>
                                                +359 2 962 93 85
                                            </Col>
                                        </Row>
                                    </List.Item>
                                    <List.Item>
                                        <Row>
                                            <Col xs={6}>
                                                Mobile:
                                            </Col>
                                            <Col xs={16} xsOffset={2}>
                                                +359 8 99 88 12 57
                                            </Col>
                                        </Row>
                                    </List.Item>
                                    <List.Item>
                                        <Row>
                                            <Col xs={6}>
                                                Post code:
                                            </Col>
                                            <Col xs={16} xsOffset={2}>
                                                1592
                                            </Col>
                                        </Row>
                                    </List.Item>
                                </List>
                            </Panel>
                        </Col>
                        <Col xs={12}>
                            <Panel header="Ivas Tech on the map">
                                <div style={{ width: '100%', height: '30rem'}}>
                                    <Map />
                                </div>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
                <MessageUs />
        </Layout>
    </>
);

export default Contact;
