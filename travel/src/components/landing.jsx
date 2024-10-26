import {React} from "react";
import './landing.css'
import { Link } from "react-router-dom";
import Footer from "./Footer";
import chalbiDesert from '../imgs/The Chalbi desert in Kenya, by George Steinmetz.jpeg';
import safariExpedition from '../imgs/13a2cf88-9cb9-4167-8b0e-f3ebfadf83f9.jpeg';
import beachEscape from '../imgs/_.jpeg';
import mountainTreks from '../imgs/blankets.jpg';
import Testimonials from "./testimonials";
//import backgroundImage from '../imgs/Do Elephants Have Souls_ — The New Atlantis.jpeg'; // Update the path to your image


function LandingPage(){
    return(
        <div>
            

            <section className="hero">
                <div className="video-background">
                <iframe
                    className="background-video"
                    src="https://www.youtube.com/embed/KCONWLnm7FQ?autoplay=1&mute=1&loop=1&playlist=KCONWLnm7FQ"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Background Video"
                ></iframe>
                </div>
                <div className="hero-content">
                <h1>Young Boundless Nomads Adventures</h1>
                <p>Embrace the freedom of adventure. Travel without limits.</p>
                <div className="cta-buttons">
                    <button className="cta-button">Explore Adventures</button>
                    <button className="cta-button">Book Now</button>
                </div>
                </div>
            </section>
  

            <section className="adventures">
            <h2>Our Adventures</h2>
            <div className="adventure-grid">
                <div className="adventure-card">
                <img src={chalbiDesert} alt="Nomadic Desert Tour" />
                <div className="adventure-info">
                    <h3>Nomadic Desert Tours</h3>
                    <p>Experience the endless dunes and starry skies.</p>
                </div>
                </div>
                <div className="adventure-card">
                <img src={safariExpedition} alt="Safari Expedition" />
                <div className="adventure-info">
                    <h3>Safari Expeditions</h3>
                    <p>Get up close with wildlife in their natural habitats.</p>
                </div>
                </div>
                <div className="adventure-card">
                <img src={beachEscape} alt="Beach Escape" />
                <div className="adventure-info">
                    <h3>Beach Escapes</h3>
                    <p>Relax and unwind on pristine shores.</p>
                </div>
                </div>
                <div className="adventure-card">
                <img src={mountainTreks} alt="Mountain Treks" />
                <div className="adventure-info">
                    <h3>Party In Africa</h3>
                    <p>Explore rugged terrains and breathtaking views.</p>
                </div>
                </div>
            </div>
            </section>
            
            <section className="testimonials">
              <Testimonials/>
            </section>

            <br />
            <br />

            <section className="call-to-action" >
                <h2 style={{ color:' white '}}>Ready for your next adventure?</h2>
                <button className="cta-button">Start Your Journey</button>
            </section>

            <br />
            <br />

            <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <p>Ready to start your adventure? Get in touch with us today!</p>
                <div className="button-container">
                    <Link to="/contact" className="btn">Get in Touch</Link>
                    <Link to="/sign-up" className="btn">Register</Link>
                    <a href="mailto:info@ybna.com" className="btn">Contact Us</a>
                </div>
            </div>
            </section>
            
            <br />
            <br/>

            <div className="footer">
                <Footer/>
            </div>

        </div>
        
    )
}
export default LandingPage