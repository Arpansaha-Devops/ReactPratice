import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Arpan", age: 25, city: "America" },
    { name: "Rahul", age: 25, city: "Delhi" },
    { name: "Aman", age: 28, city: "Mumbai" },
    { name: "Tanmoy", age: 29, city: "hydrabad" }
  ]);

  const [age, setAge] = useState("");

  function updateSecondUserAge() {
    setUsers(prevUsers =>
      prevUsers.map((user, index) =>
        index === 2
          ? { ...user, age: Number(age) } // shallow copy of object
          : user
      )
    );
   setAge("")
  }

  return (
    <>
      <h2>User List</h2>

      {users.map((user, index) => (
        <p key={index}>
          {user.name} - {user.age} - {user.city}
        </p>
      ))}

      <input
        type="number"
        placeholder="Enter new age for 2nd user"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <button onClick={updateSecondUserAge}>
        Update 2nd User Age
      </button>
    </>
  );
}

export default App;
