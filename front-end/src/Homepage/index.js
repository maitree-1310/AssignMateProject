import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../NavBar";
import assignment from "../Images/coders-campus-assignment-example.png";

import './homepage.css';
import { Route } from "react-router-dom";

const Homepage = () => {
  
  return (
    <div className="main-container">
      <NavBar />
      <div className="wrapper">
        <div className="top-half">
          <Container >
              <h1 className="welcome">Welcome Fellow Students</h1>
              <h2>
                This community Assignment Submission Form is a tool to make turning in assignments more convenient. 
                Students of out Information Technology Department can insert Github links of their code for each individual assignment so a reviewer can clone code.
              </h2>
            </Container>
          </div>
          <div className="bottom-half">
            <Container className="bottom-container">
              <h2 className="welcome-text">With these tools students can get personalized video feedback from coding experts. <span className="right-arrow">&#8594;</span> </h2>
              <img src={assignment} alt="assignment-example" className="assignment" />
            </Container>
          </div>
      </div>
    </div>
  );
};

export default Homepage;
