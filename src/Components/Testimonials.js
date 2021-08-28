import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimonials = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user} data-aos="fade-right">
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
