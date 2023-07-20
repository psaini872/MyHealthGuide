import React from "react";
// import { useEffect } from "react";

import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import CSS from "./searchbar.module.css";
// import Search from "/Users/pranshusaini/Desktop/project $th sem/my-health-gru/client/src/assets/images/search.png";

const SearchBar = () => {
  const { searchFood } = useAppContext();
  const [search, setSearch] = useState("");
  // useEffect(() => {
  //   searchFood();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [qurry]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFood(search);
    // updateQurry(search);
    // searchFood();

    setSearch("");
  };
  return (
    <form className={CSS.base} role="search" onSubmit={handleSubmit}>
      <input
        className={CSS.input}
        type="search"
        selected={search}
        onChange={handleChange}
        placeholder="Search"
        aria-label="Search"
      />

      <button className={CSS.button} type="submit">
        <p className={CSS.search}>Search</p>
      </button>
    </form>

    // <div className={CSS.wrapper}>
    //   <div className={CSS.container}>
    //     <div className={`${CSS.SearchWrap} ${CSS.searchWrap6}`}>
    //       <form role="search" onSubmit={handleSubmit} className={CSS.searchBox}>
    //         <input
    //           type="search"
    //           className={CSS.input}
    //           placeholder="search..."
    //           value={search}
    //           onChange={handleChange}
    //         />
    //         <div className={CSS.btn} type="submit">
    //           <p>Search</p>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SearchBar;
