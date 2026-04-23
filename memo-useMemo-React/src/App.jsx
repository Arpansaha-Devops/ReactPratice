import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <MemoizedChild  />
      <button onClick={handleClick}>Count: {count}</button>
    </>
  );
}

export default App;

function Child() {
  console.log("Child component rendered");

  return (
    <>
      <div>I am child component</div>
    </>
  );
}

const MemoizedChild = React.memo(Child); // It prevents the child component from re-rendering if its props have not changed.