import React from "react";
import Footer from '../components/Footer'
import './AboutUs.css';
import Nanyuki from '../imgs/mount-kenya-7377735.jpg';
import Naivasha from '../imgs/Agness in Africa_ Why You Need to Visit Lake Naivasha, Kenya _ Etramping.jpeg';
import Nakuru from '../imgs/birds-4644652.jpg';
import Kericho from '../imgs/StockCake-Sunrise Tea Harvest_1728578525.jpg'

function About(){
    return(
        <div className="about-us">
        <section className="intro-card">
        <div >
            <h1>Welcome to Young Boundless Nomads Adventures</h1>
            <p>
            We are a group of friends who have been close since our primary school days.
            Our journey continued in university, where we added new friends to our circle,
            all sharing a common passion for adventure and exploration. In our pursuit of
            unforgettable experiences, we established this organization to inspire young
            generations to travel and discover the beauty of our world.
            </p>
        </div>
        </section>
  
        <section className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To provide adventurous travel experiences that foster personal growth, 
              friendship, and a deep appreciation for our planet.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To become the leading travel organization for young explorers, 
              making travel accessible, fun, and transformative.
            </p>
          </div>
        </section>
  
        <section className="trips">
          <h2>Our Adventures</h2>
          <div className="trip-grid">
            <div className="trip-card" data-aos="fade-up">
              <img src={Nanyuki} alt="Nanyuki" />
              <h3>Nanyuki</h3>
              <p>Experience the breathtaking views of Mount Kenya.</p>
            </div>
            <div className="trip-card" data-aos="fade-up">
              <img src={Kericho} alt="Kericho" />
              <h3>Kericho</h3>
              <p>Discover the lush tea plantations and rolling hills.</p>
            </div>
            <div className="trip-card" data-aos="fade-up">
              <img src={Nakuru} alt="Nakuru" />
              <h3>Nakuru</h3>
              <p>Witness the stunning landscapes of Lake Nakuru.</p>
            </div>
            <div className="trip-card" data-aos="fade-up">
              <img src={Naivasha} alt="Naivasha" />
              <h3>Naivasha</h3>
              <p>Relax by the beautiful shores of Lake Naivasha.</p>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section>
            <Footer/>
        </section>
      </div>
    )
}
export default About