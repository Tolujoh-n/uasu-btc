import React from 'react';

function SectionSix() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="container" data-aos="zoom-in">
          <div className="text-center">
            <p style={{ color: 'rgb(235, 187, 235)' }}>The security first platform</p>
            <h3 style={{ color: 'rgb(202, 190, 202)' }}>Spot issues faster</h3>
            <p style={{ color: 'aliceblue' }}>
              All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
          </div>
          <br />
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p style={{ color: 'azure' }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
              <p style={{ textAlign: 'right' }}><a href="">Learn More <i className="bx bx-arrow-left"></i></a></p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p style={{ color: 'azure' }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
              <p style={{ textAlign: 'right' }}><a href="">Learn More <i className="bx bx-arrow-left"></i></a></p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon"><i className="bx bx-arch"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p style={{ color: 'azure' }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
              <p style={{ textAlign: 'right' }}><a href="">Learn More <i className="bx bx-arrow-left"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
