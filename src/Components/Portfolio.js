import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (data) {
    var projects = data.projects.map(({ title, image, category, url }) => {
      var projectImage = 'images/portfolio/' + image;
      return (
        <section
          key={title}
          data-aos="fade-left"
          className="portfolio-card"
          style={{
            backgroundImage: `url(${projectImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <section className="portfolio-content">
            <h2 className="portfolio-title">{title}</h2>
            <p>{category}</p>
            <a href={url} className="button">
              View More
            </a>
          </section>
        </section>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
