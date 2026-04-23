

import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const double = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <>
      <p>Double: {double}</p>

      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>
    </>
  );
}

// function Child() {
//   console.log("Child component rendered");

//   return (
//     <>
//       <div>I am child component</div>
//     </>
//   );
// }

// const MemoizedChild = React.memo(Child); // It prevents the child component from re-rendering if its props have not changed.