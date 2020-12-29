import './App.css';
import React, {useState, useEffect} from 'react';
import Counters from "./components/counters";
function App(props) {
  //grand total of all items added
  const[total, setTotal] = useState(0);

  // when the reset btn is clicked all the counters for each item needs to reset to 0 (indicated by 'true')
  // a reference to resetCounters is passed down the component tree from App -> Counters -> Counter
  // Counter sets the state of the item counter to 0 if resetCounters = true
  const[resetCounters,setResetCounters] = useState(false);
  //before the next re-render, reset resetCounters to its original state 
  useEffect(()=> {
    return () => {
      setResetCounters(false);
    }
  }, [resetCounters]);

  const addBtnClicked = (name, price) => {
    setTotal(parseFloat(total) + parseFloat(price));
  }
  
  const deleteBtnClicked = (name, price) => {
    setTotal(parseFloat(total) - parseFloat(price));
  }

  const resetBtnClicked = () => {
    setTotal(0);
    //true -> reset all the item counters to 0
    setResetCounters(!resetCounters);
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
