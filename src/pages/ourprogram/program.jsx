import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import Left2 from "../../assets/left2.svg";
import Program from "../../assets/program2.svg";
import Left1 from "../../assets/left1.svg";
import One from "../../assets/program/one.svg";
import Two from "../../assets/program/two.svg";
import Four from "../../assets/program/four.svg";
import Five from "../../assets/program/five.svg";
import Six from "../../assets/program/six.svg";
import Three from "../../assets/program/three.svg";
import ProgramLast from "../../assets/program/program_last.svg";

function program() {
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
            <img src={"photo_2021-04-09_12-32-08-1.jpg"} alt="" />
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
        <div className="second_con_decor1">
          <img style={{ width: "50vw" }} src={Left2} alt="" />
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
            <img src={Program} alt="" />

            {/* <h1>Annual Women in Energy 2021 Event</h1> */}
          </div>
        </SecondCon>
      </div>
      <div className="second_con">
        <div className="second_con_decor">
          <img style={{ width: "50vw" }} src={Left1} alt="" />
        </div>
        <Team1>
          <h1>TOU ARE ELEGIBLE IF...</h1>
          <div className="team__con">
            <div className="cards">
              <div className="team__row">
                <div className="card1">
                  <div className="team__header">
                    <img src={One} alt="" />
                    <h1>IDEA</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    vitae facere, earum natus voluptatum, officiis hic magnam
                    consequuntur dignissimos soluta quam ducimus cupiditate
                  </p>
                </div>
                <div className="card1">
                  <div className="team__header">
                    <img src={Two} alt="" />
                    <h1>IDEA</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    vitae facere, earum natus voluptatum, officiis hic magnam
                    consequuntur dignissimos soluta quam ducimus cupiditate
                  </p>
                </div>
              </div>
              <div className="team__row">
                <div className="card1">
                  <div className="team__header">
                    <img src={Three} alt="" />
                    <h1>IDEA</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    vitae facere, earum natus voluptatum, officiis hic magnam
                    consequuntur dignissimos soluta quam ducimus cupiditate
                  </p>
                </div>
                <div className="card1">
                  <div className="team__header">
                    <img src={Four} alt="" />
                    <h1>IDEA</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    vitae facere, earum natus voluptatum, officiis hic magnam
                    consequuntur dignissimos soluta quam ducimus cupiditate
                  </p>
                </div>
              </div>
              <div className="team__row">
                <div className="card1">
                  <div className="team__header">
                    <img src={Five} alt="" />
                    <h1>IDEA</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    vitae facere, earum natus voluptatum, officiis hic magnam
                    consequuntur dignissimos soluta quam ducimus cupiditate
                  </p>
                </div>
                <div className="card1">
                  <div className="team__header">
                    <img src={Six} alt="" />
                    <h1>IDEA</h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    vitae facere, earum natus voluptatum, officiis hic magnam
                    consequuntur dignissimos soluta quam ducimus cupiditate
                  </p>
                </div>
              </div>
            </div>
            <div className="team_right">
              <img src={ProgramLast} alt="" />
              <button>Apply</button>
              <p>We will help launch your bussines</p>
            </div>
          </div>
        </Team1>
      </div>
      <Training>
        <h1> TRAINING DETAILS</h1>
        <div className="training__cards">
          <div className="traininf__card">
            <h1>Technical Training</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus alias velit, aliquid odit aliquam officia odio veniam
              excepturi natus ipsum mollitia quidem voluptatum officiis.
              Perspiciatis soluta odio temporibus ipsum id.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              laboriosam placeat accusamus praesentium modi minus quos a
              quisquam quas assumenda.
            </p>
          </div>
          <div className="traininf__card traininf__card2">
            <h1>Technical Training</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus alias velit, aliquid odit aliquam officia odio veniam
              excepturi natus ipsum mollitia quidem voluptatum officiis.
              Perspiciatis soluta odio temporibus ipsum id.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              laboriosam placeat accusamus praesentium modi minus quos a
              quisquam quas assumenda.
            </p>
          </div>
        </div>
      </Training>
    </Container>
  );
}

const Training = styled.div`
  > h1 {
    text-align: center;
    color: #2d6834;
    font-size: 28px;
    font-weight: 500;
    margin-top: 00px;
  }
  .training__cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 50px;
    .traininf__card {
      padding: 15px;
      border-radius: 20px;
      width: 450px;
      border: 2px solid #fec034;
      h1 {
        font-size: 24px;
        color: #2d6834;
      }
      p {
        font-size: 18px;
        color: #2d6834;
      }
    }
    .traininf__card2 {
      border: 2px solid #2d6834;
      h1 {
        font-size: 24px;
        color: #fec034;
      }
    }
  }
`;

const Team1 = styled.div`
  text-align: center;
  margin-top: 40px;
  > h1 {
    text-align: center;
    color: #2d6834;
    font-size: 28px;
    font-weight: 500;
    margin-top: 00px;
  }
  .team__con {
    margin-top: 70px;
    justify-content: center;
    display: flex;
    gap: 100px;
    .team_right {
      display: flex;
      flex-direction: column;
      button {
        margin-top: 30px;
        border: 1px solid #2d6834;
        padding: 8px 40px;
        color: #2d6834;
        border-radius: 30px;
      }
      p {
        color: #fec034;
        font-size: 23px;
        margin-top: 20px;
      }
      img {
        width: 300px;
      }
      @media screen and (max-width: 900px) {
        display: none;
      }
    }
    .cards {
      .team__row {
        /* margin-top: 30px; */
        padding: 0 15px;
        display: flex;
        gap: 30px;
        .card1 {
          padding: 15px;

          /* border: 1px solid #fec034; */
          .team__header {
            display: flex;
            align-items: center;
            gap: 20px;
            h1 {
              color: #2d6834;
              font-size: 25px;
            }
            img {
              width: 70px;
            }
          }
          p {
            margin-top: 20px;
            width: 250px;
            font-size: 17px;
          }
        }
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
  /* border: 1px solid; */
  max-width: 1400px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  margin-top: 50px;
  gap: 100px;
  .left {
    img {
      width: 500px;
      border-radius: 20px;
      height: 300px;
      object-fit: cover;
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
  .second_con_decor {
    /* border: 1px solid; */
    display: flex;
    justify-content: end;
    img {
      margin-top: 100px;
    }
  }
  .second_con_decor1 {
    /* border: 1px solid; */
    display: flex;
    /* justify-content: end; */
    img {
      margin-top: 100px;
    }
  }
`;

export default program;
