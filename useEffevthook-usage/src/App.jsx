import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  // Runs ONLY when count changes
  // useEffect(() => {
  //   console.log("Counter count:", count);
  //   callingfunc();
  // }, [count]);

  // Runs only one time in mount phase -
  useEffect(() => {
    console.log("Counter count:", count);
    callingfunc();
  }, []);

  // Runs ONLY when data changes
  // useEffect(() => {
  //   console.log("Counter data:", data);
  // }, [data]);

  function callingfunc() {
    console.log("I am calling (count changed)");
  }

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setData((prev) => prev + 1)}>
        Data: {data}
      </button>
    </>
  );
}

export default App;
