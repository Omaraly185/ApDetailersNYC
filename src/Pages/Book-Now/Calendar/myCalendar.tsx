import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./myCalendar.css";
import Sidepanel from "./SidePanel/sidepanel";
import moment from "moment";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

type Event = {
  title: string;
  start: Date;
  end: Date;
};

const MyCalendar = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/events");
      const events = await response.json();
      setEvents(events);
      setLoading(false); // Update loading state
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false); // Update loading state even if there is an error
    }
  };

  const formatDate = (start: string) => {
    const dateString = start;
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  const handleSelectSlot = (slotInfo: { start: string; action: string }) => {
    const { start, action } = slotInfo;
    if (action === "click" || action === "touch") {
      if (new Date(start) < new Date()) {
        toast.error("You can't select a date before today!");
        return;
      }

      setSelectedDate(formatDate(start));
      setSelectedTime("");
      setShowPanel(true);
    }
  };

  const handleTimeSelect = (date: string, time: string) => {
    setShowPanel(false);

    const selectedTimeString = `${date} ${time}`;
    const eventDate = new Date(selectedTimeString);
    const newEvent: Event = {
      title: "Test Event",
      start: eventDate,
      end: eventDate,
    };
    setEvents([...events, newEvent]);
  };

  if (loading) {
    return <div style={{ color: "white" }}>Loading...</div>; // Display a loading message or spinner while events are being fetched
  }

  return (
    <div className="myCustomHeight">
      <ToastContainer />
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        onSelectSlot={handleSelectSlot as any} // Add 'as any' to bypass the type checking of 'onSelectSlot' as it expects (slotInfo: { start: Date; end: Date; slots: Date[]; action: "select" | "click" | "doubleClick"; }) => void
        startAccessor="start"
        endAccessor="end"
        step={60}
        timeslots={1}
        views={["month", "agenda"]}
      />
      <Sidepanel
        showPanel={showPanel}
        selectedDate={selectedDate}
        events={events} // Pass events to Sidepanel component
        setShowPanel={setShowPanel}
        handleTimeSelect={handleTimeSelect}
      />
    </div>
  );
};

export default MyCalendar;
