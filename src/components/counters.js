import React from 'react';
import Counter from "./counter";
export default function Counters(props) { 
    return(
        <>
            {props.items.map(item => 
                <Counter 
                    reset={props.reset}
                    key={item.name} 
                    name={item.name} 
                    price={item.price}
                    addItemHandler={props.addItemHandler} 
                    deleteItemHandler={props.deleteItemHandler}
                />)}
        </>
    );
}