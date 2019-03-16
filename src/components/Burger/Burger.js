import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/* Function that adds the ingredients that make up burger */

const burger = (props) => {

/* it's just a way to transform an object of key value pairs into an array of burger ingredients

where the value of that object is important for me to decide how many ingredients I need and the keys

important for which type of ingredient I need. */
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )



        .reduce((arr,el)=> {
            return  arr.concat(el)}, []); 


            // if there is no ingredients display paragraph
            if(transformedIngredients.length ===0){
                transformedIngredients = <p>Please Start Adding Ingredients</p>
            }
       
    

return(

<div className={classes.Burger}>
<BurgerIngredient type ="bread-top"/>
{transformedIngredients}
<BurgerIngredient type="bread-bottom"/>
</div>



);

};


export default burger;