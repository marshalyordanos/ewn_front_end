import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import { Header } from "../components/header/Header";
import BasicCard from "../components/BasicCard";

import NewsCard from "../components/NewsCard";
import BottomCard from "../components/BottomCard";
import axios from "axios";
import { useLocation } from "react-router-dom";

const NewsPage = () => {
  // const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);

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
      <div className="first_con">
        <div className="first_con_decor">
          <img className="one" src="/img/border/one.png" alt="" />
          {/* <img src="/img/border/two.png" alt="" /> */}
        </div>
        <div>
          {posts?.slice(0, 3).map((blog) => {
            return (
              <BlogCard
                title={blog.title}
                desc={blog.desc}
                time={blog.createdAt}
                photo={blog.photo}
              />
            );
          })}
        </div>
        <NewsLetters>
          <h1>EWiEn Spotlight</h1>
          <p>
            Look into women working in the energy sector from various
            professions.
          </p>
          <div className="cards">
            {posts?.slice(0, 3).map((blog) => {
              return <BasicCard desc={blog.desc} photo={blog.photo} />;
            })}
          </div>
          <div className="news_card">
            <p>Check out All Sporlighted women</p>
            <a
              target={"_blank"}
              href="https://www.youtube.com/@ethiopianwomeninenergyasso7086">
              Watch Other Videos
            </a>
          </div>
        </NewsLetters>
      </div>

      <div className="bottom_cards">
        <div>
          <BottomCard />
          <BottomCard />
          <BottomCard />
        </div>
      </div>
    </Container>
  );
};

const NewsLetters = styled.div`
  max-width: 1400px;
  margin: auto;
  .news_card {
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 70px;
    button,
    a {
      color: #2d6834;
      border: 1px solid #2d6834;
      padding: 10px 30px;
      border-radius: 40px;
      font-size: 20px;
      margin-top: 10px;
    }
    p {
      font-size: 20px;
      color: #fec034;
    }
  }
  > h1 {
    color: #2d6834;
    font-size: 32px;
  }
  > p {
    font-size: 23px;
    text-align: center;
    color: #fec034;
  }
  .cards {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 20px;
    p {
      font-size: 20px;
      text-align: left;
      font-weight: bolder;
    }
  }
  @media screen and (max-width: 1200px) {
    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
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
    /* text-align: center; */

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
  .bottom_cards > div {
    max-width: 1400px;
    margin: auto;
    display: flex;
  }
  @media screen and (max-width: 1200px) {
    .bottom_cards > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default NewsPage;
