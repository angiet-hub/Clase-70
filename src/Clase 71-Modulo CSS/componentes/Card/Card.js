import React from "react";
import BarraProgreso from "../Progreso/Progreso";
import style from "./card.module.scss";

const Card = ({ img, progressValue }) => {
  return (
    <div className={style.card}>
      <img className={style.cardImg} alt="" src={img}></img>
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <BarraProgreso progressValue={progressValue}></BarraProgreso>
    </div>
  );
};

export default Card;
