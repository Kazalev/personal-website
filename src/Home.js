import React from 'react';
import About from './components/about';
import Footer from './components/footer';
import Sidenav from './components/sidenav';
import './Home.css';

const Home = () => {
  return (
    <div className="page">
      <Sidenav />
      <About />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
