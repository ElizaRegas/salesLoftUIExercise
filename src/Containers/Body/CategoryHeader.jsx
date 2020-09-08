import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faPlane,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../AppContext";

const CategoryHeader = () => {
  return (
    <AppContext.Consumer>
      {({ emailFilters, setEmailFilters }) => {
        return (
          <div>
            <Row id="categoryHeaders">
              <Col
                xs={2}
                md={3}
                className={
                  emailFilters.value === "inbox" && emailFilters.type === "tag"
                    ? "activeInbox"
                    : "inactiveCategoryTab"
                }
                onClick={() =>
                  setEmailFilters({
                    type: "tag",
                    value: "inbox",
                  })
                }
              >
                <FontAwesomeIcon className="mailboxIcon" icon={faInbox} />
                <span>Inbox</span>
              </Col>
              <Col
                xs={2}
                md={3}
                className={
                  emailFilters.value === "travel" && emailFilters.type === "tag"
                    ? "activeTravel"
                    : "inactiveCategoryTab"
                }
                onClick={() =>
                  setEmailFilters({
                    type: "tag",
                    value: "travel",
                  })
                }
              >
                <FontAwesomeIcon className="mailboxIcon" icon={faPlane} />
                <span>Travel</span>
              </Col>
              <Col
                xs={2}
                md={3}
                className={
                  emailFilters.value === "work" && emailFilters.type === "tag"
                    ? "activeWork"
                    : "inactiveCategoryTab"
                }
                onClick={() =>
                  setEmailFilters({
                    type: "tag",
                    value: "work",
                  })
                }
              >
                <FontAwesomeIcon className="mailboxIcon" icon={faBuilding} />
                <span>Work</span>
              </Col>
            </Row>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CategoryHeader;
