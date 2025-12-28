
import { useState } from "react"

function Radio() {


const [radio,setRadio] = useState("")

    return (
        <>
<h4>Select Your Gender :{radio}</h4>

          <input type="radio" name="male" id="male" onChange={(e) => setRadio(e.target.value)} value={"male"} /> 
          <label htmlFor="male"> male </label>
        
          <input type="radio" name="male" id="female" onChange={(e) => setRadio(e.target.value)} value={"female"} /> 
          <label htmlFor="female"> female </label>
        
        </>
    )
}

export default Radio