import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SideNavbar from "./Containers/SideNavbar/SideNavbar.jsx";
import TopNavbar from "./Containers/TopNavbar/TopNavbar.jsx";
import Body from "./Containers/Body/Body.jsx";
import AppContext from "./AppContext.jsx";
import messages from "./emails.json";
import "./css:scss/App.css";

const App = () => {
  const getLocalMessages = () => {
    const localMessages = localStorage.getItem("messages");
    if (localMessages) {
      return JSON.parse(localMessages);
    } else {
      const localMessageArray = messages.messages.map((message) => {
        return { ...message, isSelected: false, isTrash: false };
      });
      localStorage.setItem("messages", JSON.stringify(localMessageArray));
      return localMessageArray;
    }
  };

  // setting state
  const [emailFilters, setEmailFilters] = useState({
    type: "tag",
    value: "inbox",
  });

  // spreading out keys to email object, and adding a key of isSelected
  const [allMessages, setAllMessages] = useState(getLocalMessages());

  const [filteredMessages, setFilteredMessages] = useState(allMessages);

  useEffect(() => {
    handleUpdateFilter();
  }, [emailFilters]);

  const handleUpdateFilter = () => {
    const filteredArray = allMessages.filter((message) => {
      if (emailFilters.type === "tag") {
        if (emailFilters.value !== "inbox") {
          const logicTest =
            message.isTrash !== true &&
            message.tags.includes(emailFilters.value);
          console.log("logic test: ", logicTest);
          return logicTest;
        } else {
          return !message.isTrash;
        }
      } else if (emailFilters.type === "delete") {
        return message.isTrash;
      } else {
        return true;
      }
    });
    setFilteredMessages(filteredArray);
    localStorage.setItem("messages", JSON.stringify(filteredArray));
  };

  const handleCheckboxToggle = (type, id, isSelected) => {
    if (type === "individualCheckbox") {
      const messageObj = filteredMessages.find((message) => {
        return message.id === id;
      });
      const index = filteredMessages.indexOf(messageObj);
      if (index > -1) {
        messageObj.isSelected = isSelected;
        const newFilteredMessages = filteredMessages;
        newFilteredMessages[index] = messageObj;
        console.log(newFilteredMessages);
        setFilteredMessages(newFilteredMessages);
        localStorage.setItem("messages", JSON.stringify(newFilteredMessages));
      }
    } else if (type === "globalCheckbox") {
      const newFilteredMessages = filteredMessages.map((message) => {
        return { ...message, isSelected };
      });
      setFilteredMessages(newFilteredMessages);
      localStorage.setItem("messages", JSON.stringify(newFilteredMessages));
    }
  };

  const handleTrashToggle = (action) => {
    const newAllMessages = allMessages;

    const newFilteredMessages = filteredMessages.map((message) => {
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
      return {
        ...message,
        isTrash: message.isSelected ? action === "delete" : message.isTrash,
        isSelected: false
      };
    });
    console.log("after map: ", newFilteredMessages);
    setAllMessages(newAllMessages);
    setFilteredMessages(newFilteredMessages);
    localStorage.setItem("messages", JSON.stringify(newFilteredMessages));
    handleUpdateFilter();
  };

  return (
    <AppContext.Provider
      value={{
        emailFilters,
        setEmailFilters,
        filteredMessages,
        handleCheckboxToggle,
        handleTrashToggle,
      }}
    >
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
