import React from 'react'
import img from './zombie.jpg'
import './Header.css'
function Header() {
  return (
    <div className='headerr'>
        <nav className="navbar navbar-expand-lg" id="mainNav">
        <div className="container top">
          <img src={img} alt="" id='we' />
          <button className="navbar-toggler font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" id='but'>
            Menu
            <svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>{/* <i class="fas fa-bars"></i> Font Awesome fontawesome.com */}
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto" id='ul'>
              <li className="nav-item mx-0 mx-lg-1 struct"><a className="nav-linka py-3 px-0 px-lg-3 rounded white" href="#portfolio">Blog</a></li>
              <li className="nav-item mx-0 mx-lg-1 struct"><a className="nav-linka py-3 px-0 px-lg-3 rounded white" href="#about">Courses</a></li>
              <li className="nav-item mx-0 mx-lg-1 struct">
                <div className="dropdown">
                    <a className="dropdown-toggle nav-linka py-3 px-0 px-lg-3 rounded white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English ↓
                    </a>
                    <ul className="dropdown-menu" style={{}}>
                    <li><a className="dropdown-item gd" href="#">English</a></li>
                    <li><a className="dropdown-item gdh" href="#">French</a></li>
                    </ul>
                </div>
            </li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-linka py-3 px-0 px-lg-3" href="#contact"><button className='btna'>Start Course</button></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
