import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import logo from "../Images/MyNew.png";


function NavBar() {


  return (
    <div className="NavBar nav d-flex justify-content-around justify-content-lg-between">
      <div className="ms-md-5">
        <Link to="/">
          <Image src={logo} alt="logo" className="logo" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
