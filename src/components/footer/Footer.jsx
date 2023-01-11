import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import "./footer.css"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex footer'>
          <p className="txtfooter">Ethiopian Womens In Energy - All right reserved - Design & Developed by kelemu ketsela</p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
