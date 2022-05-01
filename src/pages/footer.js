import React from "react";

const Footer = () => (
  <div style= {{
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgb(235, 195, 64)',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%'
  }}
  
  className="footer">
    <p>This is some content in sticky footer</p>
  </div>
);

export default Footer;