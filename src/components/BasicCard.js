import React from "react";
import styled from "styled-components";

const BasicCard = ({ photo, desc }) => {
  return (
    <Container>
      <img src={"http://localhost:5000" + photo} />
      <p>{desc}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  img {
    width: 400px;
    border-radius: 10px;
    height: 250px;
    object-fit: cover;
  }
  p {
    font-size: 16px;
    text-align: justify;
    color: #2d6834;
    /* border: 1px solid red; */
    height: 110px;
    padding: 10px;
    overflow: hidden;
    margin-top: 20px;
    font-weight: lighter !important;
    /* white-space: nowrap; */
    /* text-overflow: ellipsis; */
  }
`;
export default BasicCard;
