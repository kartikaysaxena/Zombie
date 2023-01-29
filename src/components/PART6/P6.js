import React from "react";
import img1 from "./img1.png";
import './P6.css'
export default function P6() {
  return (
    <div className="main1">
      <div className="container">
        <div className="row d-flex gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ma">
            <div className="pb">
              <p className="wit pb">Token Rewards Play to Earn</p>
            </div>
            <div>
              <p className="wit2">
                We empower developers to learn and help others, providing the
                means to earn rewards for your contributions. <br /> <br />
                We will be expanding the existing course format to a live, and
                more engaging format that’s hosted in the Metaverse. This will
                allow users to do live coding events, in which they can easily
                share their code/screen with an instructor or their peers, and
                interact with other students using chat, audio, or video.
              </p>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img src={img1} alt="" id="img19" />
          </div>
        </div>
      </div>
    </div>
  );
}
