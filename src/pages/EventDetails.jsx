import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/eventService";
import { Card } from "react-bootstrap";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const data = await getEventById(id);
        console.log("Event data:", data);
        setEvent(data);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>Event not found</p>;

  return (
    <div className="container my-4">
      <Card>
        <Card.Img variant="top" src={event.image} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>
            <strong>Topic:</strong> {event.topic} <br />
            <strong>Date:</strong> {new Date(event.date).toLocaleString()}{" "}
            <br />
            <strong>Type:</strong> {event.type} <br />
            <strong>Description:</strong> {event.description} <br />
            <strong>Price:</strong> ₹{event.price} <br />
            <strong>Venue:</strong> {event.venue.name}, {event.venue.address}{" "}
            <br />
            <strong>Additional Info:</strong> {event.additionalInfo} <br />
            <strong>Speakers:</strong>{" "}
            {event.speakers.map((s) => `${s.name} (${s.role})`).join(", ")}{" "}
            <br />
            <strong>Tags:</strong> {event.tags.join(", ")}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventDetails;
