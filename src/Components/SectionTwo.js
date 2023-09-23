import React from 'react';
import featureImage from '../Img/feature-image-03.png';

function SectionTwo() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img src={featureImage} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p style={{ color: 'aliceblue' }} className="fst-italic">
              The security first platform
            </p>
            <h2 style={{ color: 'azure' }}>
              Simplify your security with authentication services
            </h2>
            <p style={{ color: 'aliceblue' }}>
              Define access roles for the end-users and extend your
              authorization capabilities to implement dynamic access control.
            </p>
            <a
              style={{ marginTop: '30px' }}
              href=""
              className="about-started-btn scrollto"
            >
              Simplify your security
            </a>
            <br />
            <a
              style={{ marginTop: '10px' }}
              href=""
              className="about-started-btn scrollto"
            >
              Customer identity
            </a>
            <br />
            <a
              style={{ marginTop: '10px' }}
              href=""
              className="about-started-btn scrollto"
            >
              Adaptable authentication
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
