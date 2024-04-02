import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/color-sharp (3).png";
import meter2 from "../assets/color-sharp (2).png";
import meter3 from "../assets/color-sharp.png";
import meter4 from "../assets/color-sharp (1).png";


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
                </h2>
              <p>
              Como um desenvolvedor Full Stack, trago uma ampla gama de habilidades técnicas e experiência prática 
                <br></br>que me permite criar soluções robustas e escaláveis em todas as camadas de uma aplicação web. Do front-end ao back-end:
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Back-End</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="image" />
                  <h5>Java-Script</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills; // Exportar Skills como default

