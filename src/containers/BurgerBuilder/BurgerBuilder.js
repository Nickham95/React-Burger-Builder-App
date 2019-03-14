import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';


/* Component thats holds the Burger component and the  Build Controls Component */
class BurgerBuilder extends Component{
    render(){
        return(

          /* used aux to return two children (Burger, Build Controls) */
          <Aux>
            <Burger/>
            <div>Build Controls</div>
          </Aux>




         );


    }

}


export default BurgerBuilder;