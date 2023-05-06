import React from 'react'
import RentPropertySale from '../RentPropertySale/RentPropertySale'
import PropertySale from '../PropertySale/PropertySale'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


function Rent() {
  return (
    <div>
      <Navbar/>
     <PropertySale first="Property For Rent In Pakistan" second="SEARCH FOR PAKISTAN FLATS AND HOUSES FOR RENT"/>
     <Footer/>
    </div>
  )
}

export default Rent
