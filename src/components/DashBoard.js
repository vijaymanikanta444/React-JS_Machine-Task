import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions/Users';
import { userLoggedOut } from '../redux/actions/Login';

class DashBoard extends Component {
  state = {
    // users: [
    //   {
    //     id: 1,
    //     name: 'test1',
    //     age: '11',
    //     gender: 'male',
    //     email: 'test1@gmail.com',
    //     phoneNo: '9415346313',
    //   },
    //   {
    //     id: 2,
    //     name: 'test2',
    //     age: '12',
    //     gender: 'male',
    //     email: 'test2@gmail.com',
    //     phoneNo: '9415346314',
    //   },
    //   {
    //     id: 3,
    //     name: 'test3',
    //     age: '13',
    //     gender: 'male',
    //     email: 'test3@gmail.com',
    //     phoneNo: '9415346315',
    //   },
    //   {
    //     id: 4,
    //     name: 'test4',
    //     age: '14',
    //     gender: 'male',
    //     email: 'test4@gmail.com',
    //     phoneNo: '9415346316',
    //   },
    //   {
    //     id: 5,
    //     name: 'test5',
    //     age: '15',
    //     gender: 'male',
    //     email: 'test5@gmail.com',
    //     phoneNo: '9415346317',
    //   },
    //   {
    //     id: 6,
    //     name: 'test6',
    //     age: '16',
    //     gender: 'male',
    //     email: 'test6@gmail.com',
    //     phoneNo: '9415346318',
    //   },
    // ],
  };
  // componentDidMount() {
  //   this.props.getUsers();
  // }

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

export default connect(mapStateToProps, { getUsers, userLoggedOut })(DashBoard);
