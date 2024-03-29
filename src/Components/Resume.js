import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Resume = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (data) {
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree}
            <br />
            <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p className="description">{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <br />
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p className="description">{work.description}</p>
        </div>
      );
    });
    var recognitions = data.recognitions.map(function (recognition, index) {
      return (
        <div key={index}>
          <h3>{recognition.award}</h3>
          <p className="info">
            {recognition.organiser}
            <br />
            <span>&bull;</span> <em className="date">{recognition.month}</em>
          </p>
          <p className="description">{recognition.summary}</p>
        </div>
      );
    });

    var skills = data.skills.map(function (skills) {
      return (
        <div data-aos="fade-up" className="skill__container" key={skills.name}>
          <em className="skill__name">{skills.name}</em>
          <img alt={skills.name} className="skill__image" src={skills.img} />
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col" data-aos="fade-right">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col" data-aos="fade-left">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col" data-aos="fade-right">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col" data-aos="fade-left">
          {work}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col" data-aos="fade-right">
          <h1>
            <span>Recognitions</span>
          </h1>
        </div>

        <div className="nine columns main-col" data-aos="fade-left">
          {recognitions}
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Expertise in</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <div className="skills">{skills}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
