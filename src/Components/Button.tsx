import { Link } from "react-router-dom";
import "./Button.scss";

function Button() {
  return (
    <div className="container">
      <div className="btn">
        <Link to="/Book_Now">BOOK_NOW</Link>
      </div>
    </div>
  );
}

export default Button;
