import Hero from './Hero';
import React, { FunctionComponent } from 'react';
import About from './About';
import Career from './Career';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';

export type PortfolioPageProps = {
  // No Props
};

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {
  return (
    <div
      className='w-screen overflow-y-auto overflow-x-hidden h-screen'
      style={{
        scrollBehavior: 'smooth',
        perspective: '10px',
      }}
    >
      <Hero />

      <main className='bg-bg z-10'>
        <Navbar />
        <About />
        <Projects />
        <Career />
        <Contact
          name='Paolo Vincent M. Julian'
          course='Software Engineer'
          email='paolojulian.personal@gmail.com'
          address='#100 Upper Dagsian, Baguio City'
          mobileNo='+639279488654'
        />
      </main>
    </div>
  );
};

export default PortfolioPage;
