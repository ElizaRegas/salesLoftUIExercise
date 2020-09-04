import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { faCog, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import gmailLogo from "../../images/gmailLogo.png";
import hamburger from "../../images/hamburger.png";
import profilePic from "../../images/profilePic.png";
import "../../App.css";

const TopNavbar = () => {
  return (
    <Row id="topNavbar">
      <Col xs={2}>
        <Button id="hamburgerButton" className="button">
          <img id="hamburger" src={hamburger} alt="hamgburger menu icon" />{" "}
        </Button>
        <img id="gmailLogo" src={gmailLogo} alt="mail logo" />
        <h1 id="header">mail</h1>
      </Col>
      <Col xs={8}>
        <SearchBar />
      </Col>
      <Col id="rightSideButtons" xs={2}>
        <Button
          id="moreButton"
          className="button"
          // onClick={() => setIsSidebarOpen(true)}
        >
            <FontAwesomeIcon icon={faEllipsisV} />
        </Button>
        <Button
          id="settingsCog"
          className="button"
          // onClick={() => setIsSidebarOpen(true)}
        >
          <FontAwesomeIcon icon={faCog} />
        </Button>
        <Button
          id="googleGridButton"
          className="button"
          // onClick={() => setIsSidebarOpen(true)}
        >
          <FontAwesomeIcon icon={faEllipsisV} />
          <FontAwesomeIcon icon={faEllipsisV} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </Button>
        <Button
          id="profilePic"
          // onClick={() => setIsSidebarOpen(true)}
        >
          <img id="profilePicImg" src={profilePic} alt="user profile" />{" "}
        </Button>
      </Col>
    </Row>
  );
};

export default TopNavbar;
