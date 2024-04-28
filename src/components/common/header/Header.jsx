import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import RecentCard from "../../home/recent/RecentCard"
import Hero from "../../home/hero/Hero"
import Recent from "../../home/recent/Recent"

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [cartCount, setCartCount] = useState(0);
    const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/Logo.png.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>{cartCount}</span> Cart
            </h4>
            
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
      <Hero></Hero>
      <Recent></Recent>
      <RecentCard setCartCount={updateCartCount} />
    </>
  )
}

export default Header
