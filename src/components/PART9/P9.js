import React from "react";
import img from "./img.png";
import './P9.css'
export default function P9() {
  return (
    <div className="main1">
      <div className="container">
        <div className="row d-flex gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ma">
            <div className="bottomg">
              <p className="wit">Zombie BattleGround Cards</p>
            </div>
            <div>
              <p className="wit2">
              CryptoZombies will be introducing a token that is going to be utilized in “Play to Earn” strategy. <br /> <br />
The token will be used to incentivize users to complete courses, and use the CZ site or mobile apps daily to interact with the CZ community. <br /> <br />
We intend to expand the current CZ community by moving it from Telegram to our own iOS & Android apps that will let users chat about blockchain development, and ask questions in a StackOverflow type format.
              </p>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img src={img} alt="" id="img10"/>
          </div>
        </div>
      </div>
    </div>
  );
}
