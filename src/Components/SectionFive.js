import React from 'react';
import image from "../Img/feature-image-04.png"

function SectionFive() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h3>More than a login box</h3>
          <p>
            There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </div>
        <br />
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-12 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              style={{
                border: '1px solid rgb(155, 152, 152)',
                borderRadius: '20px',
                height: '25rem',
                width: '50rem',
                marginLeft: '10rem',
              }}
              src={image}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
