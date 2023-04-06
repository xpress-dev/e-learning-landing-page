import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <Hero />
      <Courses />
    </main>
  );
};

export default App;
