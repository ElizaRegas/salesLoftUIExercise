import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SideNavbar from "./Containers/SideNavbar/SideNavbar.jsx";
import TopNavbar from "./Containers/TopNavbar/TopNavbar.jsx";
import Body from "./Containers/Body/Body.jsx";
import AppContext from "./AppContext.jsx";
import messages from "./emails.json";
import "./css:scss/App.css";

const App = () => {
  const [emailFilters, setEmailFilters] = useState({
    type: "tag",
    value: "inbox",
  });

  // spreading out keys to email object, and adding a key of isSelected
  const [allMessages, setAllMessages] = useState(messages.messages.map((message) => {
    return {... message, isSelected: false};
  }));

  const [filteredMessages, setFilteredMessages] = useState(allMessages);

  useEffect(() => {
    handleUpdateFilter();
  },[emailFilters]);

  const handleUpdateFilter = () => {
    const filteredArray = allMessages.filter((message) => {
      if (emailFilters.type === "tag" && emailFilters.value !== "inbox") {
        return (message.tags.includes(emailFilters.value))
      } else {
        return true;
      }
    })
    setFilteredMessages(filteredArray);
  };

  const handleCheckboxToggle = (type, id, isSelected) => {
    if (type === "individualCheckbox") {
      const messageObj = filteredMessages.find((message) => {
        return (message.id === id);
      })
      const index = filteredMessages.indexOf(messageObj);
      if (index > -1) {
        messageObj.isSelected = isSelected;
        const newFilteredMessages = filteredMessages;
        newFilteredMessages[index] = messageObj;
        console.log(newFilteredMessages);
        setFilteredMessages(newFilteredMessages);
      }
    }
  };

  return (
    <AppContext.Provider value={{ emailFilters, setEmailFilters, filteredMessages, handleCheckboxToggle }}>
      <div>
        <TopNavbar />
        <Row>
          <Col xs={2}>
            <SideNavbar />
          </Col>
          <Col xs={8}>
            <Body />
          </Col>
          <Col xs={2}></Col>
        </Row>
      </div>
    </AppContext.Provider>
  );
};

export default App;
