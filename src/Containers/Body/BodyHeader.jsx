import React from "react";
import { Row, Col, InputGroup, Button } from "react-bootstrap";
import { faCaretDown, faRedo, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css:scss/App.css";

const BodyHeader = () => {
  return (
    <Row>
      <Col xs={12}>
        <InputGroup id="bodyHeader" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FontAwesomeIcon id="caretDown" icon={faCaretDown} />
            <Button
              id="redoButton"
              className="button"
              // onClick={() => setIsSidebarOpen(true)}
            >
            <FontAwesomeIcon id="redo" icon={faRedo} />
            </Button>
            <Button
              className="button"
              // onClick={() => setIsSidebarOpen(true)}
            >
              <FontAwesomeIcon icon={faEllipsisV} />
            </Button>
          </InputGroup.Prepend>
        </InputGroup>{" "}
      </Col>
    </Row>
  );
};

export default BodyHeader;
