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
        isTrash: false,
      };
    });
    // adding the current array to local storage
    window.localStorage.setItem("messages", JSON.stringify(localMessageArray));
    return localMessageArray;
  }
};

// function to handle checkbox(es)
const handleCheckboxToggle = (
  type,
  id,
  isSelected,
  filteredMessages,
  setFilteredMessages
) => {
  let newFilteredMessages;

  if (type === "individualCheckbox") {
    // targeting individual checkboxes via id
    const messageObj = filteredMessages.find((message) => {
      return message.id === id;
    });
    // finding the index of the targeted object
    const index = filteredMessages.indexOf(messageObj);
    if (index > -1) {
      messageObj.isSelected = isSelected;
      // creating a copy of filtered messages to avoid manipulating state directly
      newFilteredMessages = filteredMessages;
      // updating the targeted object into the copy of filtered array
      newFilteredMessages[index] = messageObj;
    }
  } else if (type === "globalCheckbox") {
    // targeting all selected messages via the global checkbox
    newFilteredMessages = filteredMessages.map((message) => {
      // updating the isSelected key value pair with the specified parameter
      return { ...message, isSelected };
    });
  }
  // setting the updated array to state
  setFilteredMessages(newFilteredMessages);
  // setting the updated array to local storage
  window.localStorage.setItem("messages", JSON.stringify(newFilteredMessages));
};

const handleUpdateFilter = (allMessages, emailFilters, setFilteredMessages) => {
  // filtering allMessages
  const filteredArray = allMessages.filter((message) => {
    // emails to be displayed on main page that aren't marked as trash
    if (emailFilters.type === "tag") {
      // filtering travel and work emails to return separately
      if (emailFilters.value !== "inbox") {
        return (message.isTrash !== true && message.tags.includes(emailFilters.value));
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
  // setting state
  setFilteredMessages(filteredArray);
  // setting local storage
  window.localStorage.setItem("messages", JSON.stringify(filteredArray));
};

// 
const openCloseMenu = (menuIsOpen, setMenuIsOpen) => {
  if (!menuIsOpen) {
    setMenuIsOpen(true);
  } else {
    setMenuIsOpen(false);
  }
};

const refreshPage = () => {
  window.location.reload();
};

const utils = {
  getLocalMessages,
  handleCheckboxToggle,
  handleUpdateFilter,
  openCloseMenu,
  refreshPage,
};

export default utils;
