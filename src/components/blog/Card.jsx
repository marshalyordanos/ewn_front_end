import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = ({ posts }) => {
  // create file garnebelema
  const PublicFlo = "http://localhost:5000/images/";
  console.log("pots", posts);
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {posts.map((item) => (
            <div className="box boxItems" key={item.id}>
              {/* first ma yo  <div className='img'>{item.photo && <img src={item.cover} alt='' />}</div>*/}
              <div className="img">
                {item?.video && item?.video != "null" && (
                  <video width="320" height="240" controls>
                    <source
                      src={"http://localhost:5000" + item?.video}
                      type="video/mp4"
                    />
                  </video>
                )}
                {item?.photo && item.photo != "null" && (
                  <img src={"http://localhost:5000" + item?.photo} alt="" />
                )}
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags style={{ color: "green" }} className="icon" />
                  {item.categories.map((c) => (
                    <a href="/">#{c.name}</a>
                  ))}
                </div>
                <Link to={`/post/${item._id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p style={{ color: "black" }}>{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle
                    style={{ color: "green" }}
                    className="icon"
                  />{" "}
                  <label htmlFor="">
                    {new Date(item.createdAt).toDateString()}
                  </label>
                  <AiOutlineComment
                    style={{ color: "green" }}
                    className="icon"
                  />{" "}
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt
                    style={{ color: "green" }}
                    className="icon"
                  />{" "}
                  <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
