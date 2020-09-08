import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
import "../../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../AppContext";
import utils from "../../utils/utils.js";

const EmailItem = ({ message, monthName, emailTimeStamp }) => {
  const [emailIsOpen, setEmailIsOpen] = useState(false);

  const changeEmailView = () => {
    setEmailIsOpen(!emailIsOpen);
  };

  return (
    <AppContext.Consumer>
      {({ handleCheckboxToggle, filteredMessages, setFilteredMessages }) => {
        return (
          <Row onClick={changeEmailView}>
            <Col xs={12}>
              <Card
                className="emailMessage"
                style={{ height: emailIsOpen ? "100%" : "50px" }}
              >
                <Row>
                  <Col xs={2}>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        checked={message.isSelected}
                        id="emailCheckbox"
                        onChange={(e) => {
                          utils.handleCheckboxToggle(
                            "individualCheckbox",
                            message.id,
                            e.target.checked,
                            filteredMessages,
                            setFilteredMessages
                          );
                        }}
                      />
                      <Star star="1" className="emailStar" />
                      <FontAwesomeIcon
                        id="importantChevron"
                        className="emailIcons"
                        icon={faChevronRight}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={3}>{message.sender}</Col>
                  <Col xs={5} className="subjectLine">
                    {message.subject}
                  </Col>
                  <Col xs={2}>
                    <span>
                      {monthName} {emailTimeStamp.getDate()}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Card.Body
                    dangerouslySetInnerHTML={{ __html: message.body }}
                  />
                </Row>
              </Card>
            </Col>
          </Row>
        );
      }}
    </AppContext.Consumer>
  );
};

export default EmailItem;
