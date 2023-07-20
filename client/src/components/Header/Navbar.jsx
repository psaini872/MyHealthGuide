import React from 'react';
// import NavbarCSS from './navbar.module.css';
import { useAppContext } from '../../context/appContext';

const Navbar = () => {
  const { user, logout } = useAppContext();
  return (
    <div className="flex w-[90%] max-w-7xl mx-auto gap-5 my-3 align-middle">
      <p className="grow text-2xl font-semibold tracking-wide leading-5 text-slate-700 my-auto">
        MyNutritionGuide
      </p>
      <p className="text-slate-600 text-base font-medium my-auto">
        Hi, <spam className="text-blue-500">{user.username}</spam>
      </p>
      <button
        type="button"
        onClick={logout}
        className="text-white text-base font-medium border px-2 rounded-lg bg-[#00548f] py-1"
      >
        Logout
      </button>
    </div>
    // <div className="flex py-5 px-10 align-middle">
    //   <h1 className="grow">
    //     MyNutritionGuide
    //   </h1>
    //   <p className="">
    //     Hi,
    //     <a className="text-black" href="/">
    //       {user.username}
    //     </a>
    //   </p>
    //   <a href="/" className="">
    //     Blog
    //   </a>
    //   <butto
    //     type="button"
    //     onClick={logout}
    //     className=""
    //   >
    //     Logout
    //   </butto>
    // </div>
  );
};

export default Navbar;
