import React from 'react';
import ProductItem from './product-item.component';

export default function ProductListComponent({products, deleteProduct}){

  const loadProductList = () => {
    return products.data ? 
      products.data.map(product => {
        return (
          <ProductItem key={product._id} 
                      product={product} 
                      deleteProduct={deleteProduct} />
        )
      }) : <p>Nenhum produto cadastrado</p>
    ;
  }

  return (
      loadProductList() 
  )
}