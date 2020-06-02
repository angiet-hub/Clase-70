import React from "react";
const MenuItem = ({ children, path }) => {
  return (
    <div>
      <li style={{ display: "flex" }}>
        <a href={path}>{children}</a>
      </li>
    </div>
  );
};

export default MenuItem;
