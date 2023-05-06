import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import marhaba from "../../assets/marhaba.png"
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light border-bottom pb-2 navbar_position ">
  <div className="container">
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"> <AiOutlineMenu className='fs-4 cool-link'/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
     <img src={marhaba} width="10%" alt="" />
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item me-2">
          <a className="nav-link active cool-link text-white" aria-current="page" href="#">Buy</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link  cool-link text-white" href="#">Rent</a>
        </li>
        
      </ul>
      <form className="d-flex">
       <AiOutlineUserAdd className='fs-4 cool-link'/>
      </form>
    </div>
  </div>
</nav> */}



<nav className="navbar navbar-expand-lg navbar-light  navbar_position">

  <div className="container">
  <Link to="/" className='fit'><img src={marhaba} className='logoShap  w-100' alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><AiOutlineMenu className='fs-4 cool-link'/></span>
    </button>
    <div className="collapse navbar-collapse text-center " id="navbarTogglerDemo02">
    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item me-2">
          <Link to="/" className="nav-link active cool-link text-white" aria-current="page" >Buy</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link  cool-link text-white" to="/Rent">Rent</Link>
        </li>
        
      </ul>
      <form className="d-flex justify-content-center">
     <Link to="/AdminDashdord"> <AiOutlineUserAdd className='fs-4 cool-link'/></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
