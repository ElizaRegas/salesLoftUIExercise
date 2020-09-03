import React from "react";
import { Container, Row, Col, Card, Form, Glyphicon } from "react-bootstrap";
import messages from "../../emails.json";
import { Star } from "react-bootstrap-icons";
import "../../App.css";

const EmailDisplay = () => {
  console.log(messages);

  return (
    <div>
      {messages.messages.map((message) => {
        return (
          <Row>
            <Col xs={12}>
              <Card>
                <Col>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" />
                    <Star star="1" />
                    {message.sender}
                  </Form.Group>
                </Col>
                <Col>
                  <Card.Body
                    dangerouslySetInnerHTML={{ __html: message.body }}
                  />
                </Col>
              </Card>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default EmailDisplay;
