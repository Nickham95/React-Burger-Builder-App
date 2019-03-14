import React, { Component } from 'react';

import Layout from './components/Layout/Layout';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


/* Component that returns The Burger Builder Component and Layout Component*/
class App extends Component {
  render() {
    return (
      <div >
        <Layout>

       <BurgerBuilder/>
       </Layout> 
      </div>
    );
  }
}

export default App;
