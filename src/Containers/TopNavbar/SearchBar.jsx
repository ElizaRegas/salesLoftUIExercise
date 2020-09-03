import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";

const SearchBar = () => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button variant="outline-secondary">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup.Prepend>
      <FormControl aria-describedby="basic-addon1" />
    </InputGroup>
  );
};

export default SearchBar;
