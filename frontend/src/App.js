import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ProductListContainer from './containers/product-list.container';
import ProductEditContainer from './containers/product-edit.container';

class App extends Component {
  render() {
    return (
      <Container>
        <Container></Container>
        {/* <Header as='h1'>Gerenciamento de Produtos</Header> */}
        <Route exact path="/" component={ProductListContainer} />
        <Route path="/products/new" component={ProductEditContainer} />
        <Route path="/products/edit/:_id" component={ProductEditContainer} />
      </Container>
    );
  }
}

export default App;