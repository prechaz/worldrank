import react, { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './page/home/Home'
import CountryPage from './page/countrypage/CountryPage'

function App() {
  const [countryList, setCountryList] = useState([]); 
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index  element={<Home countryList={countryList} setCountryList={setCountryList}/>} />
        <Route 
         path='country/:countryName'
         element={<CountryPage allCountry={countryList}/>}/>
      </Route>
    )
   )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
