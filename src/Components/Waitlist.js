import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initHeaderScrolled } from "../assets/js/headerScrolled";

function Waitlist() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to submit the email to your backend or perform any other actions.
    console.log("Email submitted:", email);
  };

  useEffect(() => {
    initHeaderScrolled();
  }, []);

  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container" data-aos="fade-up">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="col-xl-12 col-lg-8">
            <section className="waitlist-section">
              <h1><span style={{ color: 'goldenrod' }}>Join</span> the <span style={{ color: 'goldenrod' }}>Waitlist</span></h1>
              <h2>Submit your email to get on our waitlist.</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
              {/* <Link to="/">Go back to Home</Link> Use Link here */}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Waitlist;
