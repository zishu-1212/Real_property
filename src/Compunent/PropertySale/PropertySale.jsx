import React from 'react'
import "./PropertySale.css"
import TabRent from "../TabRent/TabRent"
function PropertySale(props) {
  return (
    <div className='backgroundImage'>
        <div className="d-flex  padding-top justify-content-center  " >
     <>{props.first}</>   
        </div>
        <div className="color_text">
            <p>{props.second} </p>
        </div>
        <div className="container">
            <TabRent/>
        </div>
      
    </div>
  )
}

export default PropertySale
