import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Header from './Header';
import Fetcher from './Fetcher';
import Login from './Login';
import Main from './Main';
import Settings from './Settings';
import RHLogin from './RHLogin';
import './styles/app.css';

@inject('store') @observer
class App extends Component {
  render() {
    const { page } = this.props.store.userStore;

    return (
      <div>
        <Header />
        {this.props.store.userStore.user && this.props.store.userStore.token && <Fetcher />}
        {page === 'RHLOGIN' && <RHLogin />}
        {(page === 'LOGIN' || page === 'REGISTER') && <Login />}
        {page === 'MAIN' && <Main />}
        {page === 'SETTINGS' && <Settings />}
      </div>
    );
  }
}

export default App;
