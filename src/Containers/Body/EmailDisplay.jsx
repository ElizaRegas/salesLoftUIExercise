import React from "react";
import { Container } from "react-bootstrap";
import "../../css:scss/App.css";
import EmailItem from "./EmailItem";
import AppContext from "../../AppContext";

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
    <AppContext.Consumer>
      {({ filteredMessages }) => {

        return (
          <Container id="hrLineAboveEmail">
            <br />
            {filteredMessages.map((message) => {
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
      }}
    </AppContext.Consumer>
  );
};

export default EmailDisplay;
