import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [password,setPassword] = useState("")
  const [passErr, setPassErr] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 5) {
      setNameErr("Name must be within 5 characters");
    } else {
      setNameErr("");
    }
  };

  const handlepassWord = (e) => {
    const value = e.target.value;
    setPassword(value)
    let regex = /^[A-Z0-9]+$/i;

    if (!regex.test(value)) {
      setPassErr("Enter a valid password, special characters not allowed!");
    } else {
      setPassErr("");
    }
  };

  return (
    <>
      <label>Name</label>
      <input type="text" placeholder="Enter name" onChange={handleName} />
      <span style={{ color: "red" }}>{nameErr}</span>

      <br /><br />

      <label>Password</label>
      <input type="password" placeholder="Enter password" onChange={handlepassWord} />
      <span style={{ color: "red" }}>{passErr}</span>

      <br /><br />

      <button disabled={!!nameErr || !!passErr}>Log in</button>

      <h1>Name: {name}</h1>
      <h1>Password : {password}</h1>
    </>
  );
}

export default App;
