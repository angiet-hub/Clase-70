import React from "react";
import Header from "./componentes/Header/Header";
import MenuContainer from "./componentes/MenuContainer/MenuContainer";
import Menu from 'Clase 71-Modulo CSS/componentes/Menu/Menu'
import ItemSection from "./componentes/Item Section/ItemSection";
import Card from "./componentes/Card/Card";
import CardsContainer from "./componentes/CardsContainer/CardsContainer";
import style from "./app.module.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className={style.principal}>
        <aside>
            <MenuContainer>
                <Menu titulo= 'MENU'>
                    <ItemSection>My Courses</ItemSection>
                    <ItemSection>My Categories</ItemSection>
                    <ItemSection>My Messages</ItemSection>
                </Menu>
                <Menu titulo= 'Groups'>
                    <ItemSection>UI/UX</ItemSection>
                    <ItemSection>Industrial Design</ItemSection>
                    <ItemSection>Architecture</ItemSection>
                </Menu>
            </MenuContainer>
        </aside>
        <CardsContainer>
          <Card
            img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg"
            progressValue={50}
          ></Card>
          <Card
            img="https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png"
            progressValue={30}
          ></Card>
          <Card
            img="https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg?w=585&scale=down"
            progressValue={10}
          ></Card>
        </CardsContainer>
      </main>
    </div>
  );
}

export default App;
