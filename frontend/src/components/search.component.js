import React, { Component } from 'react';
import { setSearch } from '../../actions/search.actions';
import { connect } from 'react-redux';

class ProductSearchComponent extends Component {
  filterList = (event) => {
    // this.props.searchProducts(event.target.value.toLowerCase());
    this.props.setSearch(event.target.value.toLowerCase());
  }

  render() {
    return (
      <div>
        <div className="ui search">
          <div className="ui icon input">
            <i aria-hidden="true" className="search icon"></i>
            <input type="text" placeholder="Pesquisar"
              className="prompt" autoComplete="off"
              onChange={this.filterList} />

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.productStore.product,
    errors: state.productStore.errors
  }
}

export default connect(mapStateToProps, { setSearch })(ProductSearchComponent);