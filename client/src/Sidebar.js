import React from "react";
import { bubble as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu disableAutoFocus width={ '25%' } {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      
      <a className="menu-item" href="/#work-display">
        Projects
      </a>

      <a className="menu-item" href="/about">
        About
      </a>
      
      <a className="menu-item" href="/contact">
        Contact
      </a>
      


    
    </Menu>
  );
};