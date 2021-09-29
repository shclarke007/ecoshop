import React from 'react';
import { Link } from 'react-router-dom';
import { ShopModal } from '../Shop/ShopModal';
import { SignInModal } from '../Registration/SignInModal';
import { RegisterModal } from '../Registration/RegisterModal';


const Nav = () => {
  return(
  <>
      <div className="container" style={{ padding: `${0}px` }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgb(25, 202, 202)" }}>
          <Link to="/" className="nav-link">
          <div className="d-flex row align-items-baseline">
            <img className="logo" src="/img/logo.svg" alt="Logo"/>
            <li className="navbar-brand text-white">ECO SHOPPING</li>
          </div>
          <div></div>
            
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto topnav">
              <li className="nav-item">
                <a className="nav-link btn btn-success text-white" type="button" href="#" data-toggle="modal" data-target="#submit_shop_modal">Add Item</a>
              </li>
              <Link to="/learning" className="nav-link" >
                <li className="nav-item text-dark">Learning Center</li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className="nav-item text-dark">About</li>
              </Link>
              <Link to="/contact" className="nav-link" >
                <li className="nav-item text-dark">Contact</li>
              </Link>
              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white" type="button" href="#" data-toggle="modal" data-target="#signin_modal">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-danger text-white" type="button" href="#" data-toggle="modal" data-target="#register_modal">Register</a>
              </li>
            </ul>
          </div>
          <ShopModal />
          <SignInModal />
          <RegisterModal />
        </nav>
      </div>
  </>
  )
}
export default Nav
