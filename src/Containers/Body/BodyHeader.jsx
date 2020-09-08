import React from "react";
import { Row, Col, InputGroup, Button } from "react-bootstrap";
import {
  faCaretDown,
  faRedo,
  faEllipsisV,
  faTrash,
  faTrashRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/App.css";
import AppContext from "../../AppContext";
import utils from "../../utils/utils.js";

const BodyHeader = () => {
  return (
    <AppContext.Consumer>
      {({
        handleCheckboxToggle,
        handleTrashToggle,
        filteredMessages,
        setFilteredMessages,
      }) => {
        return (
          <div>
            <Row>
              <Col xs={12}>
                <InputGroup id="bodyHeader" className="mb-3 bottomBoxShadow">
                  <InputGroup.Prepend>
                    <InputGroup.Checkbox
                      className="button"
                      aria-label="Checkbox for following text input"
                      onChange={(e) => {
                        utils.handleCheckboxToggle(
                          "globalCheckbox",
                          null,
                          e.target.checked,
                          filteredMessages,
                          setFilteredMessages
                        );
                      }}
                    />
                    <FontAwesomeIcon id="caretDown" icon={faCaretDown} />
                    <Button id="redoButton" className="button">
                      <FontAwesomeIcon
                        id="redo"
                        className="bodyHeaderIcon"
                        icon={faRedo}
                        onClick={utils.refreshPage}
                      />
                    </Button>
                    <Button className="button">
                      <FontAwesomeIcon
                        className="bodyHeaderIcon"
                        icon={faTrash}
                        onClick={() => handleTrashToggle("delete")}
                      />
                    </Button>
                    <Button className="button">
                      <FontAwesomeIcon
                        className="bodyHeaderIcon"
                        icon={faTrashRestore}
                        onClick={() => handleTrashToggle("restore")}
                      />
                    </Button>
                    <Button className="button">
                      <FontAwesomeIcon
                        className="bodyHeaderIcon"
                        icon={faEllipsisV}
                      />
                    </Button>
                  </InputGroup.Prepend>
                </InputGroup>{" "}
              </Col>
            </Row>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default BodyHeader;
