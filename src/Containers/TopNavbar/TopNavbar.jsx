import React from "react";
import { Row, div, Button } from "react-bootstrap";
import { faCog, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import gmailLogo from "../../images/gmailLogo.png";
import hamburger from "../../images/hamburger.png";
import profilePic from "../../images/profilePic.png";
import "../../css/App.css";

const TopNavbar = () => {
  return (
    <Row id="topNavbar">
      <div id="logoSection">
        <Button id="hamburgerButton" className="button">
          <img id="hamburger" src={hamburger} alt="hamgburger menu icon" />{" "}
        </Button>
        <img id="gmailLogo" src={gmailLogo} alt="mail logo" />
        <h1 id="header">mail</h1>
      </div>
      <div>
        <SearchBar id="searchBar" />
      </div>
      <div id="rightSideButtons">
        <Button
          id="moreButton"
          className="button"
        >
            <FontAwesomeIcon icon={faEllipsisV} />
        </Button>
        <Button
          id="settingsCog"
          className="button"
        >
          <FontAwesomeIcon icon={faCog} />
        </Button>
        <Button
          id="googleGridButton"
          className="button"
        >
          <FontAwesomeIcon icon={faEllipsisV} />
          <FontAwesomeIcon icon={faEllipsisV} />
          <FontAwesomeIcon icon={faEllipsisV} />
        </Button>
        <Button
          id="profilePic"
        >
          <img id="profilePicImg" src={profilePic} alt="user profile" />{" "}
        </Button>
      </div>
    </Row>
  );
};

export default TopNavbar;
