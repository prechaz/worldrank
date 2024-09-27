import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg"; // Importing logo for display
import style from "./home.module.css"; // Importing CSS styles
import Search from "../../component/Search"; // Importing the Search component for filtering
import Aside from "../../component/Aside"; // Importing the Aside component for filters
import Country from "../../component/Country"; // Importing the Country component to display the list of countries

function Home() {
  // State variables to manage country data and filters
  const [countryList, setCountryList] = useState([]); // Full list of countries fetched from the API
  const [filteredSearch, setFilteredSearch] = useState([]); // List of countries after applying filters
  const [search, setSearch] = useState(""); // Search term for filtering countries by name, region, or subregion
  const [population, setPopulation] = useState(""); // Population threshold for filtering countries
  const [region, setRegion] = useState(""); // Selected region for filtering countries
  const [isUNMember, setIsUNMember] = useState(false); // Checkbox state to filter UN member countries
  const [isIndependent, setIsIndependent] = useState(false); // Checkbox state to filter independent countries

  // Fetch country data once when the component mounts
  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all"); // Fetching country data from API
        const data = await res.json(); // Parsing the response to JSON
        console.log(data); // Logging the fetched data for debugging
        const limitedData = data; // Here you can limit the data if needed
        setCountryList(limitedData); // Setting the full list of countries in state
        setFilteredSearch(limitedData); // Setting the filtered list initially to the full list
      } catch (error) {
        console.error(error); // Logging any errors that occur during the fetch
      }
    }
    fetchCountry(); // Calling the function to fetch countries
  }, []); // Empty dependency array means this runs only once on mount

  // Filter country list based on search input and other selected filters
  useEffect(() => {
    let filteredData = countryList; // Start with the full country list

    // Filter by search term (name, region, or subregion)
    if (search !== "") {
      filteredData = filteredData.filter((country) => {
        const countryName = country.name.common.toLowerCase(); // Get the country name in lowercase
        const countryRegion = country.region.toLowerCase(); // Get the country region in lowercase
        const countrySubRegion = country.subregion
          ? country.subregion.toLowerCase() // Get the subregion if it exists
          : "";
        const searchTerm = search.toLowerCase(); // Convert search term to lowercase for comparison
        return (
          countryName.includes(searchTerm) || // Check if the name includes the search term
          countryRegion.includes(searchTerm) || // Check if the region includes the search term
          countrySubRegion.includes(searchTerm) // Check if the subregion includes the search term
        );
      });
    }

    // Filter by population (greater than the selected population)
    if (population) {
      filteredData = filteredData.filter((country) => {
        return country.population > population; // Filter countries with a population greater than the specified value
      });
    }

    // Filter by selected region
    if (region) {
      filteredData = filteredData.filter((country) => {
        return country.region === region; // Filter countries that belong to the selected region
      });
    }

    // Filter by UN member status
    if (isUNMember) {
      filteredData = filteredData.filter((country) => country.unMember); // Only include countries that are UN members
    }

    // Filter by independence status
    if (isIndependent) {
      filteredData = filteredData.filter((country) => country.independent); // Only include independent countries
    }

    // Update the filtered country list
    setFilteredSearch(filteredData); // Update the state with the filtered list
  }, [search, population, isUNMember, isIndependent, countryList, region]); // Runs when any of these dependencies change

  return (
    <section>
      <div className={style.logo}>
        <img src={logo} alt="Logo" /> {/* Displaying the logo */}
      </div>
      <div className={style.container}>
        <Search
          countryList={filteredSearch} // Pass the filtered country list to the Search component
          search={search} // Pass the current search term
          setSearch={setSearch} // Pass the function to update the search term
        />
        <div className={style.mainContent}>
          <div className={style.asideFilter}>
            <Aside
              setRegion={setRegion} // Pass function to set the selected region
              setPopulation={setPopulation} // Pass function to set the selected population
              setIsUNMember={setIsUNMember} // Pass function to set UN member status
              setIsIndependent={setIsIndependent} // Pass function to set independence status
            />
          </div>
          <div className={style.countryList}>
            <Country countryList={filteredSearch} /> {/* Display the filtered list of countries */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; // Exporting the Home component for use in other parts of the application
