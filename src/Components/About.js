import React from "react";

const About = ({ data }) => {
  if (data) {
    var profilepic = data.image;
    var intro = data.intro;
    var more = data.more;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            data-aos="fade-right"
            src={profilepic}
            alt="Vivek Malhan"
          />
        </div>
        <div className="nine columns main-col " data-aos="fade-left">
          <h2>About Me</h2>

          <p>{intro}</p>
          <p>{more}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
