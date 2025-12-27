import React, { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import EventCard from "../components/EventCard";
import EventFilter from "../components/EventFilter";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterType, setFilterType] = useState("Both");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const data = await getEvents();
    setEvents(data);
    setFilteredEvents(data);
  };

  useEffect(() => {
    let filtered = [...events];

    if (filterType !== "Both") {
      filtered = filtered.filter((e) => e.type === filterType);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (e) =>
          e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredEvents(filtered);
  }, [filterType, searchTerm, events]);

  return (
    <div className="container my-4">
      <h2>Upcoming Events</h2>
      <EventFilter
        filterType={filterType}
        setFilterType={setFilterType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="row">
        {filteredEvents.map((event) => (
          <div key={event._id} className="col-md-4 mb-3">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
