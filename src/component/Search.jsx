import React, { useState } from "react";
import searchIcon from "../assets/Search.svg";
import style from './search.module.css'
function Search({search,setSearch, countryList}) {
 
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search)
  };
  return (
    <div className={style.searchBar}>
      <h3>found {countryList.length} country</h3>
      <div className={style.searchBox}>
        <img src={searchIcon} alt="" />
        <input value={search} type="text" placeholder="Search by Name, Region, Subregion" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Search;
