import React from "react";
import { NavLink } from "react-router-dom";
import s from './footer.module.scss'
const Footer = () => {
return (
  <div>
    <div className={s.footer}>
        <div className={s.footerWrapper}>
        <NavLink style={{ textDecoration: 'none' }}  to='../HomePage/HomePage.jsx'>
          <b >Home</b>
        </NavLink>
          
        <NavLink style={{ textDecoration: 'none' }} to='../ShopPage/ShopPage.jsx'>
          <b>Shop</b>
        </NavLink>

        <NavLink style={{ textDecoration: 'none' }} to='../WorkshopsPage/Workshop.jsx'>
          <b>Workshops</b>
        </NavLink>

        <NavLink style={{ textDecoration: 'none' }} to='../SpacesPage/Spaces.jsx'>
          <b>Spaces</b>
        </NavLink>
          
        <NavLink style={{ textDecoration: 'none' }} to='../AboutPage/AboutPage.jsx'>
          <b>About</b>
        </NavLink>
        
        <NavLink style={{ textDecoration: 'none' }} to='../ContactPage/Contact.jsx'>
          <b>Contact</b>
        </NavLink>
        </div >
        <p className={s.contact}>  PHONE: +45 30 22 82 20 EMAIL: kaja@kajaskytte.dk CVR: 36353481</p>
        <img src='/Img/Footer_flower.png'/>
        
          <div className={s.discount}>
            <p> GET 10% OFF SIGN UP FOR</p>
            <p> YOUR NEXT ORDER A NEWSLETTER</p>
          </div>
          <div className={s.payItems}>
            <img className={s.jcb} src='/Img/jcb.png'/>
            <img className={s.visa} src='Img/visa.png'/>
            <img src='Img/mobilepay.png'/>
            <img src='Img/amex.png'/>
          </div>
      </div>
        
      
      <img src='/Img/line.png'/>
  </div>
  
)
}

export default Footer