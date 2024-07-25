import React from 'react';

function Cashier({ data }) {
    const cashiers = Object.entries(data);
    
    return (
        <div className="cashier-list">
            {cashiers.map(([key, cashier], index) => {
                console.log(`Key: ${key}`);
                return (
                    <div key={key} className="cashier">
                        <span className="cashier-number">Cashier {index + 1}:</span>
                        <span className="cashier-name">Name: {cashier.name}</span>
                        <span className="queue-length">{cashier.items} items</span>
                    </div>
                );
            })}
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