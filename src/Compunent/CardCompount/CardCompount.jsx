import React, { useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import Range from "../Range/Range";
import { TbMathGreater } from "react-icons/tb";

import { FaBath } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import house from "../../assets/images house.jpeg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function CardCompount() {
  const [visibal, setVisibal] = useState(false);
  const card = [
    {
      img: "assets/images house.jpeg",
      price: "2.35 Lac",
      place: "Johar Town, Lahore",
      marla:
        "1 kanal double story house for rent in johar town best for silent office",
      roomDetail:
        "6 beds with attached washrooms double tv lounge drawing dining double",
    },
    {
      img: "assets/This.webp",
      price: "13,000.00",
      place: "Sher Shah Colony, Lahore",
      marla: "House for rent - 3 marla ground floor",
      roomDetail:
        "House for rent 3 marla lower portion (ground floor) furnished 2 bedrooms 1",
    },
    {
      img: "assets/Rawson.jpg",
      price: " 1.10 Lac",
      place: "Bahria Town - Jasmine Block, Bahria Town - Sector C",
      marla: "10 marla brand new luxury house for rent at reasonable demand",
      roomDetail:
        "10 marla brand new luxury house for rent 5 bed room with attach bath dri",
    },
    {
      img: "assets/property.jpg",
      price: "90,000.00",
      place: "Askari - 10",
      marla: "House for rent askari x 617 c lahore",
      roomDetail:
        "House is available for rent at following detail askari x 617 c lahore rent 90",
    },
    {
      img: "assets/modern.jpg",
      price: " 1.10 Lac",
      place: "Bahria Town - Jasmine Block, Bahria Town - Sector C",
      marla: "10 marla brand new luxury house for rent at reasonable demand",
      roomDetail:
        "10 marla brand new luxury house for rent 5 bed room with attach bath dri",
    },
    {
      img: "assets/corrected.jpg",
      price: "13,000.00",
      place: "Sher Shah Colony, Lahore",
      marla: "House for rent - 3 marla ground floor",
      roomDetail:
        "House for rent 3 marla lower portion (ground floor) furnished 2 bedrooms 1",
    },
    {
      img: "assets/images house.jpeg",
      price: "2.35 Lac",
      place: "Johar Town, Lahore",
      marla:
        "1 kanal double story house for rent in johar town best for silent office",
      roomDetail:
        "6 beds with attached washrooms double tv lounge drawing dining double",
    },
    {
      img: "assets/This.webp",
      price: "13,000.00",
      place: "Sher Shah Colony, Lahore",
      marla: "House for rent - 3 marla ground floor",
      roomDetail:
        "House for rent 3 marla lower portion (ground floor) furnished 2 bedrooms 1",
    },
    {
      img: "assets/Rawson.jpg",
      price: " 1.10 Lac",
      place: "Bahria Town - Jasmine Block, Bahria Town - Sector C",
      marla: "10 marla brand new luxury house for rent at reasonable demand",
      roomDetail:
        "10 marla brand new luxury house for rent 5 bed room with attach bath dri",
    },
    {
      img: "assets/property.jpg",
      price: "90,000.00",
      place: "Askari - 10",
      marla: "House for rent askari x 617 c lahore",
      roomDetail:
        "House is available for rent at following detail askari x 617 c lahore rent 90",
    },
    {
      img: "assets/modern.jpg",
      price: " 1.10 Lac",
      place: "Bahria Town - Jasmine Block, Bahria Town - Sector C",
      marla: "10 marla brand new luxury house for rent at reasonable demand",
      roomDetail:
        "10 marla brand new luxury house for rent 5 bed room with attach bath dri",
    },
    {
      img: "assets/corrected.jpg",
      price: "13,000.00",
      place: "Sher Shah Colony, Lahore",
      marla: "House for rent - 3 marla ground floor",
      roomDetail:
        "House for rent 3 marla lower portion (ground floor) furnished 2 bedrooms 1",
    },
  ];
  return (
    <>
    <Navbar/>
    <div className="container my-4">
      <div className="card py-4 px-2 card_shadow mt-5">
        <div className="row ">
     
          <div className="col-md-4 d-flex">
            <select
              style={{ height: "37px" }}
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-md example"
            >
              <option selected>Location</option>
              <option value="1">Band Rd</option>
              <option value="2">Jaranwala Rd</option>
              <option value="3">Shaikhupura Rd</option>
              <option value="4">Multan Rd</option>
            </select>
          </div>
          <div className="col-md-3">
            <select
              style={{ height: "37px" }}
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-lg example"
            >
              <option selected>Warehouses </option>
              <option value="1">Factories</option>
              <option value="2">Farmhouses</option>
              <option value="3">industria plots</option>
              <option value="4">commercial buildings</option>
            </select>
          </div> 
          
          <div className="col-md-3 d-flex " style={{ gap: "10px" }}>
            <select
              style={{ height: "37px" }}
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-lg example"
            >
              <option selected>Rent</option> 
              <option value="1">Buy</option>
            </select>
            <div className="">
              
              <button className="btn btn-color shadow-none ">Search</button>
            </div>
          </div>
          <div className="col-md-2">
            <button
              className="btn shadow-none"
              onClick={() => setVisibal(!visibal)}
            >
              More Filters
            </button>
          </div>
        </div>
        <div className=" row alignn-items-center">
          {visibal ? (
            <>
            
              <div className="col-md-3 d-flex align-items-center">
                <div className="mt-3">
                  <span></span>
                  <Range />
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center">
                <div className="mt-3">
                  <span></span>
                  <Range />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="d-flex justify-content-between mt-5">
        <div className="">
          <h3>
          Warehouses for rent in Lahore <span>(3195)</span>
          </h3>
          <p>
            Home <TbMathGreater className="fs-6"  />
             Lahore  Warehouses
          </p>
        </div>
        <button className="btn outline_dark h-50">Lahore Warehouses on Rent</button>
      </div>

      

      <div className="row d-flex  ">

        <div className="col-lg-8 order">
        <div className="row ">
        <div className="col-md-3  ">
          <div
            className=" d-flex "
            style={{ gap:"12px" }}
          >
            <span className="border_icon p-1">
              
              <AiOutlineAppstore className="fs-2  " />
            </span>
            <span className="border_icon p-1 px-2">
              <AiOutlineBars className="fs-3 pt-1 " />
            </span>
          </div>
        </div>
        <div className="col-md-5 ">
          
          <p className="mt-2">1 - 20 of 399 Warehouses</p>
        </div>
        <div class="dropdown col-md-4 ">
          <button
            className="btn float-end outline_dark shadow-none dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Most Resent
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
              Most Resent
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Hightest Price 
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Lowest Price
              </a>
            </li>
          </ul>
        </div>
        </div>
          {card.map((items, i ) => (
            <div key={i}>
              <div
                style={{ borderRadius: "7px" }}
                className="card card_shadow  mt-3"
              >
               
                <div className="d-md-flex d-block ">
                  <div className="p-2 array_data">
                    <img src={items.img} alt="" />
                  </div>
                  <div className="px-md-2 px-3">
                    <div className="d-flex align-items-center mt-4">
                      <h6 className="me-2">PKR </h6>
                      <h4>{items.price}</h4>
                    </div>
                    <div className="d-flex">
                      <p className="me-3 blueww m-0">House For Rent</p> |
                      <p className="ms-3 m-0">{items.place}</p>
                    </div>
                    <div className="">
                      <p className="m-0"> {items.marla}</p>
                      <p>{items.roomDetail}</p>
                    </div>

                    <div className="d-flex justify-content-around align-items-center">
                      <p className="">
                        <FaBed className="mb-1" />
                        <span className="">Room</span>
                      </p>
                      <p className="">
                        <FaBath className="mb-2" />
                        <span className="">Bed</span>
                      </p>
                      <p>
                        <BsArrowsMove className="mb-1" /> <span>Marla</span>
                      </p>
                    </div>
                    <hr className="mt-0" />
                    <div className="bottom d-flex justify-content-end gap-3 my-3 me-3 me-md-2 me-lg-0">
                      <button className="btn  outline_dark shadow-none">
                        <HiOutlineMail className="fs-6 mb-1 " /> Email
                      </button>
                      <button className="btn  btn-color shadow-none">
                        <BsTelephoneFill className="fs-6 mb-1 " /> Phone
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 px-3 ">
<div className="">
<div className="accordion " id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button bg_accordin shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       Related Search
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      Flats for sale in Lahore<br/>
Rooms for sale in Lahore<br/>
Lower Portions for sale in Lahore<br/>
Farm Houses for sale in Lahore
      </div>
    </div>
  </div>
  </div>
</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CardCompount;
