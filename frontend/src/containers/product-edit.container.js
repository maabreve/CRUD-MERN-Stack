import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import { newProduct, saveProduct, fetchProduct, updateProduct } from '../actions/product.actions';
import ProductEditComponent  from '../components/products/product-edit.component';

class ProductEditContiner extends Component {
  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchProduct(_id)
    } else {
      this.props.newProduct();
    }
  }
  
  submit = (product) => {
    if(!product._id) {
      return this.props.saveProduct(product)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateProduct(product)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }
  
  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ProductEditComponent product={this.props.product} loading={this.props.loading} onSubmit={this.submit} />
        }
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

export default connect(
  mapStateToProps, {newProduct, saveProduct, fetchProduct, updateProduct})(ProductEditContiner);
