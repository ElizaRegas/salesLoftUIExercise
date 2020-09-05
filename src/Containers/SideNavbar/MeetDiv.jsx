import React from "react";
import { Button } from "react-bootstrap";
import { faVideo, faKeyboard, faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
      <div className="meetDiv bottomBoxShadow">
        <h5>Hangouts</h5>
        <Button id="hangoutProfilePic">
          <img id="hangoutProfilePicImg" src={profilePic} alt="user profile" />{" "}
        </Button>
        <span id="hangoutName">Elizabeth</span>
        <FontAwesomeIcon className="faCaretDown" icon={faCaretDown} />
      </div>
    </div>
  );
};

export default MeetDiv;
