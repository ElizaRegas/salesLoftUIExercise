import React from "react";
import { Container } from "react-bootstrap";
import messages from "../../emails.json";
import "../../css:scss/App.css";
import EmailItem from "./EmailItem";

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
          <EmailItem
            monthName={monthName}
            message={message}
            emailTimeStamp={emailTimeStamp}
          />
        );
      })}
    </Container>
  );
};

export default EmailDisplay;
