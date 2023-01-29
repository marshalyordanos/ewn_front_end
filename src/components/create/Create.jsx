import React, { useEffect } from "react";
import "./create.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { HeaderAdmin } from "../header/HeaderAdmin";
import { useSelector } from "react-redux";
import { user } from "../../redux/authReducer";
import styled from "styled-components";
import { Header } from "../header/Header";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);

  const [option, setOption] = useState(true);
  const users = useSelector(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newPost = {
    //   username: user.username,
    //   title,
    //   desc,
    //   file,
    // };

    try {
      console.log("fff", file);
      const data = new FormData();
      // const filename = Date.now() + f4ile.name;
      data.append("title", title);
      data.append("desc", desc);
      data.append("username", users.username);
      data.append("video", video);
      data.append("photo", file);

      // try {
      //   await axios.post("/upload", data);
      // } catch (error) {
      //   console.log(error);
      // }

      const res = await axios.post("http://localhost:5000/posts", data);
      console.log("========---", res);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {}
  };

  return (
    <Container>
      <Header />
      <section className="newPost">
        <div className="container boxItems">
          <div className="img ">
            {file && <img src={URL.createObjectURL(file)} alt="images" />}
            {video && (
              <video width="320" height="240" controls>
                <source src={URL.createObjectURL(video)} type="video/mp4" />
              </video>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="menu_con">
              <p
                onClick={() => setOption(true)}
                className={option ? "active" : "menu"}>
                Image
              </p>
              <p
                onClick={() => setOption(false)}
                className={!option ? "active" : "menu"}>
                Video
              </p>
            </div>
            <div className="inputfile flexCenter">
              <label htmlFor="inputfile">
                <IoIosAddCircleOutline />
              </label>
              {option ? (
                <input
                  type="file"
                  id="inputfile"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              ) : (
                <input
                  type="file"
                  accept="video/*"
                  id="inputfile"
                  style={{ display: "none" }}
                  onChange={(e) => setVideo(e.target.files[0])}
                />
              )}
            </div>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setDesc(e.target.value)}></textarea>
            <button className="button">Create Post</button>
          </form>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  .menu_con {
    display: flex;
    gap: 20px;
    .menu {
      padding: 5px 20px;
      cursor: pointer;
    }
    .active {
      padding: 5px 20px;
      background-color: green;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
