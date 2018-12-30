import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    console.log(JSON.stringify(this.state));

    event.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        this.props.history.push('/login');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    }).catch(err => {
        console.error(err);
        alert('Error to register user, please try again!');
    });
  }

  render() {
    return (
      <div class="row">
        <div class="col-4">
          <form class="form-group" onSubmit={this.onSubmit}>
           <div class="form-group">
              <h3>Register User</h3>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                class="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                class="form-control"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}
