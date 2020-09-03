import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { faSearch, faUserCircle, faCog, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/E.MailLogo.png";
import SearchBar from "./SearchBar";
import "../App.css";

const TopNavbar = () => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Button
            id="hamburger"
            className="button"
            // onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </Button>
          <img id="headerLogo" src={logo} alt="Email logo"></img>
        </Col>
        <Col xs={8}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
        <Col xs={2}>
          <Button
            id="settingsButton"
            className="button"
            // onClick={() => setIsSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faCog} />
          </Button>
          <Button
            id="9DotGridButton"
            className="button"
            // onClick={() => setIsSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
            <FontAwesomeIcon icon={faEllipsisV} />
            <FontAwesomeIcon icon={faEllipsisV} />
          </Button>
          <Button
            id="hamburger"
            className="button"
            // onClick={() => setIsSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faUserCircle} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavbar;
