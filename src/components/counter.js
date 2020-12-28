import React, {useState} from 'react';

export default function Counter(props) {
    const [amount, setAmount] = useState(0);
    const [items,setItems] = useState(props.items);

    const addClickedHandler = () => {
        props.addItemHandler(props.name, props.price); 
        setAmount(prev => prev + 1);
        // setItems(...items, ({name: props.name, price: props.price, amount: amount}));
        // setItems(...items, ...{name: "pear", price: "1.00", amount: 5});
        // console.log(items);
    }
    const removeClickedHandler = () => {
        props.deleteItemHandler(props.name, props.price); 
        setAmount(prev =>  prev - 1);
        // console.log(amount);
    }
    
    return (
        <>
            <h2>{props.name}</h2>
            <h2>${props.price}</h2>
            <button>{props.reset ? 0 : amount}</button>
            <button onClick={addClickedHandler}>+</button>
            <button disabled={props.reset || amount === 0} onClick={removeClickedHandler}>-</button>
        </>
    );
}