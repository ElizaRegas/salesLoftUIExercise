import React from "react";
import { Dropdown, Button, ButtonGroup, Row } from "react-bootstrap";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mailboxDivInfo from "../../mailboxDivInfo.json";
import "../../css:scss/App.css";

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
    }
    return icon;
  };

  return (
    <div id="mailboxDiv" className="bottomBoxShadow">
      <div id="staticMailbox">
        {mailboxDivInfo.map((mailbox) => {
          return (
            <Row className="mailboxRow">
              <FontAwesomeIcon
                className="mailboxIcon"
                icon={getIcon(mailbox.icon)}
              />
              {mailbox.name}
            </Row>
          );
        })}
      </div>
      <div>
        <Button id="categoryDropdownCaret" className="button">
          <FontAwesomeIcon icon={faCaretDown} />
        </Button>
        <FontAwesomeIcon id="faTag" icon={faTag} />
        <span id="catogoriesText">Categories</span>
      </div>
      <div className="categoryItems">
        <FontAwesomeIcon icon={faPlane} />
        <span className="categoryItemsText">Travel</span>
      </div>
      <div className="categoryItems">
        <FontAwesomeIcon icon={faBuilding} />
        <span className="categoryItemsText">Work</span>
      </div>
    </div>
  );
};

export default MailboxDiv;
