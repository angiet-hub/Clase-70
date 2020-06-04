import React from 'react'

const Menu = ({ children, titulo }) => {
    return (
      <section>
        <h2>{titulo}</h2>
        <ul>{children}</ul>
      </section>
    );
  };

  export default Menu;

