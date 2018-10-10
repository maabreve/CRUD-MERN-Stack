import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const validate = (values) => {
  const errors = {};

  if(!values.name) {
    errors.name = {
      message: 'Favor informar o nome do produto'
    }
  }

  if(!values.code) {
    errors.code = {
      message: 'Favor informar o código do produto'
    }
  }

  if(!values.description) {
    errors.description = {
      message: 'Favor informar a descrição do produto'
    }
  }
  
  if(!values.price) {
    errors.price = {
      message: 'Favor informar o preço do produto'
    }
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = {
  //     message: 'Invalid email address'
  //   }
  }
  return errors;
}

class ProductEditComponent extends Component {

  componentWillReceiveProps = (nextProps) => {
    const { product } = nextProps;
    if(product._id !== this.props.product._id) {
      this.props.initialize(product);
    }
  }
  
  controlItem = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, submitting, loading } = this.props;

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Cadastro de Produto</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="name" type="text" component={this.controlItem} label="Nome"/>
            <Field name="code" type="text" component={this.controlItem} label="Código"/>
            <Field name="description" type="text" component={this.controlItem} label="Descrição"/>
            <Field name="price" type="number" component={this.controlItem} label="Preço"/>
            <Button primary type='submit' disabled={submitting}>Salvar</Button>
            <Link to={`/`} className="ui button" role="button">Cancelar</Link>
            
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'product', validate})(ProductEditComponent);
