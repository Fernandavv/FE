import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/logo.png"; // Certifique-se de importar seu logo corretamente
import navicon1 from '../assets/nav-icon1.png'; // Importe a imagem do logotipo
import navicon2 from '../assets/nav-icon2.webp'; // Importe a imagem do logotipo

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navicon1}></img></a>
                            <a href=""><img src={navicon1}></img></a>
                            <a href=""><img src={navicon1}></img></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
