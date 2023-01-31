import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "../../redux/authReducer";
import { Button, Dropdown } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import styled from "styled-components";

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
    // {
    //   key: "2",
    //   label: (
    //     <Link rel="Parterns" to="#prt">
    //       Parterns
    //     </Link>
    //   ),
    // },
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
    // {
    //   key: "2",
    //   label: (
    //     <Link rel="Parterns" to="prt">
    //       Parterns
    //     </Link>
    //   ),
    // },
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

  const list = [
    {
      key: "1",
      label: (
        <Link rel="Blogs" to="/">
          Home
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="News Letters" to="/membership">
          Membership
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="Gallary" to="/about">
          About us
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link rel="Gallary" to="/program">
          Our Program
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="Gallary" to="/news">
          News
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="Gallary" to="/archive">
          Blogs
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="Gallary" to="/payment">
          Payment
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="Gallary" to="/contactus">
          Contact
        </Link>
      ),
    },
  ];

  console.log("33333333333333333333333333333333333333333", users);

  return (
    <Container>
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
            <Dropdown
              menu={{
                items: list,
              }}
              placement="bottom"
              arrow>
              <div className="menu">
                <MenuUnfoldOutlined style={{ fontSize: 33, color: "green" }} />
              </div>
            </Dropdown>

            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                  {users?.admin && <NavLink to="/memberlist">Members</NavLink>}

                  <NavLink to="/membership">Membership</NavLink>
                  {/* <NavLink to="/program">Program</NavLink> */}
                  {users?.admin && <NavLink to="/create">Post Blogs</NavLink>}

                  <NavLink to="/about">About Us</NavLink>

                  <NavLink to="/program">Our Programs</NavLink>
                  {/* <NavLink to="/blog">Blog</NavLink> */}

                  <NavLink to="/news">News</NavLink>
                  <Dropdown
                    menu={{
                      items: kkkk,
                    }}
                    placement="bottomLeft"
                    arrow>
                    <a href="#">Archive</a>
                  </Dropdown>
                  {!users?.admin && <NavLink to="/payment">Payment</NavLink>}

                  <NavLink to="/contactus">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <User />
          </div>
        </div>
      </header>
    </Container>
  );
};

const Container = styled.div`
  .menu {
    display: none;
    padding: 10px;
  }
  .menu:hover {
    background-color: whitesmoke;
    padding: 10px;
  }
  @media screen and (max-width: 765px) {
    .menu {
      display: block;
    }
  }
`;
