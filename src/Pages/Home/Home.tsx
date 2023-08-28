import "./home.scss";
import NetflixReel from "./NetflixReel";
import AboutUs from "./AboutUs/AboutUs";
import Header from "../../Components/Header";
import HomeForm from "./HomeForm";

function Home() {
  return (
    <div
      style={{ backgroundColor: "black" }}
      className="fluid myCustomHeight fullPage"
    >
      <Header />
      <HomeForm />
      <div></div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br />
      <AboutUs />
      <br /> <br />
      <NetflixReel />
    </div>
  );
}

export default Home;
