import React from "react";

const Sidebar = ({ showHideSidebar }: { showHideSidebar: boolean }) => {
  return (
    <>
      <nav
        className={`h-screen lg:block lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:flex-row lg:flex-nowrap lg:overflow-hidden shadow-xl bg-white lg:w-auto 2xl:w-52 z-10 py-4 px-6 ease-in-out duration-300 lg:translate-x-0
          ${showHideSidebar ? "block" : "hidden"} 
        `}
      >
        <div className='flex-col lg:min-h-full lg:flex-nowrap px-0 flex flex-wrap lg:items-center w-full mx-auto'>
          <button
            className='cursor-pointer text-black opacity-50 lg:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
            type='button'
          ></button>
          <div className='lg:block text-left lg:pb-2 text-blueGray-600 mr-0 inline-block text-sm uppercase font-bold p-4 px-0'>
            Crypto Tracker
          </div>
          <hr className='lg:min-w-full my-4' />
          <h6 className='lg:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
            Market Data
          </h6>
          <ul className='lg:flex-col lg:min-w-full flex flex-col list-none'>
            <li className='items-center flex pl-2'>
              <a href='/' className='text-xs uppercase py-3 font-bold block'>
                Crypto Charts
              </a>
            </li>
            <li className='items-center pl-2'>
              <a
                href='/portfolio'
                className='text-xs uppercase py-3 font-bold block'
              >
                Portfolio
              </a>
            </li>
          </ul>

          <hr className='lg:min-w-full my-4' />
          <h6 className='lg:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
            Cryptocurrencies
          </h6>
          <ul className='lg:flex-col lg:min-w-full flex flex-col list-none lg:mb-4'>
            <li className='items-center pl-2'>
              <a href='#' className='text-xs uppercase py-3 font-bold block'>
                Gainers
              </a>
            </li>

            <li className='items-center pl-2'>
              <a href='#' className='text-xs uppercase py-3 font-bold block'>
                Losers
              </a>
            </li>
            <li className='items-center pl-2'>
              <a
                href='#'
                className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
              >
                Exchanges
              </a>
            </li>

            <li className='items-center pl-2'>
              <a
                href='#'
                className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
              >
                Ranking
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
