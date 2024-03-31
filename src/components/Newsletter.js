import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearEmail();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.indexOf("@") > -1) {
            onValidated({ EMAIL: email });
        }
    };

    const clearEmail = () => {
        setEmail('');
    };

return (
    <Col lg={12}>
        <div className="newsletter-bx d-flex justify-content-center align-items-center flex-column"> {/* Adiciona classes para centralizar e tornar um container flexível */}
            <Row className="justify-content-center">
                <Col lg={8} md={10} xl={7} className="text-center mb-4"> {/* Adiciona classes para centralizar e ajustar o tamanho */}
                    <h3>Subscribe to our Newsletter</h3>
                    {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert variant="danger">{message}</Alert>}
                    {status === 'success' && <Alert variant="success">{message}</Alert>}
                </Col>
                <Col lg={8} md={10} xl={7} className="text-center"> {/* Adiciona classes para centralizar e ajustar o tamanho */}
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
    </Col>
);

    
};
