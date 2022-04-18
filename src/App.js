import React from "react";
import AddNewUser from "./Users/AddNewUser";
import UsersList from "./Users/UsersList";

function App() {
  return (
    <div>
      <AddNewUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
