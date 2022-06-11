import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Link to="/">
        <ArrowBack />
      </Link>
      <div className="inputs">
        <h1>Contact me</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" />
      </div>
    </div>
  );
};

export default Contact;
