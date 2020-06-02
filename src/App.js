import React from "react";

import BlogContent from "./components/BlogContent";
import BlogArticle from "./components/BloggerArticle";
import BlogImage from "./components/BlogImage";
import BlogTitle from "./components/BlogTitle";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import NavItem from "./components/NavItem";
import NavMenu from "./components/NavMenu";
import UserControl from "./components/UserControl";
import Header from "./components/Header";

const comentarios = [
  { usuario: "Angie", comentario: "Hola" },
  { usuario: "An", comentario: "cómo" },
  { usuario: "Ange", comentario: "estás?" },
];

function App() {
  return (
    <div className="App">
      <Header>
        <NavMenu>
          <NavItem>Hola</NavItem>
          <NavItem>Hola</NavItem>
          <NavItem>Hola</NavItem>
        </NavMenu>
        <UserControl></UserControl>
      </Header>
      <BlogArticle>
        <BlogImage></BlogImage>
        <BlogTitle>Titulo</BlogTitle>
        <BlogContent>1, 2, 3</BlogContent>
      </BlogArticle>
      <Comments comments={comentarios}> </Comments>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
