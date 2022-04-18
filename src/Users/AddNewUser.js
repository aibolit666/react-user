import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import s from "./AddNewUser.module.css";

const AddNewUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAgeUsername, setAgeUsername] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAgeUsername);
    setEnteredUsername("");
    setAgeUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeUsername(event.target.value);
  };

  return (
    <Card className={s.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAgeUsername}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddNewUser;
