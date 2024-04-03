import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, we are <span className="purple">English Speakers Club </span>
            from <span className="purple"> USTHB, Algiers</span>
            <br />
            we are a student club
            <br />
            we teach peopl english
            <br />
            <br />
            while having fun!
          </p>
          <ul>
            <li className="about-activity">
              we have Discussion groups
            </li>
            <li className="about-activity">
              We have ESC nights
            </li>
            <li className="about-activity">
             and step & Talk
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "CPSRX"{" "}
          </p>
          <footer className="blockquote-footer">Ikram HR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
