import React, {useEffect} from 'react';
import { initHeaderScrolled } from "../assets/js/headerScrolled";


function Hero() {
  useEffect(() => {
    initHeaderScrolled();
  }, []);
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div className="col-xl-12 col-lg-8">

            <h1>PROTECT YOUR BITCOIN FROM LOSSES WHILE HOLDING YOUR KEYS</h1>
            <h2>
              Hedge using unstoppable bitcoin payoff on Layer 1
            </h2>
            <a href="" className="api-started-btn scrollto">
              Join Alpha Waiting list
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
