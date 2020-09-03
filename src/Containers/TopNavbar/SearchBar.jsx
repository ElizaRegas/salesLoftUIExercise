import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css";

const SearchBar = () => {
  return (
    <Form>
      <Row>
        <Col xs={1}>
          <InputGroup>
            <InputGroup.Prepend>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
        </Col>
        <Col xs={11}>
          <FormControl aria-describedby="basic-addon1" />
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
