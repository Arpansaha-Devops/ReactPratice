
import { useState } from "react";

function Checkbox() {
    const [skills,setSkills] = useState([]) // array for some cases when i need to print all values with previous value 


 const handleSkills = (e) => {
    if (e.target.checked) {
      setSkills(e.target.value);
    } else {
      setSkills("");
    }
  };

    return(
        <>
        <input type="checkbox"  id="js" style={{display : "inlinneBlock", marginBottom : "1rem"}} onChange={handleSkills} value= "js" checked={skills === "js"} />
        <label htmlFor="js" >Js</label>

<br />


        <input type="checkbox"  id="Java" style={{display : "inlinneBlock", marginBottom : "1rem"}} onChange={handleSkills} value= "Java" checked = {skills === "Java"} />
        <label htmlFor="Java"  >Java</label>

<br />

        <input type="checkbox"  id="Python" style={{display : "inlinneBlock", marginBottom : "1rem"}} onChange={handleSkills} value="Python" checked = {skills === "Python" } />
        <label htmlFor="Python"  style={{marginBottom : "1rem"}}  >Python</label>


<h1>Skills are :{skills.toString()}</h1>

        </>

        
    )
}

export default Checkbox;