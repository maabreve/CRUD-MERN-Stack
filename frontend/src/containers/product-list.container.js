import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchProducts, deleteProduct } from '../actions/product.actions';
import ProductListComponent from '../components/products/product-list.component';
import ProductHeaderComponent from '../components/products/product-header.component';
import ProductTitleComponent from '../components/products/product-title.component';

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
      <div style={{ backgroundColor: '#666666', marginTop: "3.4em" }}>
        <ProductHeaderComponent backcolor="#cccccc"></ProductHeaderComponent>
        <ProductTitleComponent title="Lençol avulso"></ProductTitleComponent>
        <Container style={{ padding: '50px 0' }}>
          {/* <Link to={`/products/new`} className="ui green tiny button" role="button">Novo Produto</Link> */}
          <div style={{ backgroundColor: '#f8f8f8' }}>
            <Link to={`/products/new`} className="ui mini button" role="button">+</Link>

            <ProductListComponent products={this.props.productsAll} deleteProduct={this.props.deleteProduct} />
            <Grid>
              <Grid.Column floated='left' width={5}>
                <Form  style={{ marginLeft: 10 }}>
                  <Form.Group widths='equal'>
                    <Form.Field control='select'>
                      <option value='male'>16 produtos por página</option>
                      <option value='female'>50 produtos por página</option>
                    </Form.Field>
                  </Form.Group>
               
                </Form>
              </Grid.Column>
              <Grid.Column textAlign='right' floated='right' style={{ marginRight: 10 }} width={5}>
                <PaginationComponent
                  currentPage={this.props.currentPage}
                  totalPages={totalPages}
                  handlePageChange={this.handlePageChange}>
                </PaginationComponent>
              </Grid.Column>
            </Grid>


          </div>
        </Container>
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
