import React from 'react'
import "./RentPropertySale.css"
import TabRent from "../TabRent/TabRent"
function RentPropertySale() {
  return (
    <div className='backgroundImage'>
        <div className="d-flex  padding-top justify-content-center  " >
     <>Property For Rent In Pakistan</>   
        </div>
        <div className="color_text">
            <p>SEARCH FOR PAKISTAN FLATS AND HOUSES FOR RENT</p>
        </div>
        <div className="container">
            <TabRent/>
        </div>
      
    </div>
  )
}

export default RentPropertySale
