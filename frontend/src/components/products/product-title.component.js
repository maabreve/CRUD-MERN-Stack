import React, { Component } from 'react';

export default class ProductTitleComponent extends Component {

  render() {
    return (
      <div style={{ height: 70, backgroundColor: '#dddddd',   padding: '0 20px' }}>
          <div style={{ display: 'table', position: 'absolute', height: '70px', width: '100%' }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
              <div style={{ fontSize: 30, fontWeight:100, color: '#3F5866' }}> {this.props.title}</div>
            </div>
          </div>
      </div>
    )
  }
}
