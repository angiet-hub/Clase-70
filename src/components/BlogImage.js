// Crear un componente BlogImage que tome una prop img (un string) renderice un componente img donde src contiene
//el valor de img
import React from "react";

const BlogImage = ({ img }) => {
  return <img src={img}></img>;
};

export default BlogImage;
