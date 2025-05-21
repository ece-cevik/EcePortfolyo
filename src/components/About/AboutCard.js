import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Şu anda 2. sınıf Bilgisayar Mühendisliği öğrencisiyim. 2 yıl içerisinde çeşitli proje takımlarında yazılım ekibinde görev aldım.
            <br/>
            <br/>
            Bu siteyi incelemeden önce
            kemerlerinizi bağlayın ve dikkat edin, bir sonraki hack'im siz olabilirsiniz!
          </p>

          <p style={{ color: "rgb(83,122,209)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
