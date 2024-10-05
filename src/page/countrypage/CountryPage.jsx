import React, { useEffect, useState } from "react";
import style from "./countryPage.module.css";
import logo from "../../assets/Logo.svg";
import { useParams } from "react-router-dom";
import CountryInfo from "../../component/CountryInfo";
import Loader from "../../component/Loader.jsx";

function CountryPage({ allCountry }) {
  const { countryName } = useParams();
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await res.json();
        setCountryList(data);
        console.log(data);
      } catch (error) {
        console.log("error catching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [countryName]);
  return (
    <>
      <section className={style.section}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" /> {/* Displaying the logo */}
        </div>
       
          {loading ? (
            <Loader />
          ) : (
            <div className={style.container}>
              {
            countryList.map((country) => (
              <CountryInfo
                countryName={countryName}
                key={country}
                country={country}
                allCountry={allCountry}
              />
            ))}
            </div>
          )}
       
      </section>
    </>
  );
}

export default CountryPage;
