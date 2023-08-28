import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidepanel.css";
import { useSelector } from "react-redux";
import store from "../../../../redux/store";

function Sidepanel(props: {
  showPanel: any;
  selectedDate: any;
  events: any;
  setShowPanel: any;
  handleTimeSelect: any;
}) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showPanel, selectedDate, events, setShowPanel, handleTimeSelect } =
    props;
  const name = useSelector((state: any) => state.bookingForm.name);
  const price = useSelector((state: any) => state.bookingForm.priceRange);
  const location = useSelector((state: any) => state.bookingForm.address);
  const phoneNumber = useSelector(
    (state: any) => state.bookingForm.phoneNumber
  );
  const ExteriorPackage = useSelector(
    (state: any) => state.bookingForm.exteriorOption
  );
  const interiorPackage = useSelector(
    (state: any) => state.bookingForm.interiorOption
  );
  const email = useSelector((state: any) => state.bookingForm.email);
  const plusService = useSelector((state: any) => {
    if (state.bookingForm.plusService === undefined) {
      return "";
    } else {
      return state.bookingForm.plusService;
    }
  });
  store.subscribe(() => console.log(store.getState()));
  const arrayAT = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const toggleCreditcard = (time: React.SetStateAction<string>) => {
    setSelectedTime(time);
    setShowCreditCardForm(true);
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    let appointmentLength = 0;
    if (ExteriorPackage === "standardExterior") {
      appointmentLength = appointmentLength + 2;
    }
    if (ExteriorPackage === "standardPlus") {
      appointmentLength = appointmentLength + 2;
    }
    if (ExteriorPackage === "oneStep") {
      appointmentLength = appointmentLength + 4;
    }
    if (ExteriorPackage === "twoStep") {
      appointmentLength = appointmentLength + 8;
    }
    if (interiorPackage === "silverInterior") {
      appointmentLength = appointmentLength + 2;
    }

    if (interiorPackage === "goldInterior") {
      appointmentLength = appointmentLength + 3;
    }
    if (interiorPackage === "pressureSpecial") {
      appointmentLength = appointmentLength + 4;
    }
    e.preventDefault();
    setLoading(true);

    const selectedDateTimeString = `${selectedDate} ${selectedTime}`;
    const selectedDateTime = new Date(selectedDateTimeString);
    const endDateTime = new Date(selectedDateTime.getTime());
    const endTime = endDateTime.setHours(
      selectedDateTime.getHours() + appointmentLength + 1
    );

    console.log(`${selectedDate} ${selectedTime}`);
    console.log("End Date and Time: ", endDateTime);

    if (!selectedDate || !selectedTime) {
      console.error("Please select a date and time for the appointment.");
      return;
    }

    const newEvent = {
      email,
      name,
      phoneNumber,
      ExteriorPackage,
      interiorPackage,
      plusService,
      selectedDate,
      selectedTime,
      endTime,
      description: `APL:OTheGeneral \n\n ${name} ${phoneNumber},\n\n Sedan,\n ${ExteriorPackage} ${interiorPackage} $ ${plusService}${price.min}-${price.max},\n\nAPD:`,
      location: `${location}`,
    };

    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        console.log("Appointment created successfully");
      } else {
        console.error("Failed to create appointment");
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
    setLoading(false);
    setShowCreditCardForm(false);
    handleClose();
    navigate(
      `/success?selectedDate=${selectedDate}&selectedTime=${selectedTime}`
    );
  };

  const handleClose = () => {
    setShowPanel(false);
    setShowCreditCardForm(false);
    setCardNumber("");
    setCardName("");
    setExpiryDate("");
    setCvv("");
  };
  const isTimeAvailable = (time: string) => {
    const selectedTimeString = `${selectedDate} ${time}`;
    const selectedTime = new Date(selectedTimeString);

    let appointmentLength = 0;

    if (
      ExteriorPackage === "standardExterior" ||
      ExteriorPackage === "standardPlus"
    ) {
      appointmentLength = appointmentLength + 2;
    }
    if (ExteriorPackage === "oneStep") {
      appointmentLength = appointmentLength + 4;
    }
    if (ExteriorPackage === "twoStep") {
      appointmentLength = appointmentLength + 8;
    }
    if (interiorPackage === "silverInterior") {
      appointmentLength = appointmentLength + 2;
    }
    if (interiorPackage === "goldInterior") {
      appointmentLength = appointmentLength + 3;
    }
    if (interiorPackage === "pressureSpecial") {
      appointmentLength = appointmentLength + 4;
    }

    const endTime = new Date(selectedTime.getTime());
    endTime.setHours(selectedTime.getHours() + appointmentLength);

    return !events.some(
      (event: {
        start: string | number | Date;
        end: string | number | Date;
      }) => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);

        const isConflicting =
          (selectedTime >= eventStart && selectedTime < eventEnd) ||
          (endTime > eventStart && endTime <= eventEnd) ||
          (selectedTime < eventStart && endTime > eventEnd);

        return isConflicting;
      }
    );
  };

  return (
    <>
      {showPanel && (
        <div className="panel slide-in">
          <button className="panel-close-button" onClick={handleClose}>
            <span className="inner-content">
              <span className="label">Close</span>
            </span>
          </button>
          {!showCreditCardForm ? (
            <>
              <div className="panel-title">
                Available times for {selectedDate}
              </div>
              <div className="available-times">
                {arrayAT.map((time) =>
                  isTimeAvailable(time) ? (
                    <button
                      className="available-time-button"
                      onClick={() => toggleCreditcard(time)}
                      key={time}
                    >
                      {time}
                    </button>
                  ) : null
                )}
              </div>
            </>
          ) : (
            <>
              <div className="panel-title">
                Confirm Appointment for {selectedDate} at {selectedTime}
              </div>
              <form className="credit-card-form" onSubmit={handleFormSubmit}>
                <label htmlFor="cardName">Cardholder Name:</label>
                <input
                  type="text"
                  id="cardName"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Submit"}
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Sidepanel;
