import React from 'react';
import CourseItem from './CourseItem';
import animationIcon from '../assets/icon-animation.svg';
import designIcon from '../assets/icon-design.svg';
import photographyIcon from '../assets/icon-photography.svg';
import cryptoIcon from '../assets/icon-crypto.svg';
import businessIcon from '../assets/icon-business.svg';
const Courses = () => {
  return (
    <section className='w-full  sm:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
      <div className='bg-gradient-to-b from-[#ff6f48] to-[#f02aa6] text-white p-6 rounded-2xl w-[22rem] sm:h-[15rem] font-bold text-2xl mx-auto'>
        <p>Check out our most popular courses!</p>
      </div>
      <CourseItem
        icon={animationIcon}
        title='Animation'
        text='Learn the latest animation techniques to create stunning motion design and captivate your audience.'
      />
      <CourseItem
        icon={designIcon}
        title='Design'
        text='Create beautiful, usable interfaces to help shape the future of how the web looks.'
      />
      <CourseItem
        icon={photographyIcon}
        title='Photography'
        text='Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.'
      />
      <CourseItem
        icon={cryptoIcon}
        title='Crypto'
        text='All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.'
      />
      <CourseItem
        icon={businessIcon}
        title='Business'
        text='A step-by-step playbook to help you start, scale, and sustain your business without outside investment.'
      />
    </section>
  );
};

export default Courses;
