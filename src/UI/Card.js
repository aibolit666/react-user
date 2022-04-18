import React from "react";
import s from "./Card.module.css";

const Card = (props) => {
  return <div className={`${s.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
