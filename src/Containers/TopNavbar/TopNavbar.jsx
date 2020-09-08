import React from "react";
import { Row, Button } from "react-bootstrap";
import {
  faCog,
  faEllipsisV,
  faInbox,
  faStar,
  faClock,
  faChevronRight,
  faPaperPlane,
  faStickyNote,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../AppContext.jsx";
import SearchBar from "./SearchBar";
import gmailLogo from "../../images/gmailLogo.png";
import hamburger from "../../images/hamburger.png";
import profilePic from "../../images/profilePic.png";
import menu from "../../menu.json";
import "../../css/App.css";

const TopNavbar = () => {
  const getIcon = (iconText) => {
    let icon;
    switch (iconText) {
      case "faInbox":
        icon = faInbox;
        break;
      case "faStar":
        icon = faStar;
        break;
      case "faClock":
        icon = faClock;
        break;
      case "faChevronRight":
        icon = faChevronRight;
        break;
      case "faPaperPlane":
        icon = faPaperPlane;
        break;
      case "faStickyNote":
        icon = faStickyNote;
        break;
      case "faTrash":
        icon = faTrash;
        break;
      default:
    }
    return icon;
  };

  return (
    <AppContext.Consumer>
      {({ menuIsOpen, setMenuIsOpen, setEmailFilters }) => {
        return (
          <div>
            <Row id="topNavbar">
              <div id="logoSection">
                <Button id="hamburgerButton" className="button">
                  <img
                    id="hamburger"
                    src={hamburger}
                    alt="hamgburger menu icon"
                    onClick={() =>
                      menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
                    }
                  />{" "}
                </Button>
                <img id="gmailLogo" src={gmailLogo} alt="mail logo" />
                <h1 id="header">mail</h1>
              </div>
              <div>
                <SearchBar id="searchBar" />
              </div>
              <div id="rightSideButtons">
                <Button id="moreButton" className="button">
                  <FontAwesomeIcon icon={faEllipsisV} />
                </Button>
                <Button id="settingsCog" className="button">
                  <FontAwesomeIcon icon={faCog} />
                </Button>
                <Button id="googleGridButton" className="button">
                  <FontAwesomeIcon icon={faEllipsisV} />
                  <FontAwesomeIcon icon={faEllipsisV} />
                  <FontAwesomeIcon icon={faEllipsisV} />
                </Button>
                <Button id="profilePic">
                  <img id="profilePicImg" src={profilePic} alt="user profile" />{" "}
                </Button>
              </div>
            </Row>
            {menuIsOpen && (
              <div id="menuItems">
                {menu.map((item) => {
                  return (
                    <Row
                      className="menuItem"
                      onClick={
                        item.clickHandler
                          ? () => setEmailFilters(item.clickHandler)
                          : () => {}
                      }
                    >
                      <FontAwesomeIcon
                        className="mailboxIcon"
                        icon={getIcon(item.icon)}
                      />
                      {item.name}
                    </Row>
                  );
                })}
              </div>
            )}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default TopNavbar;
