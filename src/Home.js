import React from 'react';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Footer from './components/footer';
import Sidenav from './components/sidenav';
import Skills from './components/skills';
import './Home.css';

const Home = () => {
  return (
    <div className="page">
      <Sidenav />
      <About />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
