import React from 'react';
import logo from "../Img/uasu-logo.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <a href="index.html" className="logo me-auto me-lg-0">
                  <img style={{ background: "gold", borderRadius: '5px' }} src={logo} alt="" className="img-fluid" />
                </a>
                <br />
                <br />
                {/* <p>Trade native bitcoin Options</p>
                <br /> */}
                <br />
                <br />
                <div className="social-links mt-3">
                  <a  href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="discord" style={{ marginLeft: '30px' }}>
                    <i className="bx bxl-discord"></i>
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4 style={{ color: 'goldenrod' }}>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>                
              </ul>
            </div>

            
            <div className="col-lg-3 col-md-6 footer-links">
              <h4 style={{ color: 'goldenrod' }}>Product</h4>
              <ul>
                <li><a href="#">See Demo</a></li>
                
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4 style={{ color: 'goldenrod' }}>Solution</h4>
              <ul>
                <li><a href="#">Busisness to Busisness</a></li>
                
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container">
          <div className="copyright">
            &copy; 2023{" "}
            <strong>
              <span>UASU </span>
            </strong>
             LLC
          </div>
        </div>
    </footer>
  );
}

export default Footer;
