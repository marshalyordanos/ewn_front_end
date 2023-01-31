import React from "react";
import styled from "styled-components";
import { Header } from "../components/header/Header";
import Platform from "../assets/Platforms.svg";
import BorderLeft1 from "../assets/left1.svg";
import BorderRight1 from "../assets/right1.svg";
import Networking from "../assets/Networking.svg";
import Recognition from "../assets/Recognition.svg";
import { useHistory } from "react-router-dom";
import { token } from "../redux/authReducer";
import { useSelector } from "react-redux";

const Membership = () => {
  const tokens = useSelector(token);

  const navigate = useHistory();

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
            <img src={Platform} alt="" />
            {/* <h1>Annual Women in Energy 2021 Event</h1> */}
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
          <img style={{ width: "50vw" }} src={BorderLeft1} alt="" />
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
            <img src={Networking} alt="" />

            {/* <h1>Annual Women in Energy 2021 Event</h1> */}
          </div>
        </SecondCon>
      </div>
      <div>
        <div>
          <img style={{ width: "50vw" }} src={BorderRight1} alt="" />
        </div>
        <FirstCon>
          <div className="left">
            <img
              src="/Training.png"
              width={700}
              //   height={300}
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
      </div>
      <div className="second_con">
        <div className="second_con_decor">
          <img style={{ width: "50vw" }} src={BorderLeft1} alt="" />
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
            <img src={"/Recognition.png"} id="big" style={{}} alt="" />

            {/* <h1>Annual Women in Energy 2021 Event</h1> */}
          </div>
        </SecondCon>
      </div>

      <Team1>
        <h1>Partners</h1>
        <div className="cards">
          <div className="card">
            <h1>FREE</h1>
            <p>This Package is for students in the energy sector</p>
            <h1>STUDENT</h1>
          </div>
          <div className="card">
            <h1>300 ETB/YEAR</h1>
            <p>This Package is for students in the energy sector</p>
            <h1>BASIC</h1>
          </div>
          <div className="card">
            <h1>XX</h1>
            <p>This Package is for students in the energy sector</p>
            <h1>PRIMIUM</h1>
          </div>
          <div className="card">
            <h1>XX</h1>
            <p>This Package is for students in the energy sector</p>
            <h1>PARTNER</h1>
          </div>
        </div>
        <div className="team__btns">
          <button
            onClick={() => {
              if (tokens) {
                navigate.push("/program");
              } else {
                navigate.push("/login");
              }
            }}
            className="orange">
            Register Today
          </button>
          <button
            onClick={() => {
              if (tokens) {
                navigate.push("/payment");
              } else {
                navigate.push("/login");
              }
            }}
            className="green">
            Pay membership fee
          </button>
        </div>
        <div className="team__img">
          <img src="membership_last.jpg" alt="" />
        </div>
      </Team1>
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
    margin-top: 00px;
  }
  .team__img {
    img {
      width: 600px;
      height: 350px;
      margin-top: 70px;
      object-fit: cover;
    }
  }
  .team__btns {
    margin-top: 60px;
    .orange {
      background-color: #fec034;
      padding: 10px 30px;
      color: white;
      font-size: 23px;
      border-radius: 30px;
      margin: 0 30px;
    }
    .green {
      background-color: #2d6834;
      padding: 10px 30px;
      color: white;
      font-size: 23px;
      border-radius: 30px;
    }
  }
  .cards {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
    .card {
      width: 250px;
      border: 2px solid #fec034;
      padding: 10px;

      h1 {
        color: #2d6834;
        font-size: 30px;
      }
      p {
        color: #fec034;
        font-size: 20px;
      }
    }
  }
`;
const SecondCon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  max-width: 1400px;
  margin: auto;
  justify-content: space-between;
  align-items: center;

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
      width: 700px;
      border-radius: 18px;
    }
    #big {
      width: 1300px;
      margin-left: -400px;
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
  /* border: 1px solid; */
  max-width: 1400px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  margin-top: 50px;
  gap: 100px;
  flex-wrap: wrap;

  .left {
    img {
      width: 500px;
    }
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
      max-width: 700px;
      text-align: justify;
      font-size: 23px;
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
  @media screen and (max-width: 9000px) {
    .left {
      img {
        width: 300px;
      }
    }
  }
`;
const Container = styled.div`
  .first_con_decor {
    /* background-color: #2d6834; */
    /* .one {
      width: 100vw;
      max-height: 80px;
    } */
  }
  .second_con_decor {
    /* border: 1px solid; */
    display: flex;
    justify-content: end;
    img {
    }
  }
`;

export default Membership;
