import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';



// Array of controls 
const controls = [
{label: 'Salad', type: 'salad'},
{label: 'Bacon', type: 'bacom'},
{label: 'Cheese', type: 'cheese'},
{label: 'Meat', type: 'meat'},
];




const buildControls = (props) => (
//  seperate the array defined above (controls) to render a build control for each element.
<div className={classes.buildControls}>
    {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label}/>
    ))}


</div>

);

export default buildControls;