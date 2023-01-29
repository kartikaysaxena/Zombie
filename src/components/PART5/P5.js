import React from "react";
import './P5.css'
import zom2 from './zom.png'
export default function P5() {
  return (
    <div className="main1">
      <div className="container">
        <div className="row d-flex gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ma">
            <h2 data-aos="fade-up" className="aos-init aos-animate wit">
              <p>
              Expand the Course Format
              </p>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay={100}
              className="aos-init aos-animate wit2"
            >
              We will be expanding the existing course format to a live, and more engaging format that’s hosted in the Metaverse. This will allow you to do live coding events, in which yoou can easily share your code/screen with an instructor or your peers, and interact with other students using chat, audio, or video. <br /> <br />
And you know the best part? Everything is completely free!
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
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start"> <img src={zom2} className="img-fluid aos-init aos-animate left" alt="" data-aos="zoom-out" id="zom22" data-aos-delay={300} /></div>


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
