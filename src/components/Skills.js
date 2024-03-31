import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/meter1.png";
import meter2 from "../assets/meter1.png";
import meter3 from "../assets/meter1.png";
import colorSharp from "../assets/color-sharp.png";
import banner2 from "../assets/banner.jpeg";
import Banner from "./Banner";

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
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                <br></br>tipográfica e de impressos, e vem sendo utilizado desde o
                século XVI
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Developer</h5>
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

