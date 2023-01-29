import React from "react";
import "./P11.css";
import neo from "./neo.png";
import Chainlink from "./Chainlink.png";
import Binance from "./Binance.png";
import a from "./a.png";
export default function P11() {
  return (
    <div className="container px-4 px-lg-5 d">
      <div className="row gx-4 gx-lg-5">
        <div className="row gx-4 ma">
          <div className="h col-lg-3 col-md-6 mt-5 ma">
            <img src={Chainlink} alt="" />
          </div>
          <div className="h col-lg-3 col-md-6 mt-5 ma">
            <img src={Binance} alt="" />
          </div>
          <div className="h col-lg-3 col-md-6 mt-5 ma">
            <img src={neo} alt="" />
          </div>
          <div className="h col-lg-3 col-md-6 mt-5 ma">
            <img src={a} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
