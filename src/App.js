import React from "react";
import SectionTen from "./Components/SectionTen";
import SectionNine from "./Components/SectionNine";
import SectionEight from "./Components/SectionEight";
import SectionSeven from "./Components/SectionSeven";
import SectionSix from "./Components/SectionSix";
import SectionFive from "./Components/SectionFive";
import SectionFour from "./Components/SectionFour";
import SectionThree from "./Components/SectionThree";
import SectionTwo from "./Components/SectionTwo";
import SectionOne from "./Components/SectionOne";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

// Css files
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

import GLightbox from 'glightbox'; 
import AOS from 'aos'; 

function App() {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  return (
    <>
      <Header />

      <main id="main">
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
      </main>
      <Footer />
    </>
  );
}

export default App;
