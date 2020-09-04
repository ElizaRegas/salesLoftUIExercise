import React from "react";
import { Row, Col, InputGroup } from "react-bootstrap";
import {
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";

const BodyHeader = () => {
  return (
    <Row>
      <Col xs={12}>
        <InputGroup id="bodyHeader" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FontAwesomeIcon id="caretDown" icon={faCaretDown} />
          </InputGroup.Prepend>
        </InputGroup>{" "}
      </Col>
    </Row>
  );
};

export default BodyHeader;
