import React from "react";
import { Row, Col, InputGroup, Button } from "react-bootstrap";
import {
  faCaretDown,
  faRedo,
  faEllipsisV,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css:scss/App.css";
import AppContext from "../../AppContext";

const BodyHeader = () => {
  return (
    <AppContext.Consumer>
      {({ handleCheckboxToggle, handleTrashToggle }) => {
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
                        handleCheckboxToggle(
                          "globalCheckbox",
                          null,
                          e.target.checked
                        );
                      }}
                    />
                    <FontAwesomeIcon id="caretDown" icon={faCaretDown} />
                    <Button
                      id="redoButton"
                      className="button"
                      // onClick={() => setIsSidebarOpen(true)}
                    >
                      <FontAwesomeIcon
                        id="redo"
                        className="bodyHeaderIcon"
                        icon={faRedo}
                      />
                    </Button>
                    <Button
                      className="button"
                      // onClick={() => setIsSidebarOpen(true)}
                    >
                      <FontAwesomeIcon
                        className="bodyHeaderIcon"
                        icon={faEllipsisV}
                      />
                    </Button>
                    <Button
                      className="button"
                      // onClick={() => setIsSidebarOpen(true)}
                    >
                      <FontAwesomeIcon
                        className="bodyHeaderIcon"
                        icon={faTrash}
                        onClick={() => handleTrashToggle("delete")}
                      />
                    </Button>
                  </InputGroup.Prepend>
                </InputGroup>{" "}
              </Col>
            </Row>
            {/* <CategoryHeader /> */}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default BodyHeader;
