import React, { useEffect, useState } from "react";
import style from "./CountryInfo.module.css";
import { useNavigate } from "react-router-dom";

function CountryInfo({ country, loading}) {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState([]);
  const border = country.borders;
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        const filterdata = data.filter((country) =>
            border.includes(country.cca3)
          );
          setCountries(filterdata);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation: ",
          error
        );
      }
    };
    fetchCountries();
  }, [countries]);
  const navigate = useNavigate()
  const handleClick = (country) => {
    console.log(country);
    navigate(`/country/${country.name.common}`)
  };
 
  

  return (
    <>
      <div className={style.countryName}>
        <div className={style.image}>
          <img src={country.flags.png} alt="" />
        </div>
        <div>
          <h1>{country.name.common}</h1>
          <h3>{country.name.official}</h3>
        </div>
        <div className={style.areaContainer}>
          <div className={style.population}>
            <p>Population</p>
            <p>{country.population}</p>
          </div>
          <div className={style.population}>
            <p>
              Area(km <sup>2</sup>)
            </p>
            <p>{country.area}</p>
          </div>
        </div>
      </div>
      <div className={style.infoContainer}>
        <div className={style.wrapper}>
          <h2>Capital</h2>
          <p>{country.capital}</p>
        </div>
        <div className={style.wrapper}>
          <h2>Subregion</h2>
          <p>{country.subregion}</p>
        </div>
        <div className={style.wrapper}>
          <h2>Language</h2>
          <p>{Object.values(country.languages).join(", ")}</p>
        </div>
        <div className={style.wrapper}>
          <h2>Currency</h2>
          <p>
            {Object.entries(country.currencies).map((code) => (
              <span key={code}>{code[1].name}</span>
            ))}
          </p>
        </div>

        <div className={style.wrapper}>
          <h2>continents</h2>
          <p>
            {country.continents.map((continent) => (
              <span key={continent}>{continent}</span>
            ))}
          </p>
        </div>
        <div className={style.footer}>
            <h2>Neighboring Countries</h2>
            <div className={style.borders}>
                {countries.map((country)=>(
                    <div className={style.borderInfo} key={country.cca3}>
                        <img src={country.flags.svg} alt="" />
                        <p onClick={()=>handleClick(country)}>{country.name.common}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default CountryInfo;
