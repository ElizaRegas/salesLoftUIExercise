const getLocalMessages = (messages) => {
  // getting the messages array from local storage
  const localMessages = window.localStorage.getItem("messages");
  if (localMessages) {
    return JSON.parse(localMessages);
  } else {
    // adding key value pairs to messages the first time the array is populated
    const localMessageArray = messages.messages.map((message) => {
      return {
        ...message,
        isSelected: false,
        isTrash: false
      };
    });
    // adding the current array to local storage
    window.localStorage.setItem("messages", JSON.stringify(localMessageArray));
    return localMessageArray;
  }
};

// function to handle trash checkbox(es)
const handleCheckboxToggle = (type, id, isSelected, filteredMessages, setFilteredMessages) => {
  if (type === "individualCheckbox") {
    // targeting individual checkboxes
    const messageObj = filteredMessages.find((message) => {
      return message.id === id;
    });
    const index = filteredMessages.indexOf(messageObj);
    if (index > -1) {
      messageObj.isSelected = isSelected;
      // creating a copy of filtered messages to avoid manipulating state directly
      const newFilteredMessages = filteredMessages;
      newFilteredMessages[index] = messageObj;
      console.log(newFilteredMessages);
      setFilteredMessages(newFilteredMessages);
      window.localStorage.setItem("messages", JSON.stringify(newFilteredMessages));
    }
  } else if (type === "globalCheckbox") {
    // targeting all selected messages via the global checkbox 
    const newFilteredMessages = filteredMessages.map((message) => {
      return { ...message, isSelected };
    });
    setFilteredMessages(newFilteredMessages);
    window.localStorage.setItem("messages", JSON.stringify(newFilteredMessages));
  }
};

const handleUpdateFilter = (allMessages, emailFilters, setFilteredMessages) => {
  // filtering allMessages
  const filteredArray = allMessages.filter((message) => {
    // emails to be displayed on main page that aren't marked as trask
    if (emailFilters.type === "tag") {
      // filtering travel and work emails to return separately
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
      // returning messages marked as trash
      return message.isTrash;
    } else {
      return true;
    }
  });
  console.log("filtered array: ", filteredArray);
  setFilteredMessages(filteredArray);
  window.localStorage.setItem("messages", JSON.stringify(filteredArray));
};

const refreshPage = () => {
  window.location.reload();
  console.log("page refreshed");
}

const utils = {
  getLocalMessages,
  handleCheckboxToggle,
  handleUpdateFilter, 
  refreshPage
}

export default utils;

