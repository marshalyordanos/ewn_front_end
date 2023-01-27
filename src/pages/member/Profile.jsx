import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import IconOne from "../../assets/profile/one.svg";
import IconTwo from "../../assets/profile/two.svg";
import IconThree from "../../assets/profile/three.svg";
import IconFour from "../../assets/profile/four.svg";
import IconSix from "../../assets/profile/six.svg";
import { useSelector } from "react-redux";
import { user } from "../../redux/authReducer";

const Profile = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
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
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit sequi
          exercitationem. Sit suscipit deserunt hic voluptatem dolores
          distinctio obcaecati ullam? Dolore dicta placeat, quas repellendus
          odio rerum. Recusandae, delectus. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Cum vero exercitationem necessitatibus
          est laudantium inventore quam illum corporis nihil optio nemo ea
          labore, beatae asperiores ipsa ullam esse dolore expedita! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ex ad laboriosam,
          deserunt eius fugiat tenetur perspiciatis? Doloremque animi quo quas,
          iure necessitatibus veniam eius saepe cumque, corporis reiciendis
          quidem nihil.
        </h2>
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
              <img src={IconTwo} alt="" />
              <p>Ethiopia, Addi Ababa, Nifas silk, Woreda 4</p>
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
    </Container>
  );
};
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
