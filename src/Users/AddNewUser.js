import React from "react";
import Card from "../UI/Card";
import s from "./AddNewUser.module.css";

const AddNewUser = (props) => {
  const addUserHandler = (event) => event.preventDefault();

  return (
    <Card className={s.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddNewUser;
