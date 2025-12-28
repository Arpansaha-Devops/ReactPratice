import { useState } from "react";

function App() {
  const [input, setInput] = useState("");   // for typing
  const [users, setUsers] = useState([]);   // for storing users

  function addUser() {
    if (input.trim() === "") return; // prevent empty add

    setUsers(prevUsers => [...prevUsers, input]);
    setInput(""); 
  }

  function removeUser() {
    setUsers(prevUsers => prevUsers.slice(0, users.length-1));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addUser}>Add</button>
      <button onClick={removeUser}>Remove</button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
