import React from "react";
import style from "./country.module.css";
import { useNavigate } from "react-router-dom";

function Country({ countryList }) {
  const navigate = useNavigate()
  const handleClick = (country) => {
    console.log(country);
    navigate(`/country/${country.name.common}`)
  };
  return (
    <>
      <div className={style.tableContainer}>
        <table className={style.countryTable}>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Population</th>
              <th>Area (km²)</th>
              <th>Region</th>
            </tr>
          </thead>
          {countryList.map((country,index) => (
            <tbody key={index}>
              <tr onClick={()=>handleClick(country)}>
                <td>
                  <img
                    src={country.flags.svg}
                    alt="Flag of China"
                  />
                </td>
                <td>{country.name.common}</td>
                <td>{country.population}</td>
                <td>{country.area}</td>
                <td>{country.region}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default Country;
