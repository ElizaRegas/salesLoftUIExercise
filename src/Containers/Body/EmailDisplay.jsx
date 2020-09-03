import React from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import messages from "../../emails.json";
import { Star } from "react-bootstrap-icons";
import "../../App.css";

const EmailDisplay = () => {

  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  return (
    <div>
      {messages.messages.map((message) => {
        const emailTimeStamp = new Date(`${message.date}`);
        const monthName = month[emailTimeStamp.getMonth()];

        console.log(emailTimeStamp);

        return (
          <Row>
            <Col xs={12}>
              <Card className="emailMessage">
                <Row>
                  <Col xs={2}>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" />
                      <Star star="1" />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>{message.sender}</Col>
                  <Col xs={4}>{message.subject}</Col>
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
    </div>
  );
};

export default EmailDisplay;
