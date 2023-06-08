import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Buy from './Compunent/Buy/Buy'
import Navbar from './Compunent/Navbar/Navbar'
import Footer from './Compunent/Footer/Footer'
import Rent from './Compunent/Rent/Rent'
import CardCompount from './Compunent/CardCompount/CardCompount'
import AdminDashdord from './Compunent/AdminPanial/AdminDashdord/AdminDashdord'
import AddDashboard from './Compunent/AdminPanial/AdminListDash/AddDashboard'

function App() {
  return (
    <div className='App'>
 <BrowserRouter>
 
 <Routes>
  <Route exact  path='/' element={<Buy/>}/>
  <Route exact  path='/Rent' element={<Rent/>}/>
  <Route exact  path='/CardCompount' element={<CardCompount/>}/>
  <Route exact  path='/AddDashboard' element={<AdminDashdord/>}/>

  <Route exact  path='/PropertiesDashdord' element={<AddDashboard/>}/>
    

  
 </Routes>

 </BrowserRouter>
    </div>
  )
}

export default App
