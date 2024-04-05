import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";


function About() {
  return (
    <div className="about-section">    
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px"}}>
      <strong>About us</strong>
      </h1>
      <p style={{ fontSize: "1em" }}>
         English Speakers Club as a student club that belongs to USTHB, Algiers
      </p>
      <Aboutcard />
    </div>
  );
}

export default About;