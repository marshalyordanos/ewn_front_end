import React from 'react'
import { Header } from '../../components/header/Header'

function aboutus() {
  return (
    <>
    <Header />
    <React.Fragment>
    <div>
      <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>About Us</li>
          </ol>
        </div>

      </div>
    </section>
    <section className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>The founding of EWiEn</h3>
            <p className="fst-italic">
            EWiEN was initiated by five Ethiopian women professionals in the energy sector in January 2019. They shared a strong interest in the energy transformation in Ethiopia and the role of women in the energy sector. They had a chance to find that they had much more in common and decided to start the first association promoting the role of  women in the energy work space.
            </p>
            <p>
            EWiEn was set up to promote visibility of professional women in the energy sector and to encourage others to follow their suit, ultimately contributing to gender balance and diversity in the sector. An increase in gender diversity will lead to increasing inequality, better decision-making, improved management, greater innovation, and a fresh perspective on the development of society at large. In addition, EWiEn champions energy justice through inclusive energy development in Ethiopia and envisions to put women at the heart of energy access projects and activities. 
            </p>
          </div>
        </div>

      </div>
    </section>
    <section class="team" >
      <div class="container">
      <div class="section-title">
          <h2>Partners</h2>
        </div>
        <div class="row">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner1.jpg" class="img-fluid" alt=""/>
                </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner2.png" class="img-fluid" alt=""/>
                
              </div>
      
            </div>
          </div>

          <div class="col-lg-3 col-md-4 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner3.png" class="img-fluid" alt=""/>
                
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner4.png" class="img-fluid" alt=""/>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner5.png" class="img-fluid" alt=""/>
                
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner6.png" class="img-fluid" alt=""/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner7.png" class="img-fluid" alt=""/>
              </div>
            </div>
          </div>
          <div class="col-lg-1 col-md-3 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner8.png" class="img-fluid" alt=""/>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/partner/partner9.png" class="img-fluid" alt=""/>
              </div>
            </div>
          </div>

        </div>

      </div>
      </section>

      <section class="why-us section-bg">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 video-box">
            <img src="assets/img/about2.jpg" class="img-fluid" alt=""/>
            <a href="https://youtu.be/0nnspewEOr0" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><a href="">Our Mission</a></h4>
              <p class="description">Increasing Ethiopian women’s participation in and impact on the energy sector by spotlighting, training, and connecting them to lucrative and meaningful professional opportunities with the ultimate goals of increasing innovation in the sector and advancing Ethiopia’s economic and human development.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Our Vision</a></h4>
              <p class="description">To see Ethiopian women, at the heart of the energy sector, as change agent and beneficiary in the effort of providing energy access to all.​</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    </div>
    </React.Fragment>
    </>
  )
}

export default aboutus