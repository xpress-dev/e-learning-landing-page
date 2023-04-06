import logoDark from '../assets/logo-dark.svg';
const Header = () => {
  return (
    <header className='w-full flex justify-between p-4 sm:px-12 items-center lg:max-w-[72rem] lg:mx-auto '>
      <img src={logoDark} className='h-6' />
      <button className='px-6 py-3 rounded-full bg-[#13183f] text-white font-semibold hover:bg-[#666ca3]'>
        Get Started
      </button>
    </header>
  );
};

export default Header;
