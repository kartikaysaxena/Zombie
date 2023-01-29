import React from 'react'
import './P2.css'
import img1 from './People.png'
export default function P2() {
  return (
    <div className="main1">
      <div className="container">
        <div className="row d-flex gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start ma">
            <h2 className="wit">
              <p>
              Why CryptoZombies is Different
              </p>
            </h2>
            
            <div
              className="d-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className='d-block stud'>
                <img src={img1} alt="" id='img199'/>
                <div className='d-block l1 wit2'>
                    Students
                </div>
              </div>
              <div className="d-block d2">
                  <strong className='wit g2'>1M+</strong>
                  <div className='d-block l1 wit2'>
                    Classes Completed
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <p className='wit2'>CryptoZombies is the largest education platform for blockchain development, it’s been around for 4+ years, with over 400k registered users that have finished multiple courses. <br /> <br />
CryptoZombies was the first tutorial on the internet for NFTs, and is still very relevant to the new crop of web3 developers looking to enter the industry today. Currently the CryptoZombies curriculum is mostly focused on Ethereum and Solidity development, but is a lot of demand for content targeting other chains such as Binance, TRON, and even projects like Chainlink.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
