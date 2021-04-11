import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { getUsers } from '../redux/actions/Users';
import { userLoggedOut } from '../redux/actions/Login';

class DashBoard extends Component {
  logout = () => {
    this.props.userLoggedOut();
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div className="heading">
          <Button className="button" onClick={this.logout}>
            Log Out
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { userLoggedOut })(DashBoard);
