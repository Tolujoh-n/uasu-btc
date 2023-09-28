import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Investors from "./Components/Investors";
import Moreabout from "./Components/Moreabout";
import Tokenomics from "./Components/Tokenomics";
import Otc from "./Components/Otc";
import About from "./Components/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Waitlist from "./Components/Waitlist";
import Faq from "./Components/Faq";

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
    <Router>
      <>
        <Header />
        <main id="main">
          <Routes> {/* Use Routes instead of Route */}
            <Route path="/" element={ // Use element prop instead of direct component
              <>
                <Hero />
                <About />
                <Otc />
                <Moreabout />
                {/* <Tokenomics /> */}
                <Investors />
                <Faq />
              </>
            } />
            <Route path="/waitlist" element={<Waitlist />} /> {/* Use element prop */}
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
