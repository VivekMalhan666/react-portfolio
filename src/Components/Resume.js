import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree}
              <br /> <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p className="description">{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
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
      var skills = this.props.data.skills.map(function (skills) {
        return (
          <div className="skill__container">
            <em className="skill__name">{skills.name}</em>
            <img className="skill__image" src={skills.img} />
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <div className="skills">{skills}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
