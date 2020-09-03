import React from "react";
import { Container } from "react-bootstrap";
import SideNavbar from "./components/SideNavbar.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import EmailDisplay from "./components/EmailDisplay.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <TopNavbar />
      <Container>
        <SideNavbar />
      </Container>
    </div>
  );
}

export default App;
