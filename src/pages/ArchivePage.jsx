import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import EarlierNewsCard from "../components/EarlierNewsCard";
import { Header } from "../components/header/Header";
import NewsCard from "../components/NewsCard";

const ArchivePage = () => {
  const [posts, setPosts] = useState([]);

  // setp 2
  const { search } = useLocation();
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
          <h1>News Letters</h1>
          <div className="main__row">
            <div className="news_card">
              <NewsCard />
              <NewsCard />
            </div>
            <NewsLetters2>
              <h1>Earlier News Letters</h1>
              <div className="news_card2">
                <EarlierNewsCard />
                <EarlierNewsCard />
                <EarlierNewsCard />
                <EarlierNewsCard />
              </div>
            </NewsLetters2>
          </div>
        </NewsLetters>
      </div>
    </Container>
  );
};

const NewsLetters2 = styled.div`
  max-width: 1400px;
  margin: auto;
  > h1 {
    font-size: 25px;
    color: #fec034;
    /* font-size: 32px; */
    text-align: center;
  }
  .news_card2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
  }
`;

const NewsLetters = styled.div`
  max-width: 1400px;
  margin: auto;
  > h1 {
    color: #2d6834;
    font-size: 32px;
  }
  .news_card {
    margin-top: 40px;
    display: flex;
  }
  .main__row {
    display: flex;
    gap: 20px;
  }
  @media screen and (max-width: 1200px) {
    .main__row {
      display: flex;
      flex-direction: column;
      align-items: center;

      .news_card {
        flex-direction: column;
        align-items: center;
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
    button {
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
`;

export default ArchivePage;
