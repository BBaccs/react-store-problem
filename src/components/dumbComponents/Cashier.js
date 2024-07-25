import React from 'react';

function Cashier({ data }) {

    return (
        <div className="cashier-list">
            {data.map((cashier, index) => {
                { console.log(cashier) }
                <div key={index} className="cashier">
                    <span className="cashier-number">Cashier {index + 1}</span>
                    <span className="queue-length">{cashier.items} items</span>
                </div>
            })}
        </div>
    )
}

export default Cashier;