import React, { Component } from "react";
import { Container, Row, Form, Button, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailInput: '',
      streetInput: '',
      flatNum: '',
      cityName: '',
      postalCode: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.state;
    console.log('A form was submitted: ' + JSON.stringify(formData));
    this.props.makeOrder(formData)
    this.props.history.push('/summary');
  }

  render() {
    const { firstName, lastName, emailInput, streetInput, flatNum, cityName, postalCode } = this.state;
    return (
      <Container >
        <Row className="center-justify">
          <Form className="checkout-form col-sm-6" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="firstName">Name</Label>
              <Input type="text" name="firstName" value={firstName} id="firstName" onChange={this.handleChange} placeholder="Your first name..." />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" value={lastName}  id="lastName" onChange={this.handleChange} placeholder="Your last name..." />
            </FormGroup>
            <FormGroup>
              <Label for="emailInput">E-mail</Label>
              <Input type="email" name="emailInput" value={emailInput}  id="emailInput" onChange={this.handleChange} placeholder="Your e-mail address.. " />
            </FormGroup>
            <FormGroup>
              <Label for="streetInput">Street</Label>
              <Input type="text" name="streetInput" value={streetInput}  onChange={this.handleChange} id="streetInput" placeholder="Your street name..." />
            </FormGroup>
            <FormGroup>
              <Label for="flatNum">Number</Label>
              <Input type="text" name="flatNum"  value={flatNum}  onChange={this.handleChange} id="flatNum" placeholder="Your building/flat number..." />
            </FormGroup>
            <FormGroup>
              <Label for="cityName">City</Label>
              <Input type="text" name="cityName" value={cityName}  onChange={this.handleChange} id="cityName" placeholder="Your city name..." />
            </FormGroup>
            <FormGroup>
              <Label for="postalCode">Postal code</Label>
              <Input type="text" name="postalCode" value={postalCode}  onChange={this.handleChange} id="postalCode" placeholder="Your postal code..." />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Row>    
      </Container>
    )
  }
}

export default withRouter(CheckoutForm);