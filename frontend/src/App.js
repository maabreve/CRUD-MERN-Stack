import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ProductListContainer from './containers/product-list.container';
import ProductEditContainer from './containers/product-edit.container';

import './App.css';

class App extends Component {
  // new branch
  render() {
    
    return (
      <div>
          <Route exact path="/" component={ProductListContainer} />
          <Route path="/products/new" component={ProductEditContainer} />
          <Route path="/products/edit/:_id" component={ProductEditContainer} />
      </div>

    );
  }
}

export default App;