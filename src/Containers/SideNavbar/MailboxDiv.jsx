import React from "react";
import { Button, Row } from "react-bootstrap";
import {
  faInbox,
  faStar,
  faClock,
  faChevronRight,
  faPaperPlane,
  faStickyNote,
  faTag,
  faCaretDown,
  faBuilding,
  faPlane,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mailboxDivInfo from "../../mailboxDivInfo.json";
import AppContext from "../../AppContext.jsx";
import "../../css/App.css";

const MailboxDiv = () => {
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
      {({ setEmailFilters }) => {
        return (
          <div id="mailboxDiv" className="bottomBoxShadow">
            <div id="staticMailbox">
              {mailboxDivInfo.map((mailbox) => {
                return (
                  <Row
                    className="mailboxRow"
                    onClick={
                      mailbox.clickHandler
                        ? () => setEmailFilters(mailbox.clickHandler)
                        : () => {}
                    }
                  >
                    <FontAwesomeIcon
                      className="mailboxIcon"
                      icon={getIcon(mailbox.icon)}
                    />
                    {mailbox.name}
                  </Row>
                );
              })}
            </div>
            <div
              onClick={() =>
                setEmailFilters({
                  type: "tag",
                  value: "inbox",
                })
              }
            >
              <Button id="categoryDropdownCaret" className="button">
                <FontAwesomeIcon icon={faCaretDown} />
              </Button>
              <FontAwesomeIcon id="faTag" icon={faTag} />
              <span id="categoryText">Categories</span>
            </div>
            <div
              className="categoryItems"
              onClick={() =>
                setEmailFilters({
                  type: "tag",
                  value: "travel",
                })
              }
            >
              <FontAwesomeIcon icon={faPlane} />
              <span className="categoryItemsText">Travel</span>
            </div>
            <div
              className="categoryItems"
              onClick={() =>
                setEmailFilters({
                  type: "tag",
                  value: "work",
                })
              }
            >
              <FontAwesomeIcon icon={faBuilding} />
              <span className="categoryItemsText">Work</span>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default MailboxDiv;
