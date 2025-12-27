import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const EventFilter = ({
  filterType,
  setFilterType,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <Form className="my-3">
      <Row>
        <Col md={4}>
          <Form.Select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="Both">Both</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </Form.Select>
        </Col>
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search by title or tags"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default EventFilter;
