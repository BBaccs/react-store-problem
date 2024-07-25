import React from 'react';
import { useState, useEffect, useRef } from 'react';


function Cashier({ data }) {
    const cashiers = Object.entries(data);
    const [cashierState, setCashierState] = useState(cashiers);
    const inputRef = useRef(null);
    const joinQueueRef = useRef(null);

    const findCashierByName = (name) => {
        return cashiers.find(([key, cashier]) => cashier.name === name);
    };



    const handleClick = () => {
        const inputVal = parseInt(inputRef.current.value, 10);
       
        console.log('HIIIII', joinQueueRef.current.id);

        const result = findCashierByName(joinQueueRef.current.id);
        console.log(result)
    

        { console.log('state', cashierState, cashierState[0][1].items + inputVal) }

    //    const result = cashiers.find(([key, cashier]) => cashier.name === name);
    //    console.log(result);
    };

    // useEffect = () => {

    // }, [];

    return (

        <div className="cashier-list">
            {cashiers.map(([key, cashier], index) => {
                // console.log(`Key: ${key}`);
                return (
                    <div key={key} className="cashier">
                        <span className="cashier-number">Cashier {index + 1}:</span>
                        <span className="cashier-name">Name: {cashier.name}</span>
                        <span className="queue-length">{cashier.items} items</span>
                        <input
                            className="checkbox joinQueue"
                            type="checkbox"
                            id={`${cashier.name}`}
                            ref={joinQueueRef} 
                        />
                        <label className='sr-only' htmlFor="joinQueue">Join Queue</label>
                    </div>
                );
            })}
            <div>
                <input type="number" id="customerName" ref={inputRef} placeholder="Number of items" />
                <button onClick={handleClick}>Checkout</button>
            </div>
        </div>
    );
}

export default Cashier;



// [
//     [
//         "cashier1",
//         {
//             "items": 5,
//             "name": "Tony"
//         }
//     ],
//     [
//         "cashier2",
//         {
//             "items": 1,
//             "name": "John"
//         }
//     ],
//     [
//         "cashier3",
//         {
//             "items": 8,
//             "name": "Alice"
//         }
//     ],
//     [
//         "cashier4",
//         {
//             "items": 12,
//             "name": "Bob"
//         }
//     ],
//     [
//         "cashier5",
//         {
//             "items": 7,
//             "name": "Carol"
//         }
//     ],
//     [
//         "cashier6",
//         {
//             "items": 3,
//             "name": "David"
//         }
//     ]
// ]