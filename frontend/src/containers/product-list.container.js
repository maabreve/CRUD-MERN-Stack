import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchProducts, deleteProduct, searchProducts } from '../actions/product.actions';
import ProductListComponent from '../components/products/product-list.component';
import ProductSearchComponent from '../components/products/product-search.component';
import PaginationComponent from '../components/common/pagination.component';

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts(1, this.props.itemsPerPage);
  }

  handlePageChange = (page) => {
    this.props.fetchProducts(page, this.props.itemsPerPage);
  }

  render() {
    let totalPages = 1;
    if (this.props.productsAll && this.props.productsAll.fulldata 
                                && this.props.itemsPerPage 
                                && this.props.itemsPerPage > 0) {
      totalPages = Math.ceil(this.props.productsAll.fulldata.length / this.props.itemsPerPage);
    }

    return (
      <div style={{ marginTop: "2em" }}>
        <Grid>
          <Grid.Column width={9}>
            <h1>Lista de Produtos</h1>
          </Grid.Column>
          <Grid.Column width={5}>
            <Container textAlign="right">
              <ProductSearchComponent searchAction={searchProducts} />
            </Container>
          </Grid.Column>
          <Grid.Column width={2}>
            <Container textAlign="right">
              <Link to={`/products/new`} className="ui green tiny button" role="button">Novo Produto</Link>
            </Container>
          </Grid.Column>
        </Grid>

        <ProductListComponent products={this.props.productsAll} deleteProduct={this.props.deleteProduct} />
        
        <PaginationComponent currentPage={this.props.currentPage} 
                             totalPages={totalPages}
                             handlePageChange={this.handlePageChange}>
        </PaginationComponent>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    productsAll: state.productStore.productsAll,
    itemsPerPage: state.paginationStore.itemsPerPage
  }
}

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(ProductListContainer);
