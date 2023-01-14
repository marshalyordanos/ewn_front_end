import React, { useContext, useRef, useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { Header } from "../../components/header/Header";
import { login } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import { Alert, Modal } from "antd";

export const Loginuser = () => {
  const userRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("------- ooooooo ----------");
    dispatch(
      login({
        username: userRef.current.value,
        password: passRef.current.value,
      })
    ).then((res) => {
      console.log("kkkkkkkkkk------", res);
      if (res.type == "auth/login/rejected") {
        setError("Invalid passwprd or email");
        setIsModalOpen(true);

        console.log("llllllllllllll=====");
      }
    });
    // window.location.replace("/");
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setError("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setError("");
  };

  return (
    <>
      <Header />
      {error && (
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Alert message={error} type="error" closable />
        </Modal>
      )}
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login as a Member</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Username or email address *</span>
            <input type="text" required ref={userRef} />
            <span>Password *</span>
            <input type="password" required ref={passRef} />
            <button className="button" type="submit">
              Log in
            </button>

            <Link to="/addmember" className="link">
              Register
            </Link>
            <Link to="/login" className="link">
              Login as Admintrator
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
