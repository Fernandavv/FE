import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projimg1 from '../assets/projeto1.png'; // Import the project image

import colorSharp2 from "../assets/azul.jpg";

export const Projects = () => {
    const projects = [
        {
            title: "Life Is Strange",
            description: "Landing page, projeto da faculdade",
            imgUrl: projimg1,
            link: "https://fernandavv.github.io/ls/"
        },
        {
            title: "Oruam Na Voz",
            description: "Oruam Cria",
            imgUrl: projimg1,
        },
        {
            title: "Oruam Na Voz",
            description: "Oruam Cria",
            imgUrl: projimg1,
        },
        {
            title: "Oruam Na Voz",
            description: "Oruam Cria",
            imgUrl: projimg1,
        },
        {
            title: "Oruam Na Voz",
            description: "Oruam Cria",
            imgUrl: projimg1,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Row>
                                <Col>
                                <Nav variant='pills' className="nav-pills mb-5 justify-content-center align-itens-center" id='pills-tab'>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Tab.Content>
                                 <Tab.Pane eventKey="first">
                              <Row>
                              {projects.map((project, index) => (
                                <ProjectCard
                                 key={index}
                                {...project}
                                           />
                                           ))}
                                        </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
