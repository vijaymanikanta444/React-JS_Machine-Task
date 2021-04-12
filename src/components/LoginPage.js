import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userLogin } from '../redux/actions/Login';

export class LoginPage extends Component {
  state = {
    data: { userName: '', password: '' },
    errors: { userName: '', password: '' },
  };

  onchange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.id]: e.target.value },
      errors: {
        ...this.state.errors,
        [e.target.id]:
          this.state.data[e.target.id] == null || '' ? true : false,
      },
    });
  };

  validate = () => {
    this.setState({
      errors: {
        userName: this.state.data.userName == '',
        password: this.state.data.password == '',
      },
    });
    return this.state.data.userName !== '' && this.state.data.password !== '';
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.validate()) return;
    console.log(this.state);
    this.setState({ data: { userName: '', password: '' } });
    this.props.userLogin(this.state.data);
  };
  render() {
    const { authenticationError } = this.props;
    return (
      <div className="card">
        {authenticationError && (
          <p className="red">Enter Valid Credentials***</p>
        )}
        <Form onSubmit={this.onSubmit}>
          <Form.Group className="block">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              onChange={this.onchange}
              value={this.state.data.userName}
              id="userName"
            />
            <Form.Text className="red">
              {this.state.errors.userName ? 'Enter Username*' : ''}
            </Form.Text>
          </Form.Group>

          <Form.Group className="block">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.onchange}
              value={this.state.data.password}
              id="password"
            />
            <Form.Text className="red">
              {this.state.errors.password ? 'Enter Password*' : ''}
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="button"
            onClick={this.onSubmit}
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticationError: state.login.authenticationError,
  };
};

export default connect(mapStateToProps, { userLogin })(LoginPage);
