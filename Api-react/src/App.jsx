import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const url = "https://dummyjson.com/users";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const data = await fetch(url);
      const response = await data.json();

      setUsers(response.users);
      setLoader(false);
    } catch (error) {
      console.error(error);
      setLoader(false);
    }
  }

  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(item => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
