import React from 'react';
import { Item, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const itemImageBox = {
  margin: 5
}

const title = {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 5
}

const description = {
  fontSize: 16
}

const oldPrice = {
  fontSize: 16,
  textDecoration:'line-through' 
}

const mainPrice = {
  fontSize: 18,
  fontWeight: 'bold'
}


export default
  function ProductItem({ product, deleteProduct }) {
  return (
    
    <Item.Group  as={Link} to={`/products/edit/${product._id}`} style={{color: 'inherit'}}>
      <Item horizontal style={{ borderBottom: '1px solid #ddd' }}>
        <Item.Image style={itemImageBox} size='tiny' src='../../images/prod1.png' />
        <Item.Image style={itemImageBox} size='tiny' src='../../images/prod2.png' />
        <Item.Image style={itemImageBox} size='tiny' src='../../images/prod3.png' />
        <Item.Image style={itemImageBox} size='tiny' src='../../images/prod4.png' />
        <Item.Content verticalAlign='middle'>
          <Grid columns='equal'>
            <Grid.Column width={11}>
              <div style={title}>{product.name}</div>
              <div style={description}>{product.description}</div>
            </Grid.Column>
            <Grid.Column position='right' verticalAlign='middle'>
              <span style={oldPrice}>R$198,00</span> por <span style={mainPrice}>R$158,00</span>
            </Grid.Column>
          </Grid>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}