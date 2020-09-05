import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import messages from "../../emails.json";
import { Star } from "react-bootstrap-icons";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EmailDisplay = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Container id="hrLineAboveEmail">
      <br />
      {messages.messages.map((message) => {
        const emailTimeStamp = new Date(`${message.date}`);
        const monthName = month[emailTimeStamp.getMonth()];
        

        return (
          <Row>
            <Col xs={10}>
              <Card className="emailMessage">
                <Row>
                  <Col xs={2}>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" />
                      <Star star="1" />
                      <FontAwesomeIcon
                        id="importantChevron"
                        icon={faChevronRight}
                      />
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
                  <Card.Body
                    dangerouslySetInnerHTML={{ __html: message.body }}
                  />
                </Row>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default EmailDisplay;
