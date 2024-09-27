import React, { useState } from "react";
import style from "./aside.module.css";

function Aside({setPopulation, setRegion,setIsUNMember, setIsIndependent}) {
  const[active, setActive] = useState('')
  const population = [
    { id: 0, population: "Population" },
    { id: 1, population: 10000},
    { id: 2, population: 100000},
    { id: 3, population: 1000000},
    { id: 4, population: 10000000},
    { id: 5, population: 50000000},
    { id: 6, population: 100000000},
    { id: 7, population: 150000000},
    { id: 8, population: 170000000 },
    { id: 9, population: 200000000 },
    { id: 10, population: 220000000 },
    { id: 11,population: 250000000 },
  ];
  const regions =[
    {id:0 , region: "Americas"},
    { id: 1, region: "Antarctic"},
    { id: 2, region: "Africa"},
    { id: 3, region: "Asia"},
    { id: 4, region: "Europe"},
    { id: 5, region: "Oceania"}
    
  ]

  function handleChange(e){
    const selectedPopulation = Number(e.target.value);
    setPopulation(selectedPopulation)
  }
  function handleClick(region){
    setRegion(region)
    setActive(region)
    console.log(region)
  }
  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    if (name === "unMember") {
      setIsUNMember(checked);
    } else if (name === "independent") {
      setIsIndependent(checked);
    }
  }
  return (
    <>
      <p className={style.category}>Sort by</p>
      <select onChange={handleChange} className={style.option} name="" id="">
        {
          population.map((option)=>(
            <option id={option.id} value={option.population}>{option.population}</option>
          ))
        }
      </select>
      <p className={style.category}>Region</p>
      <ul>
        {
          regions.map((region)=>(
            <li  className={active === region.region ? style.active : ""} onClick={()=>{handleClick(region.region)}}>{region.region}</li>
          ))
        }
      </ul>
      <p className={style.category}>status</p>
      <div className={style.input}>
      <div className={style.check}>
          <input
            type="checkbox"
            name="unMember"
            id="unMember"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="unMember">Member of the United Nations</label>
        </div>
        <div className={style.check}>
          <input
            type="checkbox"
            name="independent"
            id="independent"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="independent">Independent</label>
        </div>
      </div>
    </>
  );
}

export default Aside;
