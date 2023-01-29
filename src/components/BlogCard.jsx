import React from "react";
import styled from "styled-components";
import { Header } from "../components/header/Header";

const BlogCard = ({ title, desc, photo, time }) => {
  return (
    <Container>
      <FirstCon>
        <div className="left">
          <img src={"http://localhost:5000" + photo} alt="" />
          {/* <h1>Annual Women in Energy 2021 Event</h1> */}
        </div>
        <div className="right">
          <h1>{title}</h1>
          <h2>{desc}</h2>
          <div className="first__row">
            <p>JUNE 3, 2022</p>
            <a
              target={"_blank"}
              href="https://www.youtube.com/@ethiopianwomeninenergyasso7086">
              Watch Other Videos
            </a>
          </div>
        </div>
      </FirstCon>
      <div className="line"></div>
    </Container>
  );
};

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
    /* text-align: center; */
    .first__row {
      display: flex;
      align-items: flex-end;
      gap: 100px;
      p {
        font-size: 19px;
      }
    }
    h1 {
      font-size: 30px;
      color: #2d6834;
      /* text-align: center; */
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
  @media screen and (max-width: 1200px) {
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
  .line {
    height: 5px;
    margin: 30px auto;
    max-width: 1300px;

    background-color: #2d6834;
  }
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

export default BlogCard;
