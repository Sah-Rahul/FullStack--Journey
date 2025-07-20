import { useState } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  return (
    <div className="container">
      <h1> React Form + map UI</h1>
      <UserForm addUser={addUser} />
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} data={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
