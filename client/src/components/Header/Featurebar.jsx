import React from 'react';
import { Link } from 'react-router-dom';
import SectionCSS from './featurebar.module.css';

const Feature = () => {
  return (
    <div className="bg-[#0079FF] ">
      <div className="flex mx-[7%] py-3 gap-3">
        <div className="">
          <Link to="/">Home</Link>
        </div>
        <div className="">
          <Link to="/">Food</Link>
        </div>
        <div className="">
          <Link to="/report">Report</Link>
        </div>
        <div className="">
          <Link to="/recipe">Recipe</Link>
        </div>
        <div className="">
          <a href="/">Exercise</a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
