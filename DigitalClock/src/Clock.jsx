import { useState, useEffect } from "react";

function Digitalclock() {
  const [time, setTime] = useState(0);
  const [color,setColor] = useState("red")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);


  return (
    <>

    <select style={{marginLeft : "2rem"}}  value={color}
        onChange={(e) => setColor(e.target.value)}>

<option value="red">red</option>
<option value="green">green</option>
<option value="blue">blue</option>

    </select>
      <div  style={{margin : "2rem", color: color}} >{time}</div>

    </>
  );
}

export default Digitalclock;
