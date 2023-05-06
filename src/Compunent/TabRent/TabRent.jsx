import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TabRent.css";
import { RiArrowDropDownLine } from 'react-icons/ri';

import Range from "../Range/Range"

function TabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [show, setShow] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{}}>
        <Tabs
          className=" colorChange"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className=" tabcolorChange" label="Buy" {...a11yProps(0)} />
          <Tab className=" tabcolorChange" label="Rent" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel className="tabpenalColor" value={value} index={0}>
        <div className="row">
          <div className="col-md-3">
            <select
            style={{height:"37px"}}
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
          <div className="col-md-7 d-flex" style={{gap:"10px"}}>
            
            <select
style={{height:"37px"}}
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-md example"
            >
               <option selected>Location</option>
              <option value="1">Band Rd</option>
              <option value="2">Jaranwala Rd</option>
              <option value="3">Shaikhupura Rd</option>
              <option value="4">Multan Rd</option>
            </select>
            <div className=""> <button className='btn btn-color shadow-none '>Search</button></div>
          </div>
<div className="col-md-2">
<button className="btn shadow-none" onClick={() => setShow(!show)}>More Filters <RiArrowDropDownLine className="fs-3"/></button>
</div>

        </div>
        <div className="bg-white row alignn-items-center">
      {show ? 
      <React.Fragment className="">
      {/* <div className="col-md-3 mt-4">
<select
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-lg example"
            >
              <option selected>Home</option>
              <option value="1">House</option>
              <option value="2">flat</option>
              <option value="2">Room</option>
            </select>
      </div>
          <div className="col-md-3 mt-4">
          <select
                        className="form-select shadow-none form-select-md mb-2"
                        aria-label=".form-select-lg example"
                      >
                        <option selected>Badroom</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="2">3+</option>
                      </select>
                </div> */}
                <div className="col-md-3 d-flex align-items-center">
                  <div className="mt-3">
                  <span></span>
                  <Range/>
                  </div>
                 
                </div>
                <div className="col-lg-3 d-flex align-items-center">
                  <div className="mt-3">
                  <span></span>
                  <Range/>
                  </div>
                 
                </div>
                </React.Fragment>
      : null}
     
    </div>
      </TabPanel>
      <TabPanel className="tabpenalColor" value={value} index={1}>
      <div className="row">
          <div className="col-md-3">
            <select
            style={{height:"37px"}}
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
          <div className="col-md-7 d-flex" style={{gap:"10px"}}>
            
            <select
style={{height:"37px"}}
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-md example"
            >
               <option selected>Location</option>
              <option value="1">Band Rd</option>
              <option value="2">Jaranwala Rd</option>
              <option value="3">Shaikhupura Rd</option>
              <option value="4">Multan Rd</option>
            </select>
            <div className=""> <button className='btn btn-color shadow-none '>Search</button></div>
          </div>
<div className="col-md-2">
<button className="btn shadow-none" onClick={() => setShow(!show)}>More Filters <RiArrowDropDownLine className="fs-3"/></button>
</div>

        </div>
        <div className="bg-white row alignn-items-center">
      {show ? 
      <React.Fragment className="">
      {/* <div className="col-md-3 mt-4">
<select
              className="form-select shadow-none form-select-md mb-2"
              aria-label=".form-select-lg example"
            >
              <option selected>Home</option>
              <option value="1">House</option>
              <option value="2">flat</option>
              <option value="2">Room</option>
            </select>
      </div> */}
          {/* <div className="col-md-3 mt-4">
          <select
                        className="form-select shadow-none form-select-md mb-2"
                        aria-label=".form-select-lg example"
                      >
                        <option selected>Badroom</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="2">3+</option>
                      </select>
                </div> */}
                <div className="col-md-3 d-flex align-items-center">
                  <div className="mt-3">
                  <span></span>
                  <Range/>
                  </div>
                 
                </div>
                <div className="col-lg-3 d-flex align-items-center">
                  <div className="mt-3">
                  <span></span>
                  <Range/>
                  </div>
                 
                </div>
                </React.Fragment>
      : null}
     
    </div>
      </TabPanel>
    </Box>
  );
}
