import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';



 
/* Component thats holds the Burger component and the  Build Controls Component */
class BurgerBuilder extends Component{


 state = {
  ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
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