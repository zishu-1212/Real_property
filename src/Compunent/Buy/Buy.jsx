import React from 'react'
import Navbar from '../Navbar/Navbar'
import PropertySale from '../PropertySale/PropertySale'
import LocationImage from '../LocationImage/LocationImage'
import AddNewPro from '../AddNewPro/AddNewPro'
import WelcomeReal from '../WelcomeReal/WelcomeReal'
import Footer from '../Footer/Footer'


function Buy() {
  return (
    <div>
      <Navbar/>
      <PropertySale first="Properties For Sale & Rent In Pakistan" />
      <LocationImage/>
      {/* <AddNewPro/> */}
      <WelcomeReal/>
      <Footer/>
    </div>
  )
}


export default Buy
