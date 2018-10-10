import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default
  function ProductItem({ product, deleteProduct }) {
  return (
    <Grid columns={6} relaxed>

      <Grid.Column width={3}>
        <Segment basic>
          {product.name}</Segment>
      </Grid.Column>
      <Grid.Column  width={2}>
        <Segment basic>{product.code}</Segment>
      </Grid.Column>
      <Grid.Column  width={6}>
        <Segment basic>{product.description}</Segment>
      </Grid.Column>
      <Grid.Column  width={2}>
        <Segment basic>{product.price}</Segment>
      </Grid.Column>
      <Grid.Column  width={1}>
        <Segment basic>
          <Link to={`/products/edit/${product._id}`} className="ui blue mini button" role="button">Editar</Link>
        </Segment>
      </Grid.Column>
      <Grid.Column  width={1}>
        <Segment basic>
          <Button color="red" size='mini' onClick={() => deleteProduct(product._id)} >Excluir</Button>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}