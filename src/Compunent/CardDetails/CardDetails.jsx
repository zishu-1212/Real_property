import React from "react";
import "./CardDetail.css"
import { FaBath } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { BsArrowsMove } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import house from "../../assets/images house.jpeg";
function CardDetails() {
  return (
    <div>
      <div style={{  borderRadius: "7px" }} className="card card_shadow mt-3">
        <div className="d-flex">
          <div className="p-2">
            <img src={house} width="100%" height="80%" alt="" />
          </div>
          <div className="">
            <div className="d-flex align-items-center mt-4">
                 <h6 className="me-2">PKR </h6>
            <h4>2.35 Lac</h4>
            </div>
           <div className="d-flex">
            <p className="me-3 blueww m-0">House For Rent</p> | <p className="ms-3 m-0">Johar Town, Lahore</p>
           </div>
           <div className=""><p className="m-0"> 1 kanal double story house for rent in johar town best for silent office</p>
<p>6 beds with attached washrooms double tv lounge drawing dining double k</p>
</div>

<div className="d-flex justify-content-around align-items-center">
    <p className=""><FaBed className="mb-1"/> <span className="">Room</span> </p>
    <p className=""><FaBath className="mb-2"/> <span className="">Bed</span></p>
    <p ><BsArrowsMove  className="mb-1"/> <span >Marla</span></p>
    
</div>
<hr className="mt-0"/>
<div className="bottom d-flex justify-content-end gap-3 my-3" >
<button className="btn  outline_dark shadow-none"><HiOutlineMail className="fs-6 mb-1 "/> Email</button>
<button className="btn  btn-color shadow-none"><BsTelephoneFill className="fs-6 mb-1 "/> Phone</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
