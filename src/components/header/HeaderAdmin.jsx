import React, { useContext } from "react"
import logo from "../../assets/images/logo.svg"
import "./header.css"
import { User } from "./User"
import { navadmin } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const HeaderAdmin = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width='100px' />
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
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
