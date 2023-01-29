import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const BottomCard = () => {
  const navigate = useHistory();
  return (
    <Container>
      <div className="card_con">
        <div className="card_top">
          <img src="Lwam.png" alt="" />
          <p>LEWAM TEKLU</p>
          <p>WATER AND HYDRAULICS ENGINEER</p>
        </div>
        <div className="card_bottom">
          <h1>LEWAM TEKLU</h1>
          <h3>Water and Hydraulic ENgineer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            assumenda minima pariatur repellat blanditiis nisi vero delectus
            facilis id expedita, sit error.
          </p>
        </div>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            navigate.push("/about");
          }}>
          Read More
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;

  .btn {
    button {
      background-color: #fec034;
      color: white;
      /* border: 1px solid #2d6834; */
      padding: 10px 30px;
      border-radius: 40px;
      font-size: 20px;
      margin-top: 10px;
    }
  }
  .card_con {
    /* display */
    text-align: center;

    margin: 20px;
    img {
      width: 180px;
    }

    .card_top {
      padding: 20px;
      border-radius: 20px;
      background-color: #fec034;
      box-shadow: 4px 4px 4px 4px lightgray;
      p {
        color: #2d6834;
        padding: 0;
        margin: 0;
      }
    }
    .card_bottom {
      padding: 20px;
      border-radius: 20px;
      background-color: #2d6834;
      margin-left: 20px;
      h1 {
        font-size: 25px;
        color: white;
      }
      h3 {
        font-size: 21px;
        color: white;
      }
      p {
        color: white;
        text-align: left;
      }
    }
  }
`;

export default BottomCard;
