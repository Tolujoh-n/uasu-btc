import React, {useEffect} from 'react';
import { initHeaderScrolled } from "../assets/js/headerScrolled";
import logo from "../Img/logo.svg";


function Header() {
  useEffect(() => {
    initHeaderScrolled();
  }, []);
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <a href="index.html" className="logo me-auto me-lg-0">
          <img src={logo} alt="" className="img-fluid" />
        </a>
        <p>
          <a style={{ marginRight: '10px' }} href="" className="scrollto">
            Sign in
          </a>
          <a href="" className="get-started-btn scrollto">
            Sign up
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
