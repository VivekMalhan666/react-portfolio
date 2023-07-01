import React, { lazy, useEffect, useState } from "react";
import "./App.css";
const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const About = lazy(() => import("./Components/About"));
const Resume = lazy(() => import("./Components/Resume"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const Portfolio = lazy(() => import("./Components/Portfolio"));

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
