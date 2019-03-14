import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/* Function that adds the ingredients that make up burger */

const burger = (props) => {
return(

<div className={classes.Burger}>
<BurgerIngredient type ="bread-top"/>
<BurgerIngredient type="cheese"/>
<BurgerIngredient type="cheese"/>
<BurgerIngredient type="bacon"/>
<BurgerIngredient type="bacon"/>
<BurgerIngredient type="salad"/>
<BurgerIngredient type="salad"/>
<BurgerIngredient type="bread-bottom"/>
</div>



);

};


export default burger;