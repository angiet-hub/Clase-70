import React from "react";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div>
      <header style={style}>
        <input type="search"></input>
      </header>
    </div>
  );
};

export default Header;
