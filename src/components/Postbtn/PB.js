import React from "react";
import "./PB.css";
export default function PB() {
  return (
    <div className="main11">
      <div className="project_section_btn">
        <a href="/blog">View All Posts</a>
      </div>
      <div className="main1 d-block wrap">
        <div className="wit56 gap23">Stay Updated</div>
        <div className="wit2345 ">
          <p>
          Join our mailing list to stay in the loop with our newest feature releases
          </p>{" "}
        </div>
      </div>
      <div className="form">
          <div className="form-main">
          <input id="newsletter-input" type="email" name="EMAIL" autoComplete="off" placeholder="Enter Your Email Address" required />
          </div>
          <button>Submit</button>
      </div>
    </div>
  );
}
