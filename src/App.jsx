import react from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './page/home/Home'

function App() {
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route to='/' element={<MainLayout/>}>
        <Route index  element={<Home/>} />
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
