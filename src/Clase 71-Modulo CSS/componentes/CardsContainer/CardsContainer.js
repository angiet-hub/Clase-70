import React from "react";
import style from "./cards.module.scss";

const CardsContainer = ({ children }) => {
  return <section className={style.container}>{children}</section>;
};

export default CardsContainer;
