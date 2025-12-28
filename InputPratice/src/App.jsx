import { useState, useEffect } from 'react'

function App() {
  const [value, setValue] = useState("")
  const [debouncedValue, setDebouncedValue] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, 500) 

    return () => clearTimeout(timer) // cleanup Function
  }, [value])

  const handleRemove = () => {
    setValue("")
    setDebouncedValue("")
  }

  return (
    <>
      <h1>Input value showing </h1>

      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <li>{debouncedValue}</li>
      <button onClick={handleRemove} >Remove </button>
    </>
  )
}

export default App
