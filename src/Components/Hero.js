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
            <a href="" className="api-started-btn scrollto">
              API Studio is now in beta
            </a>
            <h1>The API Security Framework</h1>
            <h2>
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </h2>
            <a
              style={{ background: 'whitesmoke', color: 'black', marginTop: '30px', marginRight: '20px' }}
              href=""
              className="get-started-btn scrollto"
            >
              Get started
            </a>
            <a
              style={{ marginTop: '30px' }}
              href=""
              className="get-started-btn scrollto"
            >
              Read the Doc
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
