import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

import LogoComponent  from '../common/logo.component';
import ProductSearchComponent from './product-search.component';

export default class ProductHeaderComponent extends Component {
  
  render() {
    return ( 
      <Menu secondary fixed='top' style={{ backgroundColor: this.props.backcolor, padding: '0 10px' }}>
          <Menu.Item as='a' header style={{border: 'none', padding: 5}}>
            <LogoComponent></LogoComponent>
        </Menu.Item>
        <Menu.Item position='right' style={{'border': 'none', padding: 5}}>
          <ProductSearchComponent></ProductSearchComponent>
        </Menu.Item>
      </Menu>
    )
  }
}
