import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2 style={{ color: "#1161ee" }}>MayWay</h2>
      <div className="footerIcons">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-youtube"></i>
      </div>
      <hr className="hrFooter" />
      <h6 className="footer">Copyright Sitename. All Rights Reserved</h6>
      <h6 className="footer">Powered by OSA Development</h6>
    </footer>
  );
};

export default Footer;
