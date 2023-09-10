import React from "react";
import { homeData } from "../../dummyData";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
          </div>
          <div className="box" style={{ marginTop: -30 }}>
            <h3>Follow Us</h3>
            <div style={{ marginTop: -45 }}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="box" style={{ marginTop: -30 }}>
            <h3>Streamit App</h3>
            <div className="img" style={{ marginTop: 0 }}>
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
            </div>
          </div>
        </div>
        <p style={{ fontSize: 12, padding: "20px 50px", marginBottom: -30 }}>
          © 2023 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related
          images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All
          rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
