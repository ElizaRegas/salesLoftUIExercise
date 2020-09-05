import React from "react";
import Button from "react-bootstrap/Button";
import googlePlusSign from "../../images/googlePlusSign.png";
import "../../css:scss/App.css";


export default function ComposeButton() {
  return (
    <div id="composeButtonDiv" className="mb-2 bottomBoxShadow">
      <Button id="composeButton" variant="primary" size="default">
        <img id="googlePlusSign" src={googlePlusSign} alt="google plus sign" />
        Compose
      </Button>
    </div>
  );
}
