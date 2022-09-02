import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { GoogleLogin } from "react-google-login";


export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      url: ""
    };
  }
  responseGoogle = response => {
    console.log(response);
    this.setState({
      name: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl
    });
  };
  responseFacebook = response => {
    console.log(response);
  };
  responseErrorFacebook = error => {
    console.log(error);
  };

  render() {
    return (
      <>
        <Form className="login-form">
          <h1 className="text-center">
            <span className="font-weight">WELCOME TO G-HIT</span>
          </h1>
          <h2 className="text-center">ENJOY YOUR TUBE {this.state.name}</h2>
          <h3 >{this.state.email}</h3>
          <img src={this.state.imageUrl} alt={this.state.name} />
        
          <Label>Email</Label>
          <input type="email" placeholder="Email" />
        
          <Label>Password</Label>
          <input type="password" placeholder="Password" />

          <Button className="btn-lg btn-block">Log in</Button>
          <div className="text-center pt-3">Or</div>
          
      
        <GoogleLogin className="googlebtn"
          onClick={()=> console.log('true')}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          clientId="117795676055-ikd32d0p670hh3f6aso8q04nedbc7kpb.apps.googleusercontent.com"></GoogleLogin>

        <GoogleLogin className="btn1" 
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
          clientId="117795676055-ikd32d0p670hh3f6aso8q04nedbc7kpb.apps.googleusercontent.com">
          </GoogleLogin>
          </Form>

      </>
    );
  }
}
