import { useState } from "react";
import Logo from "../../Components/UI/Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ onShowHideSidebar }: { onShowHideSidebar: () => void }) => {
  return (
    <>
      <nav className='w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-slate-900'>
        <div className='w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
          <button
            className='block lg:hidden'
            type='button'
            onClick={() => onShowHideSidebar()}
          >
            <GiHamburgerMenu size={42} className='text-white cursor-pointer' />
          </button>
          <div className='text-white font-semibold text-md lg:inline-block'>
            iFOLIO
          </div>
        </div>
        <Logo />
      </nav>
    </>
  );
};

export default Header;
