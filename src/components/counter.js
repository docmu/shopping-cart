import React, {useState, useEffect} from 'react';

export default function Counter(props) {
    // the amount of the individual item
    const [amount, setAmount] = useState(0);
    
    //if reset is true then re-render with amount = 0
    useEffect(() => {
        if(props.reset)
            setAmount(0);
    },[props.reset]);

    // + button
    const addClickedHandler = () => {
        props.addItemHandler(props.name, props.price); 
        setAmount(prev => prev + 1);
    }

    // - button
    const removeClickedHandler = () => {
        props.deleteItemHandler(props.name, props.price); 
        setAmount(prev =>  prev - 1);
    }
    
    return (
        <>
            <h2>{props.name}</h2>
            <h2>${props.price}</h2>
            <button>{amount}</button>
            <button onClick={addClickedHandler}>+</button>
            <button disabled={amount === 0} onClick={removeClickedHandler}>-</button>
        </>
    );
}