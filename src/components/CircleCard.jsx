import React from "react";
import styled from "styled-components";

const CircleCard = ({ path, name, title }) => {
  return (
    <Container>
      <img src={path} alt="" />
      <h1>{name} </h1>
      <p>{title}</p>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  img {
    width: 200px;
  }
  h1 {
    color: #2d6834;
    font-size: 24px;
    font-weight: normal;
  }
  p {
    font-size: 18px;
  }
`;

export default CircleCard;
