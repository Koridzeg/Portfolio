import React from "react";
import "./Projects.scss"
import react from "../../imgs/react.png"
import livechat from "../../imgs/livechat.png"
import booking from "../../imgs/booking.png"


const Projects = () => {


  return (
    <div className="projects" id="projects">
      <div className="projects__section">
        <div className="cards">
          <img src={livechat} alt="" />
          <a href='https://github.com/Koridzeg/News-app'> <button>See Project</button> </a>
        </div>

        <div className="cards">
          <img src={booking} alt="" />
          <button>See Project</button>
        </div>

        <div className="cards">
          <img src={react} alt="" />
          <button>See Project</button>
        </div>

        <div className="cards">
          <img src={react} alt="" />
          <button>See Project</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
