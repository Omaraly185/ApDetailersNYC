import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import BookNow from "./Pages/Book-Now/BookNow";
// import SuccessPage from "./Success/SuccessPage";
// import MonthlySub from "./Pages/Monthly/MonthlySub";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book_Now" element={<BookNow />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        {/* <Route path="/Monthly" element={<MonthlySub />} /> */}
        {/* <Route path="/success" element={<SuccessPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
