import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import {
  GoogleLoginButton
} from "react-social-login-buttons";

export default class signup extends Component {
  render() {
    return (
      <div>
        <Form className="signup-form">
          <h1 className="text-center">
            <span className="font-weight-bold">Sign Up Form</span>
          </h1>
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
            <Input type="text" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password" />
          </FormGroup>
          
          <div className="text-center pt-3">Or</div>
          
          <GoogleLoginButton className="mt-3 mb-3">
            <span>Sign up with Google</span>
          </GoogleLoginButton>
         
        </Form>
      </div>
    );
  }
}
