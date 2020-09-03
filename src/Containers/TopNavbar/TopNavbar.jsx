import React from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { faUserCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/E.MailLogo.png";
import SearchBar from "./SearchBar";
import "../../App.css";

const TopNavbar = () => {
  return (
    <Container id="topNavbar">
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
          <SearchBar />
        </Col>
        <Col xs={2}>
          <Button
            id="moreButton"
            className="button"
            // onClick={() => setIsSidebarOpen(true)}
          >
            <FontAwesomeIcon icon={faEllipsisV} />
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
