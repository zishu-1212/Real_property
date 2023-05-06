import React from "react";
import "./Footer.css";
import logo from "../../assets/marhaba.png";
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
function Footer() {
  return (
    <>
    <div className="bgdark text-white">
      <hr />
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-4 ">
            <img src={logo} className="" width="50%" alt="" />
            <div className="">
              <p>
                Realproperty.pk - Pakistan's best free property listings
                website. Trusted place to investing, renting, buying & selling
                online.
              </p>
              <p className="mt-4">Follow us on</p>
            </div>
          </div>
          <div className="col-md-3 mt-5 align-items-center">
            <h4 className="mt-3">
            Quick Links Searches
            </h4>
            <div className="mt-5  link_hover">
                <a className="cool-link" href="">Property for Rent</a>
            </div>
            <div className="mt-3 link_hover" >
                <a className="cool-link" href="">Property for Sale</a>
            </div>
            <div className="mt-3 link_hover">
                <a className="cool-link" href="">Society Maps</a>
            </div>
            <div className="mt-3 link_hover">
                <a className="cool-link" href="">News & Guide</a>
            </div>
          </div>
          <div className="col-md-2 mt-5">
          <h4 className="mt-3">
          Company
            </h4>
            <div className="mt-5  link_hover">
                <a className="cool-link" href="">About us</a>
            </div>
            <div className="mt-3 link_hover" >
                <a className="cool-link" href="">Contact us</a>
            </div>
            <div className="mt-3 link_hover">
                <a className="cool-link" href="">Privacy Policy</a>
            </div>
            <div className="mt-3 link_hover">
                <a className="cool-link" href="">Place Free Ad</a>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <h4 className="mt-3">Contact</h4>
            <div className="icon mt-5 d-flex ">
<MdLocationOn className="fs-2 me-2"/>
<p className="pt-1">	1st Floor Habib Tower, Main Boulevard Valencia Town, Lahore</p>
            </div>
            <div className="icon mt-1 d-flex ">
<HiOutlineMail className="fs-5 me-2 mt-1"/>
<p className="">	info@realproperty.pk</p>
            </div>
            <div className="icon mt-1 d-flex ">
<BsTelephoneFill className="fs-5 me-2 mt-1"/>
<p className="">+92 320 145 00 92</p>
            </div>
           
          </div>
        </div>
<hr/>
        <div className="text-center pb-3">©RealProperty.pk 2023. All rights reserved.</div>
      </div></div>
    </>
  );
}

export default Footer;
