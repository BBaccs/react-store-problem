import React from 'react';
import { useState, useRef } from 'react';

function Cashier({ data }) {
    const cashiers = Object.entries(data);
    const [cashierState, setCashierState] = useState(cashiers);
    const inputRef = useRef(null);

    const handleClick = () => {
        // Check if the input value is empty
        if (inputRef.current.value.length > 0) {
            const fewestItems = cashierState.reduce(
                (lowest, current) => {
                    return current[1].items < lowest[1].items ? current : lowest;
                },
                cashierState[0]
            );
    
            const target = fewestItems[1].name;
            const inputVal = parseInt(inputRef.current.value, 10);
            const totalValueAdd = fewestItems[1].items + inputVal;
    
            setCashierState(prevState => {
                return prevState.map(([key, cashier]) => {
                    if (cashier.name === target) {
                        return [key, { ...cashier, items: totalValueAdd }];
                    }
                    return [key, cashier];
                });
            });
            inputRef.current.value = '';
        } else {
           alert('Number of items is empty or incorrect');
        }
    };
    return (

        <div className="cashier-list">
            {cashierState.map(([key, cashier], index) => {
                // console.log(`Key: ${key}`);
                return (
                    <div key={key} className="cashier">
                        <span className="cashier-number">Cashier {index + 1}:</span>
                        <span className="cashier-name">{cashier.name}</span>
                        <span className="queue-length">{cashier.items} items</span>
                    </div>
                );
            })}
            <div>
                <input type="number" id="numOfItems" ref={inputRef} placeholder="Number of items" />
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