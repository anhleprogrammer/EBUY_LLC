import React from "react";
import "./footer.styles.scss";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="footer-container">
      <div>
        <h3>Buy and Sell on EbuyLLC</h3>
        <ul>
          <li>How to Buy</li>
          <li>How to Sell</li>
          <li>Memberships</li>
          <li>Partner Program</li>
        </ul>
      </div>
      <div>
        <h3>Help</h3>
        <ul>
          <li>Contact Us</li>
          <li>Shipping Services</li>
          <li>Payment Options</li>
          <li>Return & Exchanges</li>
        </ul>
      </div>
      <div>
        {" "}
        <h3>Company</h3>
        <ul>
          <li>About EbuyLLC</li>
          <li>Careers</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div>
        <h3>Connect with us</h3>
        <ul>
          <li>
            <AiOutlineTwitter className="logo" />
            Twitter
          </li>
          <li>
            <AiFillLinkedin className="logo" />
            Linkedin
          </li>
          <li>
            <AiFillFacebook className="logo" />
            Facebook
          </li>
          <li>
            {" "}
            <AiFillInstagram className="logo" />
            Instagram
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
