import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideNavbar from "./components/SideNavbar.jsx";
import TopNavbar from "./Containers/TopNavbar/TopNavbar.jsx";
import EmailDisplay from "./Containers/Body/EmailDisplay.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <TopNavbar />
      <Container>
        <Row>
          <Col xs={2}>
            <SideNavbar />
          </Col>
          <Col xs={8}>
            <EmailDisplay />
          </Col>
          <Col xs={2}>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
