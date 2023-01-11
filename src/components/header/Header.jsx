import React, { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../../redux/authReducer";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  const users = useSelector(user);
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <img src={logo} alt="logo" width="100px" />
          </div>
          <nav>
            <ul>
              {!users?.admin &&
                nav.map((link) => {
                  if (link.text == "Members") {
                    return;
                  } else if (link.text == "Post Blogs") {
                    return;
                  }
                  return (
                    <li key={link.id}>
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  );
                })}
              {users?.admin &&
                nav.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
