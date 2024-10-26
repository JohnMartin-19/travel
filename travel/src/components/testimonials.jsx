import React from "react";
import Slider from "react-slick";
import './testimonials.css'
const testimonials = [
  {
    text: "An adventure of a lifetime! Boundless Nomads made my dream trip come true. Can't wait for the next one!",
    name: "Sarah K.",
  },
  {
    text: "Traveling with these guys was like exploring with old friends. Highly recommend!",
    name: "John D.",
  },
  {
    text: "Amazing experiences and well-organized trips! Every detail was taken care of.",
    name: "Emma L.",
  },
  {
    text: "Incredible service and unforgettable memories. I’ll be back for more!",
    name: "Michael P.",
  },
  {
    text: "A journey filled with joy and excitement. Thank you for the wonderful adventure!",
    name: "Lisa M.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed
  };

  return (
    <section className="testimonials">
      <h2>What Our Travelers Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <p>"{testimonial.text}"</p>
            <footer>- {testimonial.name}</footer>
          </blockquote>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
