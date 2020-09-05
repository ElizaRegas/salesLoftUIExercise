import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from "../../images/profilePic.png";

const MeetDiv = () => {
  return (
    <div>
      <div className="meetDiv bottomBoxShadow">
        <h5>Meet</h5>
        <div className="meetItemDiv">
          <FontAwesomeIcon className="mailboxIcon" icon={faVideo} />
          <span className="meetItemText">Start a meeting</span>
        </div>
        <div className="meetItemDiv">
          <FontAwesomeIcon className="mailboxIcon" icon={faKeyboard} />
          <span className="meetItemText">Join a meeting</span>
        </div>
      </div>
      <div className="meetDiv">
        <h5>Hangouts</h5>
        <Button id="hangoutProfilePic">
          <img id="hangoutProfilePicImg" src={profilePic} alt="user profile" />{" "}
        </Button>
      </div>
    </div>
  );
};

export default MeetDiv;
