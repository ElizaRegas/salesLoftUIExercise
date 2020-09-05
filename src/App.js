import React from "react";
import { Row, Col } from "react-bootstrap";
import SideNavbar from "./Containers/SideNavbar/SideNavbar.jsx";
import TopNavbar from "./Containers/TopNavbar/TopNavbar.jsx";
import EmailDisplay from "./Containers/Body/EmailDisplay.jsx";
import BodyHeader from "./Containers/Body/BodyHeader.jsx";
import "./css:scss/App.css";

function App() {
  return (
    <div>
      <TopNavbar />
        <Row>
          <Col xs={2}>
            <SideNavbar />
          </Col>
          <Col xs={8}>
            <BodyHeader />
            <EmailDisplay />
          </Col>
          <Col xs={2}>

          </Col>
        </Row>
    </div>
  );
}

export default App;
