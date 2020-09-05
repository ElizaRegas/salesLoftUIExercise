import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faPlane,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const CategoryHeader = () => {
  const [activeCategory, setActiveCategory] = useState("inbox");


  return (
    <div>
      <Row id="categoryHeaders">
        <Col xs={3} className={activeCategory ? "activeInbox" : ""} onClick={() => setActiveCategory("inbox")}>
          <FontAwesomeIcon className="mailboxIcon" icon={faInbox} />
          <span>Inbox</span>
        </Col>
        <Col xs={3} onClick={() => setActiveCategory("travel")}>
          <FontAwesomeIcon className="mailboxIcon" icon={faPlane} />
          <span>Travel</span>
        </Col>
        <Col xs={3} onClick={() => setActiveCategory("work")}>
          <FontAwesomeIcon className="mailboxIcon" icon={faBuilding} />
          <span>Work</span>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryHeader;
