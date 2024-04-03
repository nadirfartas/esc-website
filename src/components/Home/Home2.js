import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../images/usthb-logo.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              lets add things abt esc here </h1>
            <p className="home-about-body">
              we fell in love with english.... and idk what I am saying coz I havn't slept yet
              <br />
              <br /> I wanna Take a nap !!!!!
              <i>
                <b className="purple"> IT DEP </b>
              </i>
              <br />
              <br />
              our field of Interest is building new buildings
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to connect with me, or don't I am not your parents
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
