import React from "react";
import EmailItem from "./EmailItem";
import AppContext from "../../AppContext";
import "../../css/App.css";

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
          <div id="hrLineAboveEmail">
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
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default EmailDisplay;
