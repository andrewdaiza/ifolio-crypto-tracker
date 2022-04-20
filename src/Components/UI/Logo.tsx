import logo from "../../assets/logo.jpg";

const Logo = () => {
  return (
    <div className='items-center flex'>
      <span className='w-14 h-14 text-sm text-white bg-blueGray-200 inline-flex justify-center rounded-full'>
        <img
          alt='Site Logo'
          className='w-full rounded-full align-middle border-none shadow-lg'
          src={logo}
        />
      </span>
    </div>
  );
};

export default Logo;
