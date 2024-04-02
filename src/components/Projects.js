import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projimg1 from '../assets/projeto1.png'; // Import the project image
import projimg2 from '../assets/piz.png'; // Import the project image
import projimg3 from '../assets/port.png'; // Import the project image
import {tabtwo } from './tabtwo';



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
            title: "Pizza",
            description: "Projeto em php",
            imgUrl: projimg2,
            link: "https://pi-za.vercel.app/"
        },
        {
            title: "Portfolio",
            description: "Projeto em React",
            imgUrl: projimg3,
            link: "https://fe-black.vercel.app/"

        },
    ];

    

    

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Meus Projetos</p>
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
    <Tab.Pane eventKey="second">
        <h2>Tab Two Content</h2>
        <p>Este é o conteúdo do segundo tab.</p>
    </Tab.Pane>
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
