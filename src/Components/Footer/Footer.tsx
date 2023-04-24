import React from 'react'
import iconin from '../../assets/img/iconin.png'
import insta from '../../assets/img/insta.png'
import twitter from '../../assets/img/twitter.png'
import face from '../../assets/img/face.png'
import git from '../../assets/img/git.png'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
    <div>
      <div className="align-items-center">
     
        <div  className="text-center text-sm-end">
          <div className="social-icon">
            <a href="#"><img src={iconin} alt="Icon" /></a>
            <a href="#"><img src={insta} alt="Icon" /></a>
            <a href="#"><img src={twitter} alt="Icon" /></a>
            <a href="#"><img src={face} alt="Icon" /></a>
            <a href="#"><img src={git} alt="Icon" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
