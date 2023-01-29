import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import IconOne from "../../assets/profile/one.svg";
import IconTwo from "../../assets/profile/two.svg";
import IconThree from "../../assets/profile/three.svg";
import IconFour from "../../assets/profile/four.svg";
import IconSix from "../../assets/profile/six.svg";
import { useSelector } from "react-redux";
import { user } from "../../redux/authReducer";
import { EnvironmentOutlined } from "@ant-design/icons";

const Profile = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const navigate = useHistory();
  const users = useSelector(user);
  console.log("============================", users);

  useEffect(() => {
    const func = async () => {
      const res = await axios.get("http://localhost:5000/members/" + id);
      console.log("========---", res.data.user); //l
      setDatas(res.data?.user);
    };
    func();
  }, []);
  console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[[", users);
  return (
    <Container>
      <Header />
      <div className="first_con">
        <div className="first_con_decor">
          <img className="one" src="/img/border/one.png" alt="" />
          {/* <img src="/img/border/two.png" alt="" /> */}
        </div>
      </div>
      <div className="top">
        <div className="image">
          <img src={"http://localhost:5000" + users?.photo} alt="" />
        </div>
        <div className="top__right">
          <h1>{users.username}</h1>
          <p>Employed :At {users?.company_name}</p>
          <h5>Worked for {users?.year} Years</h5>
        </div>
      </div>
      <About>
        <h1>About Bezawit</h1>
        <h2>{users?.desc}</h2>
      </About>
      <div className="about">
        <Profile1>
          <div className="address_header">
            <h1>Profile</h1>

            <img src={IconSix} alt="" />
          </div>
          <div className="profile_body">
            <div>
              <div>
                <p>Name: </p>
                <span>{users?.username}</span>
              </div>
              <div>
                {" "}
                <p>Age: </p>
                <span>{23}</span>
              </div>
              <div>
                <p>Education Level: </p>
                <span>BSC Degree</span>
              </div>
              <div>
                <p>Member Type: </p>
                <span>{users?.memberType}</span>
              </div>
              <div>
                <p>Employment: </p>
                <span>{users?.employ_type}</span>
              </div>
              <div>
                <p>Works as: </p>
                <span>N/A</span>
              </div>
            </div>
          </div>
        </Profile1>
        <Adress className="address">
          <div className="address_header">
            <h1>Address</h1>

            <img src={IconOne} alt="" />
          </div>
          <div className="address_body">
            <div>
              <div
                style={{
                  border: "2px solid green",
                  // padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                }}>
                <EnvironmentOutlined
                  style={{ fontSize: 35, color: "#fec034" }}
                />
              </div>
              <p>{users?.residence_address}</p>
            </div>
            <div>
              <img src={IconTwo} alt="" />
              <p>{users?.phone}</p>
            </div>
            <div>
              <img src={IconThree} alt="" />
              <p>{users?.phone}</p>
            </div>
            <div>
              <img src={IconFour} alt="" />
              <p>{users?.email}</p>
            </div>
          </div>
        </Adress>
      </div>
      <Btn>
        <button
          onClick={() => {
            navigate.push("/account");
          }}>
          Update
        </button>
      </Btn>
    </Container>
  );
};

const Btn = styled.div`
  display: flex;
  justify-content: center;
  button,
  a {
    color: white;
    border: 1px solid #2d6834;
    background-color: #2d6834;
    padding: 10px 100px;
    border-radius: 40px;
    font-size: 20px;
    margin-top: 10px;
  }
  button:hover {
    color: #2d6834;
    background-color: white;
  }
`;
const Profile1 = styled.div`
  .profile_body {
    width: 440px;
    padding: 15px;
    > div {
      margin-top: 10px;
      > div {
        margin-top: 15px;

        display: flex;
        align-items: center;

        p {
          font-size: 18px;
          min-width: 170px;
          font-size: 22px;
          margin: 0;
          color: #fec034;
          text-align: end;
          margin-right: 10px;
        }
        span {
          color: #2d6834;
          font-size: 22px;
        }
        img {
          width: 50px;
        }
      }
    }
  }
  .address_header {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-bottom: 20px;
    h1 {
      color: #2d6834;
      font-weight: 400;
      font-size: 31px;
    }
    img {
      width: 50px;
    }
  }
`;

const Adress = styled.div`
  .address_body {
    border: 2px solid #2d6834;
    border-radius: 20px;
    width: 440px;
    padding: 15px;
    > div {
      margin-top: 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        font-size: 18px;
      }
      img {
        width: 50px;
      }
    }
  }
  .address_header {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-bottom: 20px;
    h1 {
      color: #2d6834;
      font-weight: 400;
      font-size: 31px;
    }
    img {
      width: 50px;
    }
  }
`;

const About = styled.div`
  max-width: 820px;
  /* border: 1px solid red; */
  margin: auto;
  margin-top: 30px;

  h1 {
    color: #2d6834;
    font-weight: 400;
    font-size: 31px;
  }
  h2 {
    max-width: 800px;
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 1px;
    line-height: 1.2;
    text-align: justify;

    color: #486f4d;
  }
`;

const Container = styled.div`
  .about {
    gap: 50px;
    max-width: 1000px;
    margin: auto;
    margin-top: 60px;
    display: flex;
    /* align-items: center; */
  }
  @media screen and (max-width: 1100px) {
    .about {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .top {
    display: flex;
    max-width: 1000px;
    margin: auto;
    align-items: center;
    justify-content: center;
    gap: 100px;
    /* justify-content: space-between; */
    .image {
      img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    .top__right {
      h1 {
        color: #2d6834;
      }
      p {
        font-size: 18px;
        text-align: center;
        color: #2d6834;
      }
      h5 {
        font-weight: lighter;
        text-align: center;
        font-size: 15px;
      }
    }
  }
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

export default Profile;
