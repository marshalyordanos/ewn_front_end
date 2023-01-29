import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import "./home.css";
import Carousel from "react-elastic-carousel";
import BasicCard from "../../components/BasicCard";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { token, user } from "../../redux/authReducer";

function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 760, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1610, itemsToShow: 4 },
  ];
  const items = [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];
  const [posts, setPosts] = useState([]);
  const users = useSelector(user);
  const tokens = useSelector(token);

  console.log("###################################", tokens);

  // setp 2
  const { search } = useLocation();
  const navigate = useHistory();
  // const location = useLocation()
  //console.log(location)
  console.log("*****************", posts);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);

      setPosts(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <Container>
      <Header />
      <div className="home">
        <section
          id="hero"
          class="d-flex justify-cntent-center align-items-center">
          <div
            id="heroCarousel"
            class="container carousel carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000">
            <div class="carousel-item active">
              <div class="carousel-container">
                <h2 class="animate__animated animate__fadeInDown">
                  Welcome to <span>ETHIOPIAN WOMEN IN ENERGY</span>
                </h2>
                <p class="animate__animated animate__fadeInUp">
                  Women at The Heart of Energy Access
                </p>
                <a
                  href="/about"
                  class="btn-get-started animate__animated animate__fadeInUp">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        <HeaderCon>
          <div className="header_left">
            <h1>ETHIOPIAN WOMEN IS ENERGY NETWORK</h1>
            <p>
              A place where Women who are in the Energy Selector. or who want to
              explore the world of energy are Supporeted, nurtured and provided
              with the tool and networks to achieve their goals
            </p>
            <div className="btns">
              <p
                onClick={() => {
                  navigate.push("/about");
                }}
                className="btn_left">
                Read More
              </p>
              <p
                onClick={() => {
                  if (tokens) {
                    navigate.push("/program");
                  } else {
                    navigate.push("/addmember");
                  }
                }}
                className="btn_right2">
                JOIN EWiEn
              </p>
            </div>
          </div>
          <div className="header_right">
            <img src="/girl.jpg" alt="" />
          </div>
        </HeaderCon>

        <section class="services">
          <div class="section-title">
            <h2>Our Programs</h2>
          </div>
          <OurProgramCon class="container">
            <div id="our_program" class="row">
              <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="icon-box icon-box-green">
                  <div class="icon">
                    <i class="bx bxl-dribbble"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Empowerment</a>
                  </h4>
                  <p class="description">
                    Provision of quality education, training and support for
                    women in the workforce; access to finance for women
                    entrepreneurs in the sector; & community-based energy
                    projects.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="icon-box icon-box-green">
                  <div class="icon">
                    <i class="bx bx-world"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Networking</a>
                  </h4>
                  <p class="description">
                    Create a platform for collaboration and experience sharing ;
                    engage in discussion about solutions and professional
                    growth; Information for young women about the energy sector.
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-4 d-flex align-items-stretch"
                data-aos-delay="200">
                <div class="icon-box icon-box-green">
                  <div class="icon">
                    <i class="bx bx-tachometer"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Visibility</a>
                  </h4>
                  <p class="description">
                    Demonstrate women as an important part of the sector;
                    promote professional and women-led energy businesses; and
                    research on barriers to women's participation in energy.
                  </p>
                </div>
              </div>
            </div>
          </OurProgramCon>
          <div
            style={{
              margin: "10px auto",
              maxWidth: 1400,
              height: 2,
              background: "#2d6834",
              borderWidth: 2,
            }}></div>
        </section>
        <div style={{ maxWidth: "1600px", margin: "auto" }}>
          <Carousel breakPoints={breakPoints}>
            {posts.map((item) => (
              <BasicCard desc={item.desc} photo={item.photo} />
            ))}
          </Carousel>
          <div className="line_con">
            <div className="line"></div>
            <p
              onClick={() => {
                if (tokens) {
                  navigate.push("/program");
                } else {
                  navigate.push("/addmember");
                }
              }}
              className="btn_right">
              JOIN US
            </p>
          </div>
        </div>
      </div>
      <div className="latest_form">
        <div className="left">
          <h1>Latest From EWiEn</h1>
          <div>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              itaque iusto at, sed provident hic saepe consequatur, voluptatibus
              aut magni aperiam libero! Quo ratione illum quasi repellendus
              facilis, a tempore!
            </p>
            {/* <button> Full Story</button> */}
          </div>
        </div>
        <div className="right">
          <img src="/et3.jpeg" alt="" />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .latest_form {
    margin: auto;
    margin: 90px auto 70px auto;
    max-width: 1000px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .left {
      width: 500px;
      > div {
        text-align: center;
        /* p {
          min-width: 300px;
        } */
      }
      button {
        padding: 8px 20px;
        border: 1px solid #fec034;
        color: #2d6834;
        border-radius: 15px;
      }
    }
    h1,
    h2 {
      color: #2d6834;
      font-size: 20px;
    }
    p {
      cursor: pointer;
      font-size: 18px;
      color: #2d6834;
      text-align: center;
      font-weight: lighter !important;
      margin-bottom: 10px;
    }
  }
  .line_con {
    margin-top: 40px;
    position: relative;
  }
  .line {
    height: 2px;
    background-color: #2d6834;
  }
  .btn_right {
    position: absolute;
    top: -20px;
    left: calc(50% - 60px);
    border: 1.2px solid #fec034;
    background-color: #fec034;
    padding: 10px;
    padding: 10px 30px;

    border-radius: 40px;
  }
  @media screen and (max-width: 700px) {
    .latest_form {
      justify-content: center;
      .left {
        width: 400px;
      }
    }
  }
`;
const OurProgramCon = styled.div`
  max-width: 1600px;
  margin: auto;
  #our_program > div > div {
    box-shadow: none;
    /* max-width: 300px; */
    border: 2px solid #fec034;
    border-radius: 10px;
    p {
      color: #2d6834;
      font-size: 16px;
      font-weight: 100;
      cursor: pointer;
    }
    a {
      color: #2d6834;
    }
  }
`;
const HeaderCon = styled.div`
  display: flex;
  /* border: 1px solid; */
  height: 400px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
  .header_left {
    width: 400px;
    margin: 40px;
    h1 {
      color: #2d6834;
      margin-bottom: 40px;
      font-size: 20px;
    }
    p {
      font-size: 18px;
      color: #2d6834;
      text-align: justify;
      font-weight: lighter;
      cursor: pointer;
    }
    .btns {
      display: flex;
      .btn_right2 {
        border: 1.2px solid #fec034;
        background-color: #fec034;
        padding: 10px;
        padding: 10px 30px;

        border-radius: 40px;
      }
      .btn_right2:hover {
        background-color: white;
      }
    }
    .btn_left {
      border: 1.2px solid #2d6834;
      padding: 10px 30px;
      border-radius: 40px;
      margin-right: 20px;
    }
    .btn_left:hover {
      background-color: #2d6834;
      color: white;
    }
    .btn_right {
      border: 1.2px solid #fec034;
      background-color: #fec034;
      padding: 10px;
      padding: 10px 30px;

      border-radius: 40px;
    }
  }
  .header_right {
    img {
      height: 350px;
    }
  }
`;

export default Home;
