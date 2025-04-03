'use client';

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="calendar">
        <div className="calendar-header">E</div>
        <div className="calendar-header">24</div>
        <div className="calendar-header"></div>
        <div className="calendar-header"></div>
        <div className="calendar-header"></div>
        <div className="calendar-header"></div>
        <div className="calendar-header"></div>
      </div>
      <div className="event-details">
        <h2>Esmapäev 24. Veebruar 2025</h2>
        <div className="event-row">
          <div className="event-name">Sündmus 1</div>
          <div className="event-time">10:30</div>
          <div className="event-info">Info</div>
          <button className="event-edit">Muuda</button>
        </div>
        <div className="event-row">
          <div className="event-name"></div>
          <div className="event-time"></div>
          <div className="event-info"></div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;