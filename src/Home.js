import React from 'react';
import About from './components/about';
import Education from './components/education';
import Footer from './components/footer';
import Sidenav from './components/sidenav';
import './Home.css';

const Home = () => {
  return (
    <div className="page">
      <Sidenav />
      <About />
      <hr />
      <Education />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
