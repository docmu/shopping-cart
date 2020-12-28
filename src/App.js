import './App.css';
import React, {useState, useEffect} from 'react';
import Counters from "./components/counters";
function App(props) {
  const[total, setTotal] = useState(0);
  const[resetCounters,setResetCounters] = useState(false);
  
  const addBtnClicked = (name, price) => {
    setTotal(parseFloat(total) + parseFloat(price));
  }
  const deleteBtnClicked = (name, price) => {
    setTotal(parseFloat(total) - parseFloat(price));
  }
  const resetBtnClicked = () => {
    setTotal(0);
    setResetCounters(!resetCounters);
    console.log(props.items);
  }
  
  return (
    <div className="App">
      <h1>Total: ${total.toFixed(2)}</h1>
      <button onClick={resetBtnClicked}>reset</button>
      <Counters reset={resetCounters} items={props.items} addItemHandler={addBtnClicked} deleteItemHandler={deleteBtnClicked}/>
    </div>
  );
}

export default App;
