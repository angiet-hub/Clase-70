import React from "react";

const NavMenu = ({ children, direction = "row" }) => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            flexDirection: direction,
          }}
        >
          {children}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
