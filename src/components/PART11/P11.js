import React from 'react'
import './P11.css'
import neo from './neo.png'
import Chainlink from './Chainlink.png'
import Binance from './Binance.png'
import a from './a.png'
export default function P11() {
  return (
    <div className='back'> 
        <ul className='floaty'>
            <li><img src={neo} alt="" /></li>
            <li><img src={Chainlink} alt="" /></li>
            <li><img src={Binance} alt="" /></li>
            <li><img src={a} alt="" /></li>
        </ul>
    </div>
  )
}
