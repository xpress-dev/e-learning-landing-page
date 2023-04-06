import mobileHeroImage from '../assets/image-hero-mobile.png';
import tabletHeroImage from '../assets/image-hero-tablet.png';
import desktopHeroImage from '../assets/image-hero-desktop.png';

const Hero = () => {
  return (
    <section className='flex flex-col sm:flex-row py-3.5 px-4 sm:h-[35rem] lg:h-[40rem] lg:max-w-[72rem] lg:mx-auto '>
      <div className='flex flex-col gap-7 sm:w-1/2  sm:py-5 sm:pl-10 '>
        <h1 className='text-[40px] sm:text-md sm:mt-10 text-[#13183f] w-3/4 sm:w-full font-extrabold leading-tight lg:text-[3.5rem] lg:mt-24'>
          Maximize skill, minimize budget
        </h1>
        <p className='text-[#83869a]'>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className='px-8 py-4 text-white bg-gradient-to-b from-[#ff6f48] to-[#f02aa6] rounded-full w-40 font-semibold mt-5'>
          Get Started
        </button>
      </div>
      <div className='flex-1 hidden sm:block'>&nbsp;</div>
      <div
        className='absolute top-0 right-0 w-1/2 h-[35rem] -z-50 hidden sm:block lg:hidden'
        style={{
          backgroundImage: `url('${tabletHeroImage}')`,
          backgroundPosition: '10% 60%',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div
        className='absolute top-0 right-0 w-1/2 h-[45rem] -z-50 hidden lg:block'
        style={{
          backgroundImage: `url('${desktopHeroImage}')`,
          backgroundPosition: '10% 90%',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <img src={mobileHeroImage} className='sm:hidden max-w-xl mx-auto' />
    </section>
  );
};

export default Hero;
