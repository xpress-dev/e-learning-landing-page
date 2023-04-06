import React from 'react';

const CourseItem = ({ icon, title, text }) => {
  return (
    <article className='relative bg-white p-5 rounded-xl shadow-xl flex flex-col gap-4 w-[22rem] h-[15rem] mx-auto'>
      <div>
        <img src={icon} className='absolute -top-5 left-5' />
      </div>
      <p className='mt-5 font-bold text-xl'>{title}</p>
      <p className='text-black/40 font-semibold'>{text}</p>
      <button className='text-left text-lg text-[#f74780]'>Get Started</button>
    </article>
  );
};

export default CourseItem;
