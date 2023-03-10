import React, { useContext, useEffect, useState } from "react";
import "./details.css";
import "../../components/header/header.css";
import img from "../../assets/images/product1.jpg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { Context } from "../../context/Context";
import { Header } from "../../components/header/Header";
import styled from "styled-components";

export const DetailsPages = () => {
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];

  // step 4 for update
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState(false);

  //setp 2
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res);
      //setp 2
      setPost(res.data);
      //setp 4
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  // step 3
  // file create garne time add garne
  const PublicFlo = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  // setp 4
  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (error) {}
  };
  console.log("blog", post);

  return (
    <Container>
      <Header />
      <section className="singlePage">
        <div className="container">
          <div className="col-lg-6">
            {post.photo && post.photo != "null" && (
              <img
                className="image"
                src={"http://localhost:5000" + post.photo}
                alt=""
              />
            )}
            {post?.video && (
              <div className="video_con">
                <video controls>
                  <source
                    src={"http://localhost:5000" + post?.video}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </div>
          <div className="right">
            {post.username === user?.username && (
              <div className="buttons">
                <button className="button" onClick={() => setUpdate(true)}>
                  <BsPencilSquare />
                </button>
                <button className="button" onClick={handleDelete}>
                  <AiOutlineDelete />
                </button>
                {update && (
                  <button className="button" onClick={handleUpdate}>
                    Update
                  </button>
                )}
              </div>
            )}
            <div className="con">
              {update ? (
                <input
                  type="text"
                  value={title}
                  className="updateInput"
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <h1>{post.title}</h1>
              )}
              {update ? (
                <textarea
                  value={desc}
                  cols="30"
                  rows="10"
                  className="updateInput"
                  onChange={(e) => setDesc(e.target.value)}></textarea>
              ) : (
                <p className="desc">{post.desc}</p>
              )}

              <p>
                Author:{" "}
                <Link to={`/?user=${post.username}`}>{post.username}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  .image {
    max-height: 500px;
    object-fit: cover;
  }
  /* .desc {
    max-width: ;
  } */
  .right {
    margin-top: 0;
  }
  .con {
    /* box-shadow: 4px 4px 4px 4px lightgray; */
    padding: 10px 20px;
    border-radius: 10px;
  }
  .container {
    display: flex;
    gap: 20px;
  }
  .video_con {
    width: 44vw;
    /* border: 1px solid red; */
    /* overflow: hidden; */
  }
  .video_con video {
    width: 100%;
    /* min-width: 300px; */
  }
  @media screen and (max-width: 1200px) {
    .container {
      display: block;
      gap: 20px;
    }
    .video_con {
      width: 80vw;
      /* border: 1px solid red; */
      /* overflow: hidden; */
    }
    .video_con video {
      width: 100%;
      /* min-width: 300px; */
    }
  }
`;
