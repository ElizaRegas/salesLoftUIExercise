import React from "react";
import { Row, Col, InputGroup, Button } from "react-bootstrap";
import {
  faCaretDown,
  faRedo,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css:scss/App.css";
import CategoryHeader from "./CategoryHeader";

const BodyHeader = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <InputGroup id="bodyHeader" className="mb-3 bottomBoxShadow">
            <InputGroup.Prepend>
              <InputGroup.Checkbox className="button" aria-label="Checkbox for following text input" />
              <FontAwesomeIcon id="caretDown" icon={faCaretDown} />
              <Button
                id="redoButton"
                className="button"
                // onClick={() => setIsSidebarOpen(true)}
              >
                <FontAwesomeIcon id="redo" className="bodyHeaderIcon" icon={faRedo} />
              </Button>
              <Button
                className="button"
                // onClick={() => setIsSidebarOpen(true)}
              >
                <FontAwesomeIcon className="bodyHeaderIcon" icon={faEllipsisV} />
              </Button>
            </InputGroup.Prepend>
          </InputGroup>{" "}
        </Col>
      </Row>
      {/* <CategoryHeader /> */}
    </div>
  );
};

export default BodyHeader;
