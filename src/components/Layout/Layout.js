import React from 'react';

import Aux from '../../hoc/Aux';

import classes from './Layout.module.css';

/*function that contains the Toolbar, Sidedraw, and Backdrop */
const layout = ( props ) => (
<Aux>
    <div> Toolbar, SideDrawer, Backdrop</div>
         <main className={classes.Content}>
            {props.children}
         </main>
</Aux> 
);

export default layout;