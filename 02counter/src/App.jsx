import './App.css'

function App() {
  let [counter, setCount] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>CChai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
       onClick={addValue}
       >Add value {counter}</button>
       <br />
       <button
       onClick={removeValue}
       >Remove value {counter}</button>
       <p>footer: {counter}</p>
    </>
  )
}

export default App
