import React from 'react'
import { Header } from '../../components/header/Header'
import "./home.css"

function Home() {
  return (
    <>
    <Header />
    <div className='home'>
        <section id="hero" class="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" class="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Welcome to <span>ETHIOPIAN WOMEN IN ENERGY</span></h2>
          <p class="animate__animated animate__fadeInUp">Women at The Heart of Energy Access</p>
          <a href="/about" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>
    </div>
  </section>
  
  <section class="services">
  <div class="section-title">
          <h2>Our Programs</h2>
        </div>
      <div class="container">

        <div class="row">
          <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Empowerment</a></h4>
              <p class="description">Provision of quality education, training and support for women in the workforce; access to finance for women entrepreneurs in the sector; & community-based energy projects.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos-delay="100">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Networking</a></h4>
              <p class="description">Create a platform for collaboration and experience sharing ; engage in discussion about solutions and professional growth; Information for young women about the energy sector.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Visibility</a></h4>
              <p class="description">Demonstrate women as an important part of the sector; promote professional and women-led energy businesses; and research on barriers to women's participation in energy.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
    </>
  )
}

export default Home