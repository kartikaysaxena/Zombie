import React from 'react'
import './F.css'
import ft from './Footer.png'
import tele from './tele.png'
import zom from './zombie.jpg'
export default function F() {
  return (
    <div className='main12'>
        <section className="footer_section main12">
        <div className="custom_container">
          <div className="footer_data_box">
            <div className="footer_data_box_detail ">
              <div className="footer_detail_box_one">
                <figure><a href="/"><img src={zom} /></a></figure>
                <p>Learn to Code Blockchain DApps by Building Simple Games </p>
              </div>
            </div>
            <div className="footer_data_box_detail">
              <div className="footer_detail_box_two">
                <div className="footer_detail_box_heading accordion modtitle">
                  <h3 className="footer_collapse_icons">Get Started</h3>
                </div>
                <div className="modcontent panel">
                  <ul className="footer_detail_box_content_list">
                    {/*li><a>Token</a></li>
        <li><a>NFT</a></li*/}
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/course">Courses</a>
                    </li>
                    <li>
                      <a href="/what-is-blockchain-lander">What is blockchain?</a>
                    </li>
                    {/*li><a>Help Center</a></li*/}
                  </ul>
                </div>
              </div>
            </div>
            {/*div class="footer_data_box_detail">
        <div class="footer_detail_box_two">
        <div class="footer_detail_box_heading accordion modtitle">
        <h3 class="footer_collapse_icons">Contact</h3>
        </div>
        <div class="modcontent panel">
        <ul class="footer_detail_box_content_list">
        <li><a>Email</a></li>
        <li><a>Telegram</a></li>
        <li><a>Press Kit</a></li>
        <li><a>Careers</a></li>
        </ul>
        </div>
        </div>
        </div*/}
            <div className="footer_data_box_detail">
              <div className="footer_detail_box_two">
                <div className="footer_detail_box_heading accordion modtitle">
                  <h3 className="footer_collapse_icons">Get in Touch</h3>
                </div>
                <div className="modcontent panel accordion modtitle">
                  <ul className="footer_detail_box_content_list">
                    <li><a href="https://github.com/CryptozombiesHQ/" target="_blank">GitHub</a></li>
                    <li><a href="https://twitter.com/CryptoZombiesHQ" target="_blank">Twitter</a></li>
                    <li><a href="#newsletter-input">Newsletter</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="footer_part_two">
          <div className="custom_container">
            <div className="footer_part_two_main">
              <div className="footer_part_two_child_two"><span>© Copyright 2022 Cryptozombies All Rights Reserved</span></div>
              <div className="footer_part_two_child_three">
                <a href="/privacy-policy">Privacy Policy </a>
                <a href="/cookies">Cookies</a>
                <a href="/terms">Terms</a></div>
            </div>
          </div>
        </section>
      </section>
      <a className="btnm telegram-open-chat-btn" target="_blank" rel="noreferrer">
        <img src={tele} width={32} height={32} alt="Open Chat" />
        Open Chat
      </a>
    </div>
  )
}
