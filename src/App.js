import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import DashBoard from './components/DashBoard';
import LoginPage from './components/LoginPage';

function App({ isAuthenticated }) {
  console.log(isAuthenticated);
  return (
    <div className="App">
      {isAuthenticated ? <DashBoard /> : <LoginPage />}
      {/* <DashBoard /> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
