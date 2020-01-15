import React from "react";
import { bubble as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu width={ '10%' } {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

    
    </Menu>
  );
};