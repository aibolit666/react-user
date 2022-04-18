import React from "react";
import s from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={s.backdrop} onClick={props.onConfirm} />
      <Card className={s.modal}>
        <header className={s.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={s.content}>
          <p>{props.message}</p>
        </div>
        <footer className={s.actions}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
