import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return()=>{
        window.removeEventListener("scroll");
    }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fYaY9LEjaK0yhT3WsncM36y6MD9sLCHU4A&usqp=CAU'
        alt='User'
      />
    </div>
  );
}

export default Nav;