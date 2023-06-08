import React from "react";

function Footer() {
  return (
    <div>
      <div className="row subscribe">
        <div className="col-lg-6">
          <h1 className="title">Car Connect</h1>
        </div>
        <div className="col-lg-6">
          <p>Subscribe to Newsletter to get updates</p>
          <input type="text" name="name" placeholder="Enter Email address"></input>
          <button class="btn subcribe-btn">subscribe</button>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 item">
              <h3 className="title footer-text f-header">Contact Us</h3>
              <div className="footer-desc">
                <p className="footer-text"><i className="fa-brands fa-facebook icon-3x"></i> @carconnect</p>
                <p className="footer-text"><i className="fa-brands fa-instagram icon-3x"></i> car_connect_KE</p>
                <p className="footer-text"><i className="fa-solid fa-phone"></i> 0712345678</p>
                <p className="footer-text"><i className="fa-solid fa-envelope"></i> carconnect@gmail.com</p>
                <p className="footer-text"><i className="fa-brands fa-twitter"></i> car_connect</p>
              </div>
            </div>
            <div className="col-lg-4 item">
              <h3 className="title footer-text f-header">About Us</h3>
              <p className="footer-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="col-lg-4 item">
              <h3 className="title footer-text f-header">Partners</h3>
              <div className="row">
                <div className="col-lg-6">
                  <img className="footer-img" src="../images/sy1.jpeg" alt="" />
                  <img className="footer-img" src="../images/sy3.webp" alt="" />
                  <img className="footer-img" src="../images/sy4.jpeg" alt="" />
                  <img className="footer-img" src="../images/y2.jpeg" alt="" />
                </div>
                <div className="col-lg-6">
                  <img className="footer-img" src="../images/sy1.jpeg" alt="" />
                  <img className="footer-img" src="../images/sy3.webp" alt="" />
                  <img className="footer-img" src="../images/sy4.jpeg" alt="" />
                  <img className="footer-img" src="../images/y2.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="copyright">Car Connect © 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

