import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger';



 
/* Component thats holds the Burger component and the  Build Controls Component */
class BurgerBuilder extends Component{


 state = {
  ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
  }
}
    render(){  
     
       
        return(

          /* used aux to return two children (Burger, Build Controls) */
          <div>
             <Burger ingredients={this.state.ingredients} />
            <div>Build Controls</div>
          </div>
         );
    }
}
export default BurgerBuilder;