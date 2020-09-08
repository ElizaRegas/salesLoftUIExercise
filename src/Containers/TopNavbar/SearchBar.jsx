import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Form,
  Col,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/App.css";

const SearchBar = () => {
  return (
    <Form>
      <Row id="searchFormGroup">
        <Col xs={1}>
          <InputGroup>
            <InputGroup.Prepend>
              <Button
                id="searchButton"
                className="searchbarButton"
                variant="outline-secondary"
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
        </Col>
        <Col xs={10}>
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="Search mail"
            id="searchForm"
          />
        </Col>
        <Col xs={1}>
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            id="input-group-dropdown-2"
            className="searchbarButton"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
