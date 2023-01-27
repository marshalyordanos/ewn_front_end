import React from "react";
import styled from "styled-components";

const NewsCard = () => {
  return (
    <Container>
      <img src="et1.jpg" alt="" />
      <h3>Quarterly Newsletter Apr- Jun 2022</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        temporibus blanditiis consectetur ipsa quis corrupti, ad fuga iusto?
        Eaque ducimus iure ex accusantium veritatis rem. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Ut maiores deserunt iusto autem
        asperiores, in voluptate consectetur, cumque enim, earum aspernatur?
        Repellendus quam veniam distinctio optio debitis totam reprehenderit
        provident.
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  text-align: center;
  margin: 0 20px;
  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
  }
  h3 {
    margin: 10px 0;
    text-align: center;
    max-width: 250px;
    font-size: 23px;
    color: #2d6834;
  }
  p {
    text-align: justify;
    font-size: 17px;
  }
`;
export default NewsCard;
