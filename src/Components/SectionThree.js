import React from 'react';
import featureImage1 from '../Img/feature-image-01.png';
import featureImage2 from '../Img/feature-image-02.png';
import featureImage3 from '../Img/feature-image-03.png';

function SectionThree() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>Faster. Smarter.</h3>
          <p>
            There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div style={{ border: '1px solid rgb(131, 130, 130)', borderRadius: '10px' }} className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={featureImage1} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>Optimized for security</h3>
            <p>
              Optimize for user experience and privacy. Use social login integrations, lower user friction, incorporate rich user profiling, and facilitate more transactions.
            </p>
            <a style={{ marginTop: '30px' }} href="" className="api-started-btn scrollto">Learn More</a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div style={{ border: '1px solid rgb(131, 130, 130)', borderRadius: '10px', marginRight: '50px', height: '25rem' }} className="col-lg-7 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <br />
            <h3>Extensibility</h3>
            <p className="fst-italic">
              Your login box must find the right balance between user convenience, privacy, and security.
            </p>
            <img src={featureImage2} className="img-fluid" alt="" />
          </div>
          <div style={{ border: '1px solid rgb(131, 130, 130)', borderRadius: '10px', height: '25rem' }} className="col-lg-4 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <br />
            <h3>Infinite Option</h3>
            <p className="fst-italic">
              Quickly apply filters to refine your issues lists and create custom views.
            </p>
            <img style={{ height: '15rem' }} src={featureImage3} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
