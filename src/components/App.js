import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Secret from './Secret';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" width="30" height="30" alt="" /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/secret">Secret</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
        <div class="row">
          <div class="col-sm-12">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/secret" component={withAuth(Secret)} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
       </div>
      </div>
    );
  }
}

export default App;
