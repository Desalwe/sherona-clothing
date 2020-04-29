import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  };


  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" })
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acount</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required />
          <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} required />

          <CustomButton type="submit" value="Submit Form">
            Sign in
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} value="Submit Form">
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  };
};

export default SignIn;