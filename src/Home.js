import React from 'react';
import Footer from './components/footer';
import Sidenav from './components/sidenav';
import './Home.css';

const Home = () => {
  return (
    <div className="page">
      <Sidenav />
      <Footer />
    </div>
  );
}

export default Home;
