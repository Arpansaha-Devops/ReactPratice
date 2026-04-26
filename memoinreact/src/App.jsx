import { Children, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Form />

    <button onClick={() => setCount(count + 1)}>
      Re-render ({count})
    </button>

    <Child /> */}

    <Form > 

<Child /> 
 {/* // this is knownn  as children prop pattern. it allow us to pass compomnenets as children to other component , and it prevent chi;d componenet re-render . */}
    </Form>
    </>
  )
}


function Form({children}) {

  const [color, setColor] = useState('')

console.log('Form component rendered')
  function handleInput(e) {
    setColor(e.target.value)
  }
  
  return (
    <>
    <input type="text" style={{backgroundColor : color}} placeholder='Enter color'  onInput={handleInput} />
    {children}
    </>
  )
}


function Child (){
  console.log('Child component rendered')

  return (
    <>
    <div>I am child component</div>
    </>
  )
}

export default App
