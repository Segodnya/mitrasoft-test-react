import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Search = ({ searchTerm, setSearchTerm, setCurrentPage }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <Row className="mb-3">
      <Col>
        <Form.Control
          type="text"
          placeholder="Search posts"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Col>
      <Col xs="auto">
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
      </Col>
    </Row>
  );
};

export default Search;
