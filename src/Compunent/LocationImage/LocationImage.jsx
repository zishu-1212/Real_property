import React from 'react'
import "./LocationImage.css"
import multanroad from "../../assets/multanroad.jpeg"
import saggian from "../../assets/1.-Lahore-Ring-Road-Saggian-Interchange.jpg"
import Sheikhupura from "../../assets/Sheikhupura.jpg"
import jarawala from "../../assets/Royal-Villas-Model-City-Faisalabad.jpg"
import band from "../../assets/faisalabad-2.png"
import { Link } from 'react-router-dom'
function LocationImage() {
  return (
    <>
    <div className="bg-white">
     <div className="head ">
        <h2 className='text-center pt-5'>Find Properties In Your City</h2>
        </div> 
<div className="container">
        <div className="row mt-5 mb-5">
            <div className="col-md-6 imageAllZoom mt-2">
              <Link to="/CardCompount">
              <div className="geeks">
<img src={saggian} width="100%" alt="" />
           
<div className="a781_Houses ps-4 pb-4 ">

<span>781 Warehouses for sale in saggian Bipass</span><br/>
<span>See all Listings </span>

</div>
{/* <div className="position-absolute"> 
      <button className='btn btn-warning shadow-none text-dark '>Faslabad</button>
      </div>   */}
              </div></Link>
            </div>
            <div className="col-md-6 imageAllZoom mt-2">
            <Link to="/CardCompount">
              <div className="geeks">
<img src={multanroad} width="100%" alt="" />
           
<div className="a781_Houses ps-4 pb-4 ">

<span>781 Warehouses for sale in Multan Road</span><br/>
<span>See all Listings </span>

</div>
{/* <div className="position-absolute"> 
      <button className='btn btn-warning shadow-none text-dark '>Faslabad</button>
      </div>   */}
              </div></Link>
            </div>
            <div className="col-md-4 imageAllZoom m-auto mt-2">
            <Link to="/CardCompount">       <div className="geeks ">
<img src={Sheikhupura} width="100%" alt="" />
           
<div className="a781_Houses ps-4 pb-4 ">

<span>781 Warehouses for sale in Sheikhupura Road</span><br/>
<span>See all Listings </span>

</div>
{/* <div className="position-absolute"> 
      <button className='btn btn-warning shadow-none text-dark '>Faslabad</button>
      </div>   */}
              </div></Link>
            </div>
            <div className="col-md-4 imageAllZoom m-auto mt-2">
            <Link to="/CardCompount"> <div className="geeks ">
<img src={jarawala} width="100%" alt="" />
           
<div className="a781_Houses ps-4 pb-4 ">

<span>781 Warehouses for sale in Jaranwala Road</span><br/>
<span>See all Listings </span>

</div>
{/* <div className="position-absolute"> 
      <button className='btn btn-warning shadow-none text-dark '>Faslabad</button>
      </div>   */}
              </div></Link>
            </div>
            <div className="col-md-4 imageAllZoom m-auto mt-2">
            <Link to="/CardCompount"> <div className="geeks ">
<img src={band} width="100%" alt="" />
           
<div className="a781_Houses ps-4 pb-4 ">

<span>781 Warehouses for sale in Faslabad Road</span><br/>
<span>See all Listings </span>

</div>
{/* <div className="position-absolute"> 
      <button className='btn btn-warning shadow-none text-dark '>Faslabad</button>
      </div>   */}
              </div></Link>
            </div>
        </div>

    </div></div>
      

    </>
  )
}

export default LocationImage

