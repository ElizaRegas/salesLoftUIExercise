import React from "react";
import Button from "react-bootstrap/Button";
import googlePlusSign from "../../images/googlePlusSign.png";

export default function ComposeButton() {
  return (
    <div className="mb-2">
      <Button id="composeButton" variant="primary" size="default">
        <img id="googlePlusSign" src={googlePlusSign} alt="google plus sign" />
        Compose
      </Button>
    </div>
  );
}
