import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProducts } from '../../actions/product.actions';
class ProductSearchComponent extends Component {
  filterList = (event) => {
    this.props.searchProducts(event.target.value.toLowerCase(), this.props.itemsPerPage);
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <i aria-hidden="true" className="search icon"></i>
          <input type="text" 
            placeholder="Lençol Avulso"
            className="prompt" autoComplete="off"
            onChange={this.filterList} />
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.productStore.product,
    errors: state.productStore.errors,
    itemsPerPage: state.paginationStore.itemsPerPage
  }
}

export default connect(mapStateToProps, { searchProducts })(ProductSearchComponent);