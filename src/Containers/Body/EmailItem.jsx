import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
import "../../css:scss/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EmailItem = ({ message, monthName, emailTimeStamp }) => {
  const [emailIsOpen, setEmailIsOpen] = useState(false);

  const changeEmailView = () => {
    setEmailIsOpen(!emailIsOpen);
  }

  return (
    <Row onClick={changeEmailView}>
      <Col xs={10}>
        <Card className="emailMessage" style={{height: emailIsOpen ? "100%" : "50px"}}>
          <Row>
            <Col xs={2}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" id="emailCheckbox" />
                <Star star="1" id="emailStar" />
                <FontAwesomeIcon id="importantChevron" className="emailIcons" icon={faChevronRight} />
              </Form.Group>
            </Col>
            <Col xs={3}>{message.sender}</Col>
            <Col xs={5} className="subjectLine">
              {message.subject}
            </Col>
            <Col xs={2}>
              {monthName} {emailTimeStamp.getDate()}
            </Col>
          </Row>
          <Row>
            <Card.Body dangerouslySetInnerHTML={{ __html: message.body }} />
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default EmailItem;
