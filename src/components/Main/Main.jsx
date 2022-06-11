import {  GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";


import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="text">
          <h1>Giorgi Qoridze</h1>
          <p>Full Stack Developer</p>
          <div className="icons">
            <GitHub className="icon" />
            <LinkedIn className="icon" />
          </div>
          <div className="buttons">
            <button>
              <Link to="/contact"> Contact me </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
