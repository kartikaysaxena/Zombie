import React from "react";
import img from './Group.png'
import './P7.css'
export default function P7() {
  return (
    <div className='main1'> 
                <div className='container'>
                    <div className="row d-flex gy-5">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ma">
                            <div>
                                <img src={img} alt="" id="img1"/>
                            </div>
                            
                        </div>
                        <div className='col-lg-5 order-1 order-lg-2 text-center text-lg-start top-space'>
                            <div>
                                <p className='wit pb'>Build a Zombie Army</p>
                            </div>
                            <div>
                                <p className="wit2">After completing all lessons and deploying your DApp, pit your zombie army against other players' zombies in one of the world's first blockchain-based games! Half code-school, half MMO crypto-collectible strategy game.</p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  );
}
