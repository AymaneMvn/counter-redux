import { useState } from "react";
import "./App.css";

function App() {

  const [counter,setCounter] = useState(0);

  const handleCounter = () => {
     setCounter(counter+1)
  };
  return (
    <div className="App">
      <h1>Counter : <span>{counter}</span></h1>
      <button onClick={handleCounter}>increment</button>
      <button onClick={()=>{setCounter(counter-1)}}>decrement</button>
      
    </div>
  );
}

export default App;
