import React from 'react'
import './Grid.css'
export default function Grid() {
  return (
    <div className="home_road_map_section main1 down">
        <div className="custom_container down">
          <div className="road_map_main_section">
            <div className="road_map_data_box road_map_single_data_box_one">
              <div className="road_map_single_data_box_one_date"><h5>2022 Q3</h5></div>
              <div className="road_map_single_data_box">
                <a className="road_map_list_one">Migrate the CZ Telegram room to our community chat</a>
                <a className="road_map_list_one"><span>Reputation Points</span> 
                  <span>Participation Rewards</span></a>
                <a className="road_map_list_one">Launch CZ Token on the BNB chain</a>
                <a className="road_map_list_one">Host More Live Events</a>
              </div>
            </div>
            <div className="road_map_data_box road_map_single_data_box_two">
              <div className="road_map_single_data_box_two_date"><h5>2022 Q4</h5></div>
              <div className="road_map_single_data_box">
                <a className="road_map_list_two"><span>Deploy CZ Token bridge</span></a>
                <a className="road_map_list_two">
                  <span>Launch "Code Together"</span> 
                  <span>Expand the CZ Course Offering</span>
                  <span>Premium Courses</span>
                  <span>NFT Collection</span>
                </a>
                <a className="road_map_list_two">CZ Testnet</a>
              </div>
            </div>
            <div className="road_map_data_box road_map_single_data_box_three">
              <div className="road_map_single_data_box_three_date"><h5>2023</h5></div>
              <div className="road_map_single_data_box">
                <a className="road_map_list_three">
                  NFT Marketplace (Testnet)
                </a>
                <a className="road_map_list_three">CZ Mainnet</a>
                <a className="road_map_list_three">
                  <span>Staking</span> 
                  <span>Token Bridge (Mainnet)</span>
                  <span>NFT Bridge (Mainnet)</span>
                </a>
                <a className="road_map_list_three">
                  <span>Q&amp;A Board</span> 
                  <span>Jobs Board</span>
                  <span>iPad Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
