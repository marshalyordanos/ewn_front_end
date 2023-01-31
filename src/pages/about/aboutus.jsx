import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import BorderThree from "../../assets/three.svg";
import BorderLeft1 from "../../assets/left1.svg";
import BorderRight1 from "../../assets/right1.svg";
import CircleCard from "../../components/CircleCard";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { token } from "../../redux/authReducer";
import { useState } from "react";

const Aboutus = () => {
  const tokens = useSelector(token);
  const [value, setvalue] = useState(0);
  const navigate = useHistory();
  console.log(value);

  useEffect(() => {
    // document.addEventListener
    window.addEventListener("resize", () => {
      console.log("");
      setvalue(window.innerWidth);
    });
  }, []);
  return (
    <Container>
      <Header />
      <div className="first_con">
        <div className="first_con_decor">
          <img className="one" src="/img/border/one.png" alt="" />
          {/* <img src="/img/border/two.png" alt="" /> */}
        </div>
        <FirstCon>
          <div className="left">
            <iframe
              width={value < 1100 ? "400" : 600}
              height="380"
              src="https://www.youtube.com/embed/85jPXNAts6k"
              title="Dr. Meseret Tesema Associate Professor at Hawassa University - EWiEn"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <h1>Annual Women in Energy 2021 Event</h1>
          </div>
          <div className="right">
            <h1>What We Do</h1>
            <h2>
              EWiWn was set up to promote visibility of professional women in
              the energy sector, ultimately contributing to gender balance and
              diverstiy in the sector. An increase in gender diversity will lead
              to increasing inequality, better decision-making, improved
              management, greater innovation, and a fresh perspective on the
              develpment of society at large.
            </h2>
            <a
              target={"_blank"}
              href="https://www.youtube.com/@ethiopianwomeninenergyasso7086">
              Watch Other Videos
            </a>
          </div>
        </FirstCon>
      </div>
      <div className="second_con">
        <div className="second_con_decor">
          <img src={BorderLeft1} alt="" />
        </div>
        <SecondCon>
          <div className="left">
            <h1>What We Do</h1>
            <h2>
              EWiWn was set up to promote visibility of professional women in
              the energy sector, ultimately contributing to gender balance and
              diverstiy in the sector. An increase in gender diversity will lead
              to increasing inequality, better decision-making, improved
              management, greater innovation, and a fresh perspective on the
              develpment of society at large.
            </h2>
            <a
              target={"_blank"}
              href="https://www.youtube.com/@ethiopianwomeninenergyasso7086">
              Watch Other Videos
            </a>
          </div>
          <div className="right">
            <img
              src="LTWW7904.png"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
              alt=""
            />
            <h1>Annual Women in Energy 2021 Event</h1>
          </div>
        </SecondCon>
      </div>
      <div className="third_con">
        <div className="second_con_decor">
          <img style={{ width: "40vw" }} src={BorderRight1} alt="" />
        </div>
        <FirstCon>
          <div className="left">
            <img
              src="/Asset1.png"
              width={700}
              height={300}
              style={{ objectFit: "cover", borderRadius: 20 }}
              alt=""
            />
          </div>
          <div className="right">
            <h1>What We Do</h1>
            <h2>
              EWiWn was set up to promote visibility of professional women in
              the energy sector, ultimately contributing to gender balance and
              diverstiy in the sector. An increase in gender diversity will lead
              to increasing inequality, better decision-making, improved
              management, greater innovation, and a fresh perspective on the
              develpment of society at large.
            </h2>
            <button
              onClick={() => {
                if (tokens) {
                  navigate.push("/program");
                } else {
                  navigate.push("/addmember");
                }
              }}
              className="join_us_btn">
              Join Us
            </button>
          </div>
        </FirstCon>
        <div className="second_con">
          <div className="second_con_decor">
            <img src={BorderLeft1} alt="" />
          </div>
          <SecondCon>
            <div className="left">
              <h1>What We Do</h1>
              <h2>
                EWiWn was set up to promote visibility of professional women in
                the energy sector, ultimately contributing to gender balance and
                diverstiy in the sector. An increase in gender diversity will
                lead to increasing inequality, better decision-making, improved
                management, greater innovation, and a fresh perspective on the
                develpment of society at large.
              </h2>
            </div>
            <div className="right">
              <img
                src="IMGL6301-2048x1365.jpg"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
                alt=""
              />
              <h1>Annual Women in Energy 2021 Event</h1>
            </div>
          </SecondCon>
        </div>
      </div>
      <Team1>
        <h1>Our Executive Committee Team</h1>
        <div className="cards">
          <CircleCard
            path={"Sinafiksh.png"}
            name={"Sinafikish Lemma"}
            title={"Cashier"}
          />
          <CircleCard
            path={"Linda.png"}
            name={"Linda Lapiso"}
            title={"V.president"}
          />
          <CircleCard
            path={"AdeyGetachew.jpg.png"}
            name={"Adey Getachew"}
            title={"president"}
          />
          <CircleCard
            path={"Lwam.png"}
            name={"Lewam Teklu"}
            title={"Treasury"}
          />
          <CircleCard
            path={"Amen.png"}
            name={"Amen Aniley"}
            title={"Executive Committee Secretary"}
          />
          <CircleCard
            path={"Eden_Fenta_pic-removebg-preview.png"}
            name={"Eden Fenta"}
            title={"Executive Committee Member "}
          />
          <CircleCard
            path={"Lekadelu.png"}
            name={"Lekidelu Asrat"}
            title={"Executive Committee Member"}
          />
          <CircleCard
            path={"Atikly.png"}
            name={"Atikilt Bekele"}
            title={"Executive Committee Member"}
          />
          <CircleCard
            path={"Mekla.png"}
            name={"Mekia Mohammed "}
            title={"Executive Committee Member"}
          />
        </div>
      </Team1>
      <Team1>
        <h1>The General Assemly Team</h1>
        <div className="cards">
          <CircleCard
            path={"Atsede.png"}
            name={"Atsede  Gualu"}
            title={"Chairperson"}
          />
          <CircleCard
            path={"Selamawit.png"}
            name={"Selamawit Beneberu "}
            title={"Vice Chairperson"}
          />
        </div>
      </Team1>
      <div>
        <div className="second_con_decor">
          <img style={{ width: "40vw" }} src={BorderRight1} alt="" />
        </div>
        <Team1>
          <h1>Our Staff</h1>
          <div className="cards">
            <CircleCard
              path={"Filagot.png"}
              name={"Filagot  Tesfaye"}
              title={"General Manager"}
            />
            <CircleCard
              path={"Yemissrach.png"}
              name={"Yemissrach Sisay "}
              title={"Project Co-ordinator"}
            />
            <CircleCard
              path={"Bezawit.png"}
              name={"Bezawit Mesfin "}
              title={"It and Communication Officer"}
            />
          </div>
          <button
            onClick={() => {
              navigate.push("/contactus");
            }}>
            Talk With Us
          </button>
        </Team1>
      </div>

      <div className="second_con">
        <div className="second_con_decor">
          <img src={BorderLeft1} alt="" />
        </div>

        <Team1 id="prt">
          <h1>Partners</h1>
          <div className="imgs">
            <img src="/img/partners/one.jpg" className="big" alt="" />
            <img src="/img/partners/two.png" alt="" />
            <img src="/img/partners/three.png" alt="" />
            <img src="/img/partners/four.jpg" alt="" />
            <img src="/img/partners/five.png" alt="" />
            <img src="/img/partners/six.jpg" className="big" alt="" />
            <img src="/img/partners/seven.png" alt="" />
            <img src="/img/partners/eight.png" alt="" />
            <img src="/img/partners/nine.jpg" alt="" />
            <img src="/img/partners/ten.png" alt="" />
            <img src="/img/partners/11.png" className="big" alt="" />
          </div>
        </Team1>
      </div>
    </Container>
  );
};

const Team1 = styled.div`
  text-align: center;
  > h1 {
    text-align: center;
    color: #2d6834;
    font-size: 28px;
    font-weight: 500;
    margin-top: 100px;
  }
  .imgs {
    max-width: 1400px;
    margin: auto;
    /* display: flex; */
    flex-wrap: wrap;

    img {
      width: 180px;
      /* object-fit: cover; */
      height: auto;
    }
    .big {
      width: 100px;
    }
  }
  .cards {
    display: flex;
    gap: 30px;
    max-width: 1200px;
    margin: auto;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }
  button {
    padding: 10px 30px;
    border-radius: 40px;
    font-size: 20px;
    margin-top: 10px;
    background-color: #fec034;
    border: none;
    border: #fec034 1px solid;
    margin: 40px 0;

    color: #2d6834;
  }
  button:hover {
    background-color: white;
    border: #fec034 1px solid;
  }
`;
const SecondCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;

  justify-content: center;

  gap: 100px;
  .left {
    h1 {
      font-size: 30px;
      color: #2d6834;
      text-align: center;
    }
    h2 {
      width: 600px;
      text-align: justify;
      font-size: 27px;
      color: black;
      font-weight: lighter;
    }
    button,
    a {
      /* display: block; */
      color: #2d6834;
      border: 1px solid #2d6834;
      padding: 10px 30px;
      border-radius: 40px;
      font-size: 20px;
      margin-top: 10px;
    }
  }
  .right {
    h1 {
      font-size: 22px;
      color: #2d6834;
      margin-top: 10px;
    }
    img {
      border-radius: 18px;
    }
  }
  @media screen and (max-width: 1600px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
    .left {
      h1 {
        font-size: 22px;
        color: #2d6834;
        text-align: center;
      }
      h2 {
        width: 400px;
        text-align: justify;
        font-size: 17px;
        color: black;
        font-weight: lighter;
      }
      button,
      a {
        color: #2d6834;
        border: 1px solid #2d6834;
        padding: 10px 30px;
        border-radius: 40px;
        font-size: 20px;
        margin-top: 10px;
      }
    }
    .right {
      h1 {
        font-size: 17px;
      }
      img {
        width: 400px;
        border-radius: 18px;
      }
      #big {
        width: 700px;
        margin-left: -400px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
    .right {
      text-align: center;

      img {
        width: 300px;
      }
      #big {
        width: 700px;
        align-items: center;
        align-self: center;
        text-align: center;
        margin: 0;
      }
    }
  }
`;

const FirstCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 100px;
  .left {
    h1 {
      font-size: 22px;
      color: #2d6834;
    }
  }
  .right {
    text-align: center;

    h1 {
      font-size: 30px;
      color: #2d6834;
      text-align: center;
    }
    h2 {
      width: 600px;
      text-align: justify;
      font-size: 27px;
      color: black;
      font-weight: lighter;
    }
    button,
    a {
      color: #2d6834;
      border: 1px solid #2d6834;
      padding: 10px 30px;
      border-radius: 40px;
      font-size: 20px;
      margin-top: 10px;
    }
    .join_us_btn {
      background-color: #fec034;
      border: none;
      border: #fec034 1px solid;
      margin: 40px 0;
      color: #2d6834;
    }
    .join_us_btn:hover {
      background-color: white;
      border: #fec034 1px solid;
    }
  }
  @media screen and (max-width: 1600px) {
    justify-content: center;
    .left {
      img {
        width: 400px;
      }
      h1 {
        font-size: 22px;
        color: #2d6834;
      }
    }
    .right {
      text-align: center;

      h1 {
        font-size: 23px;
        color: #2d6834;
        text-align: center;
      }
      h2 {
        max-width: 500px;
        text-align: justify;
        font-size: 17px;
        color: black;
        font-weight: lighter;
      }
      button,
      a {
        color: #2d6834;
        border: 1px solid #2d6834;
        padding: 10px 30px;
        border-radius: 40px;
        font-size: 20px;
        margin-top: 10px;
      }
      .join_us_btn {
        background-color: #fec034;
        border: none;
        border: #fec034 1px solid;
        margin: 40px 0;
        color: #2d6834;
      }
      .join_us_btn:hover {
        background-color: white;
        border: #fec034 1px solid;
      }
    }
  }
  @media screen and (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
    .right {
      text-align: center;

      img {
        width: 300px;
      }
      #big {
        width: 700px;
        align-items: center;
        align-self: center;
        text-align: center;
        margin: 0;
      }
    }
  }
`;
const Container = styled.div`
  .first_con_decor {
    /* background-color: #2d6834; */
    .one {
      width: 100vw;
      max-height: 80px;
    }
  }
  .second_con {
    .second_con_decor {
      border: 1px solid white;

      img {
        float: right;
        width: 40vw;
      }
    }
  }
`;
export default Aboutus;

// <React.Fragment>
// <div>
//   <section className="breadcrumbs">
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center">
//         <h2>About Us</h2>
//         <ol>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>About Us</li>
//         </ol>
//       </div>
//     </div>
//   </section>
//   <section className="about">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-6">
//           <img
//             src="assets/img/about.jpg"
//             className="img-fluid"
//             alt=""
//           />
//         </div>
//         <div className="col-lg-6 pt-4 pt-lg-0">
//           <h3>The founding of EWiEn</h3>
//           <p className="fst-italic">
//             EWiEN was initiated by five Ethiopian women professionals in
//             the energy sector in January 2019. They shared a strong
//             interest in the energy transformation in Ethiopia and the
//             role of women in the energy sector. They had a chance to
//             find that they had much more in common and decided to start
//             the first association promoting the role of women in the
//             energy work space.
//           </p>
//           <p>
//             EWiEn was set up to promote visibility of professional women
//             in the energy sector and to encourage others to follow their
//             suit, ultimately contributing to gender balance and
//             diversity in the sector. An increase in gender diversity
//             will lead to increasing inequality, better decision-making,
//             improved management, greater innovation, and a fresh
//             perspective on the development of society at large. In
//             addition, EWiEn champions energy justice through inclusive
//             energy development in Ethiopia and envisions to put women at
//             the heart of energy access projects and activities.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section class="team">
//     <div class="container">
//       <div class="section-title">
//         <h2>Partners</h2>
//       </div>
//       <div class="row">
//         <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner1.jpg"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//         <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner2.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//         <div class="col-lg-3 col-md-4 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner3.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//         <div class="col-lg-2 col-md-4 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner4.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//         <div class="col-lg-2 col-md-4 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner5.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>

//         <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner6.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//         <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner7.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//         <div class="col-lg-1 col-md-3 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner8.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//         <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
//           <div class="member">
//             <div class="member-img">
//               <img
//                 src="assets/img/partner/partner9.png"
//                 class="img-fluid"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//   <section class="why-us section-bg">
//     <div class="container">
//       <div class="row">
//         <div class="col-lg-6 video-box">
//           <img src="assets/img/about2.jpg" class="img-fluid" alt="" />
//           <a
//             href="https://youtu.be/0nnspewEOr0"
//             class="venobox play-btn mb-4"
//             data-vbtype="video"
//             data-autoplay="true"></a>
//         </div>

//         <div class="col-lg-6 d-flex flex-column justify-content-center p-5">
//           <div class="icon-box">
//             <div class="icon">
//               <i class="bx bx-fingerprint"></i>
//             </div>
//             <h4 class="title">
//               <a href="">Our Mission</a>
//             </h4>
//             <p class="description">
//               Increasing Ethiopian women’s participation in and impact
//               on the energy sector by spotlighting, training, and
//               connecting them to lucrative and meaningful professional
//               opportunities with the ultimate goals of increasing
//               innovation in the sector and advancing Ethiopia’s economic
//               and human development.
//             </p>
//           </div>

//           <div class="icon-box">
//             <div class="icon">
//               <i class="bx bx-gift"></i>
//             </div>
//             <h4 class="title">
//               <a href="">Our Vision</a>
//             </h4>
//             <p class="description">
//               To see Ethiopian women, at the heart of the energy sector,
//               as change agent and beneficiary in the effort of providing
//               energy access to all.​
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>
// </React.Fragment>
