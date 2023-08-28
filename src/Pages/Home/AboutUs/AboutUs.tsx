import "./AboutUs.scss";
import About5 from "./AboutUsPics/About5.jpg";
import About9 from "./AboutUsPics/About9.jpg";

function AboutUs() {
  return (
    <div className="fullAbout">
      <div className="About-Us-Name">
        <div className="we-are-block">
          <div id="about-us-section">
            <div className="about-us-image">
              <img src={About5} width="808" height="458" alt="Lobby" />
            </div>

            <div className="about-us-info">
              <h2>We are Applying Pressure</h2>

              <p>
                Welcome to Applying Pressure Mobile Detailing - your go-to
                solution for exceptional car cleaning and detailing services in
                New York and New Jersey. As a team of experienced professionals,
                we not only deeply care about cars but also appreciate their
                importance in your day-to-day life. Using advanced tools,
                innovative techniques, and eco-friendly products, we offer a
                wide range of services from quick washes to full detailing
                packages. We understand that your car is a reflection of you,
                and we are committed to ensuring it always shines brilliantly,
                capturing the essence of your personality in its gleaming
                finish.
              </p>

              {/* <a href="#" title="About Us Button">
              ABOUT US
            </a> */}
            </div>
          </div>

          <div id="history-section">
            <div className="history-image">
              <img src={About9} width="951" height="471" alt="Building Pic" />
            </div>

            <div className="history-info">
              <h2>Why Choose Us</h2>

              <p>
                What sets us apart from others in the market is our unwavering
                commitment to customer satisfaction. We take the time to
                understand your needs, evaluate your car's condition, and
                recommend the best solutions. Additionally, we offer flexible
                scheduling and competitive pricing. We don't just aim to meet
                your expectations but to exceed them. If you're looking for a
                mobile detailing service that offers unparalleled attention to
                detail and customer service, Applying Pressure Mobile Detailing
                is your best choice. Contact us today to schedule your
                appointment. WE COME TO YOU!
              </p>

              {/* <a href="#" title="History Button">
              HISTORY
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
