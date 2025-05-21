import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Particle from '../Particle';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Particle />
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Ben <span className="purple"> Kimim? </span>
                        </h1>
                        <p className="home-about-body">
                            Ben Ece Nur Çevik, Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.
                            Kendimi özellikle web tasarımı ve oyun geliştirme gibi yazılım alanlarında geliştirmeye çalışıyorum. Bu süreçte çeşitli programlama dilleriyle çalıştım ve projeler ürettim.
                            <br/>
                            Bildiğim diller arasında:
                            HTML, CSS, JavaScript, Python, C#, C++ ve benzeri teknolojiler yer alıyor.
                            <br/>
                            Yeni şeyler öğrenmeyi, projeler üretmeyi ve yazılım dünyasında kendimi sürekli geliştirmeyi seviyorum.
                            <br />
                            <br />


                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>Beni Bul</h1>

                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/ece-cevik"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https:/https://www.linkedin.com/in/ece-%C3%A7evik-626484348/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/_ececevik"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;