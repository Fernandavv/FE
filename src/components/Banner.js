import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importe Container, Row e Col de react-bootstrap
import headerimg from '../assets/logo.png'; // Importe a imagem do cabeçalho
import { update } from 'react-spring';
import {ArrowRightCircle} from 'react-bootstrap-icons';
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full Stack", "Full Stack", "Full Stack"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100); // Ajuste o valor do delta para uma transição mais suave
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, loopNum, isDeleting, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.8); // Reduza o delta para uma transição mais suave ao apagar caracteres
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100); // Redefina o delta para um valor mais suave ao adicionar caracteres
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center"> 
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Bem-vindo ao meu portfólio</span>
            <h1>{'Dev '}<span className='wrap'>{text}</span></h1> 
            <p>Aqui você encontrará uma amostra do meu trabalho e habilidades como programadora. Sinta-se à vontade para explorar e entrar em contato caso tenha alguma dúvida ou projeto em mente.</p>
            <button onClick={() => console.log('connect')}>Vamos Conectar <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerimg} alt='Header Img'/> 
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
