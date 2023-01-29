import React from "react";
import './P1.css'
import zom2 from './zombie2.png'
export default function P1() {
  return (
    <div className="main1">
      <div className="container">
        <div className="row d-flex gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start main23">
            <h2 data-aos="fade-up" className="aos-init aos-animate wit">
              <p>
              Learn to Code Blockchain DApps by Building Simple Games
              </p>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay={100}
              className="aos-init aos-animate wit2"
            >
              CryptoZombies is an interactive school that teaches you all things technical about blockchains. Learn to write smart contracts by making your own crypto-collectibles game.
            </p>
            <div
              className="d-flex aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {" "}
              <a className="nav-linka py-3 px-0 px-lg-3 random" href="#contact"><button className='btna'>Courses</button></a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start"> <img src={zom2} className="img-fluid aos-init aos-animate left" alt="" data-aos="zoom-out" data-aos-delay={300} /></div>


          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            {" "}
            <img
              src="assets/img/hero-img.png"
              className="img-fluid aos-init aos-animate img_zom"
              alt=""
              data-aos="zoom-out"
              data-aos-delay={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
