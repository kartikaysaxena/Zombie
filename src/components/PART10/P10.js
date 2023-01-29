import React from "react";
import img from './level-complete.png'
import './P10.css'
export default function P10() {
  return (
    <div className='main1'> 
                <div className='container'>
                    <div className="row d-flex gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ma">
                            <div>
                                <img src={img} alt="" id="img89"/>
                            </div>
                            
                        </div>
                        <div className='col-lg-5 order-1 order-lg-2 text-center text-lg-start top-space'>
                            <div className="bottomg">
                                <p className='wit'>Course Completion NFTs</p>
                            </div>
                            <div>
                                <p className="wit2">
Rollout NFT certificates for course completion, each user will get a personalized NFT certificate for the courses they complete.</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  );
}
