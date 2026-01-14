import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  function validate() {
    let newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length > 5) {
      newErrors.name = "Name must be max 5 characters";
    }

    const regex = /^[A-Z0-9]+$/i;
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!regex.test(password)) {
      newErrors.password = "Special characters not allowed";
    }

    setErrors(newErrors);

    // if no errors → valid
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully ✅");
      console.log({ name, password });
    }
  }

  return (
    <>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <span style={{ color: "red" }}>{errors.name}</span>

        <br /><br />

        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <span style={{ color: "red" }}>{errors.password}</span>

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
