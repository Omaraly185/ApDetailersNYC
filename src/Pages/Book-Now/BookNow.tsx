import { useState } from "react";
import "./bookNow.css";
import Packages from "./Packages/packages";
import MyCalendar from "./Calendar/myCalendar";
import Sidepanel from "./Calendar/SidePanel/sidepanel";
import BookingForm from "./BookingForm/bookingForm";
import Header from "../../Components/Header";

function BookNow(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Sidepanel
        showPanel={undefined}
        selectedDate={undefined}
        events={undefined}
        setShowPanel={undefined}
        handleTimeSelect={undefined}
      />
      {isOpen && (
        <div className="Modal">
          <div className="Modal-content">
            <MyCalendar />
          </div>
          <button className="modal-close-button" onClick={handleClose}>
            <span className="modal-inner-content">
              <span className="label">Close</span>
            </span>
          </button>
        </div>
      )}

      <div
        className="overlay-Img"
        style={{ position: isOpen ? "fixed" : "relative" }}
      >
        <Header />
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Packages />
          <BookingForm handleOpen={() => setIsOpen(true)} />
        </div>
      </div>
    </>
  );
}

export default BookNow;
