import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center my-5">
      <h1>Welcome to Meetup App</h1>
      <p className="lead">
        Discover and join exciting events, online or offline.
      </p>
      <Link to="/events">
        <Button variant="primary" size="lg">
          View Events
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
