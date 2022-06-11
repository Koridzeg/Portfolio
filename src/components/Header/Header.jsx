import { Close, MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Header.scss";
import { Link as Scroll } from "react-scroll";
import logo from "../../imgs/GQ2.png"

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>

      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <Scroll to="/" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Scroll>
          </li>
          <li>
            <Scroll
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Scroll>
          </li>
          <li>
            <Scroll
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Scroll>
          </li>

        </ul>
      </nav>

      <div className="changer">
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
