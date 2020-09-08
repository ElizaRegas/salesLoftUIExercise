import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SideNavbar from "./Containers/SideNavbar/SideNavbar.jsx";
import TopNavbar from "./Containers/TopNavbar/TopNavbar.jsx";
import Body from "./Containers/Body/Body.jsx";
import AppContext from "./AppContext.jsx";
import messages from "./emails.json";
import utils from "./utils/utils.js";
import "./css/App.css";

const App = () => {
  // setting state - not placed at the top of the page due to order of operations
  const [emailFilters, setEmailFilters] = useState({
    type: "tag",
    value: "inbox",
  });

  // allMessages generates the initial json email file before being filtered
  const [allMessages, setAllMessages] = useState(
    utils.getLocalMessages(messages)
  );
  const [filteredMessages, setFilteredMessages] = useState(allMessages);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // to be used for future functionality
  // const [isHovering, setIsHovering] = useState(false);

  // hook acting as componentDidUpdate, waiting for emails to be filtered before running
  useEffect(() => {
    utils.handleUpdateFilter(allMessages, emailFilters, setFilteredMessages);
  }, [emailFilters]);

  // this trash function is stubbed to handle restoration of messages as well, but functionality is not yet in place.
  const handleTrashToggle = (action) => {
    const newAllMessages = allMessages;
    // looping through all checked messages to pin point the index
    const newFilteredMessages = filteredMessages.map((message) => {
      // updating the newAllMessages array
      if (message.isSelected && action === "delete") {
        const messageId = message.id;
        newAllMessages.forEach((message, index) => {
          if (message.id === messageId) {
            newAllMessages[index] = {
              ...newAllMessages[index],
              isTrash: true,
              isSelected: false,
            };
          }
        });
      }
      // updating newFilteredMessages array
      return {
        ...message,
        isTrash: message.isSelected ? action === "delete" : message.isTrash,
        isSelected: false,
      };
    });
    // setting values to state
    setAllMessages(newAllMessages);
    setFilteredMessages(newFilteredMessages);
    // setting values to local storage
    window.localStorage.setItem(
      "messages",
      JSON.stringify(newFilteredMessages)
    );
    // trigger a refresh to remove deleted items from view
    utils.handleUpdateFilter(allMessages, emailFilters, setFilteredMessages);
  };

  return (
    <AppContext.Provider
      value={{
        emailFilters,
        setEmailFilters,
        filteredMessages,
        setFilteredMessages,
        handleTrashToggle,
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      <div>
        <TopNavbar />
        <Row>
          <Col xs={0} md={2} id="sideBar">
            <SideNavbar />
          </Col>
          <Col xs={12} md={8} id="bodyWidth">
            <Body />
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </div>
    </AppContext.Provider>
  );
};

export default App;
