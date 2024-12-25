import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  // let counter = 15;
  
  const addValue = () =>{
    // console.log("cliked", Math.random()*6);
    // counter = counter + 1;
    setCounter(rev => rev + 1) ;

  }

  const removeValue = () =>{
    // console.log("cliked", Math.random()*6);
    // counter = counter - 1;
    setCounter(mev => mev - 1) ;
  }

  return (
   <>
       <h1>Nilya Counter {counter}</h1>
       <h2>Counter value: {counter}</h2>
       <button onClick={addValue}>Add value 
        {/* {counter} */}
        </button>
       <br />
       <button onClick={removeValue}>
        remove value
         {/* {counter} */}
       </button>
   </>
  )
}

export default App



