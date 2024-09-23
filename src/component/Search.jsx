import React, { useState } from "react";
import searchIcon from "../assets/Search.svg";
import style from './search.module.css'
function Search() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={style.searchBar}>
      <h3>hello</h3>
      <div className={style.searchBox}>
        <img src={searchIcon} alt="" />
        <input value={search} type="text" placeholder="Search by Name, Region, Subregion" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Search;
