import { forwardRef } from "react";

const User = forwardRef(({ works }, ref) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter the name"
        ref={ref}
      />
      <br />
      <button onClick={works}>Focus Input</button>
    </>
  );
});

export default User;
