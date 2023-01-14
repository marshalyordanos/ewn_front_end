import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import { User } from "./User";
import { navadmin } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const HeaderAdmin = () => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", function () {
    // const header = this.document.querySelector(".header")
    // header.classList.toggle("active", this.window.scrollY > 100)
    if (this.window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            {scroll ? (
              <img src={"/logo1.png"} alt="logo" width="100px" />
            ) : (
              <img src={"/logo2.png"} alt="logo" width="100px" />
            )}
          </div>
          <nav>
            <ul>
              {navadmin.map((link) => (
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
