import React from "react";
import styled from "styled-components";

const EarlierNewsCard = () => {
  return (
    <Container>
      <h1>December 2021/ Edition</h1>
      <h3>Quarterly Newsletter Oct- Dec 2021</h3>
      <div>
        <p>Nov 9, 2021</p>
        <button>Download</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    color: rgb(45, 104, 52);
    font-size: 23px;
    font-weight: 500;
  }
  h3 {
    font-weight: 100;
    font-size: 19px;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      border: 1px solid #2d6834;
      padding: 8px 30px;
      color: #fec034;
      border-radius: 30px;
    }
    p {
      font-size: 19px;
    }
  }
`;

export default EarlierNewsCard;
