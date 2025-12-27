import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const EventCard = ({ event }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={event.image}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}{" "}
          <br />
          <strong>Type:</strong> {event.type}
        </Card.Text>
        <Link to={`/events/${event._id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
