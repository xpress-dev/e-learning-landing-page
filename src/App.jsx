import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className='overflow-x-hidden bg-slate-50'>
      <Header />
      <Hero />
      <Courses />
      <Footer />
    </main>
  );
};

export default App;
