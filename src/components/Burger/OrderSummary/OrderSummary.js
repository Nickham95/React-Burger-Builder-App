import React from 'react';



/* 
.. Lists An order summary  
*/
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map( igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li> );
    } );

return(
<div>
<h3>Your Order</h3>
<p>A delicious burger  the following ingredients:</p>
<ul>

{ingredientSummary}

</ul>

<p>Continue to Checkout?</p>
</div>

);

};


export default orderSummary;