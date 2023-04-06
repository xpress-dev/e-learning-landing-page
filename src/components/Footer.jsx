import React from 'react';
import lightLogo from '../assets/logo-light.svg';
const Footer = () => {
  return (
    <footer className='bg-[#13183f] h-[120px] w-full'>
      <div className='max-w-6xl mx-auto flex h-full justify-between items-center'>
        <img src={lightLogo} className='w-[86px] sm:w-[120px] ml-5' />
        <button className='bg-gradient-to-b w-[167px] h-[56px] mr-5 text-white font-semibold text-lg from-[#4851ff] to-[#f02aa6] rounded-full hover:opacity-80'>
          Get Started
        </button>
      </div>
    </footer>
  );
};

export default Footer;
