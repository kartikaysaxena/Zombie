import React from "react";
import img from "./code.png";
import './P3.css'
export default function P3() {
  return (
    <div className="main1">
      <div className="container ma">
        <div className="row d-flex gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ma">
            <div>
              <p className="wit">Interactive Coding Lessons</p>
            </div>
            <div>
              <p className="wit2">
                In-browser step-by-step lessons take you from the very basics of
                Solidity to creating your own fully-functional blockchain-based
                game. Even by the end of Lesson 1 (which can be completed in one
                sitting), you'll know enough to officially call yourself a
                blockchain developer!
              </p>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img src={img} alt="" id="img200" className="ma"/>
          </div>
        </div>
      </div>
    </div>
  );
}
