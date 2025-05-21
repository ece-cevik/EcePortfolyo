import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import album from "../../Assets/Projects/album.png";
import kalp from "../../Assets/Projects/kalp.png";
import todo from "../../Assets/Projects/todo.png";
import film from "../../Assets/Projects/film.png";
import sayi from "../../Assets/Projects/sayi.png";
import day from "../../Assets/Projects/day.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Portfolyo
        </h1>
        <p style={{ color: "white" }}>
          Burada şimdiye kadar yaptığım projeler yer almaktadır.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              title="Dizi & Film Takip Uygulaması"
              description="Bu proje, kullanıcıların izledikleri dizi ve filmleri kolayca takip edebilmeleri için geliştirilmiş bir masaüstü uygulamasıdır.
              PyQt5 kullanılarak oluşturulan uygulama, kullanıcı dostu bir arayüzle film ve dizi bilgilerini listeleme, ekleme ve düzenleme gibi temel özellikleri sağlar.
              Ayrıca SQLite veritabanı desteğiyle verilerin kalıcı olarak saklanmasına olanak tanır."
              ghLink="https://github.com/ece-cevik/Dizi-Film-Takip-Uygulamasi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={day}
              title="Sevgililer Günü Projesi"
              description="Bu proje, Sevgililer Günü için hazırladığım küçük ve eğlenceli bir web uygulaması.
              HTML, CSS ve JavaScript kullanarak bu tasarımı yaptım.
              İçinde “Yes” ve “No” seçenekleri var ama aslında “No” demek pek mümkün değil😊"
              ghLink="https://github.com/ece-cevik/Sevgililer-gunu"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={album}
                title="Albüm"
                description="Bu proje, kullanıcıların fotoğraf albümü oluşturup yönetebileceği basit bir web uygulamasıdır.
                HTML, CSS ve JavaScript kullanılarak geliştirilmiştir.
                Kullanıcılar albüme fotoğraf ekleyebilir, görüntüleyebilir ve düzenleyebilir."
                ghLink="https://github.com/ece-cevik/Album"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              title="To-Do List"
              description="Bu proje, günlük yapılacak işleri takip etmek için geliştirilmiş basit ve işlevsel bir To-Do List uygulamasıdır.
              HTML, CSS ve JavaScript kullanılarak oluşturulmuş sade bir arayüze sahiptir.
              Kullanıcılar görev ekleyip tamamladıklarını işaretleyebilir, böylece işlerini kolayca organize edebilirler. "
              ghLink="https://github.com/ece-cevik/To-Do-List"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sayi}
              title="Sayı Tahmin Oyunu"
              description="Bu proje, kullanıcıların rastgele seçilen bir sayıyı tahmin etmeye çalıştığı basit bir sayı tahmin oyunudur.
              Python dili kullanılarak geliştirilmiştir.
              Oyunda, kullanıcı tahminlerini girer ve program, tahminin doğru olup olmadığını ya da sayının daha büyük mü küçük mü olduğunu geri bildirir."
              ghLink="https://github.com/ece-cevik/Sayi-Tahmin-Oyunu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalp}
              title="Kalp Tasarımı"
              description="Bu projede, HTML kullanarak bir görsel animasyon oluşturdum.
              Ekranda kalp şeklinde parçacıkların rastgele ve sürekli hareket ettiği bir animasyonu içermektedir.
              Bu tasarım tamamen HTML ile geliştirilmiştir. Hiçbir ek kütüphane ya da CSS dosyası kullanmadan, sadece HTML içindeki script ile kalp animasyonu oluşturulmuştur."
              ghLink="https://github.com/ece-cevik/kalp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
