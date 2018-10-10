import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchProducts, deleteProduct } from '../actions/product.actions';
import { setCurrentPage } from '../actions/pagination.action';
import ProductListComponent from '../components/products/product-list.component';
import SearchComponent from '../components/common/search.component';
import PaginationComponent from '../components/common/pagination.component';

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.setCurrentPage(1);
    this.props.fetchProducts(1, this.props.itemsPerPage);
  }

  handlePageChange = (page) => {
    this.props.setCurrentPage(page);
    this.props.fetchProducts(page, this.props.itemsPerPage);
  }

  render() {
    return (
    <div  style={{marginTop:"2em"}}>
        <Grid>
          <Grid.Column width={9}>
            <h1>Lista de Produtos</h1>
          </Grid.Column>
          <Grid.Column width={5}>
            <Container textAlign="right">
              <SearchComponent />
            </Container>
          </Grid.Column>
          <Grid.Column width={2}>
            <Container textAlign="right">
            <Link to={`/products/new`} className="ui green tiny button" role="button">Novo Produto</Link>
            </Container>
          </Grid.Column>
        </Grid>
        
        <ProductListComponent products={this.props.products} deleteProduct={this.props.deleteProduct} />
        <PaginationComponent currentPage={this.props.currentPage} itemsPerPage={this.props.itemsPerPage}  totalItems={this.props.products  && this.props.products.fulldata ? this.props.products.fulldata.length : 0} 
            handlePageChange={this.handlePageChange}></PaginationComponent>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.productStore.products,
    productsPaged: state.productStore.productsPaged,
    itemsPerPage: state.paginationStore.itemsPerPage
  }
}

export default connect(mapStateToProps, { fetchProducts, setCurrentPage, deleteProduct })(ProductListContainer);
