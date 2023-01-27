import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../../redux/authReducer";
import { Button, Dropdown } from "antd";

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", function () {
    // const header = this.document.querySelector(".header");
    // header.classList.toggle("active", this.window.scrollY > 100);
    if (this.window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const users = useSelector(user);
  const news = [
    {
      key: "1",
      label: (
        <Link rel="Board Members" to="/news">
          Latest News
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="Parterns" to="#">
          Parterns
        </Link>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <Link rel="Board Members" to="/about">
          Board Members
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="Parterns" href="/parterns">
          Parterns
        </Link>
      ),
    },
  ];

  const kkkk = [
    {
      key: "1",
      label: (
        <Link rel="Blogs" to="/archive">
          Blogs
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="News Letters" to="#">
          News Letters
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="Gallary" to="#">
          Gallary
        </Link>
      ),
    },
  ];

  console.log("33333333333333333333333333333333333333333", users);

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            {scroll ? (
              <img src={"/logo1.png"} alt="logo" width="100px" />
            ) : (
              <img src={"/logo1.png"} alt="logo" width="100px" />
            )}
          </div>
          <div className="account flexCenter">
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                  {users?.admin && <NavLink to="/memberlist">Members</NavLink>}

                  <NavLink to="/membership">Membership</NavLink>
                  <NavLink to="/program">Program</NavLink>
                  {users?.admin && <NavLink to="/create">Post Blogs</NavLink>}

                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomLeft"
                    arrow>
                    <a href="#">About Us</a>
                  </Dropdown>

                  <NavLink to="/program">Our Programs</NavLink>
                  {/* <NavLink to="/blog">Blog</NavLink> */}
                  <Dropdown
                    menu={{
                      items: news,
                    }}
                    placement="bottomLeft"
                    arrow>
                    <a href="#">News</a>
                  </Dropdown>
                  <Dropdown
                    menu={{
                      items: kkkk,
                    }}
                    placement="bottomLeft"
                    arrow>
                    <a href="#">Archive</a>
                  </Dropdown>
                  <NavLink to="/contactus">Contact</NavLink>
                  {users?.admin && <NavLink to="/payment">Payment</NavLink>}
                </li>
              </ul>
            </nav>
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
