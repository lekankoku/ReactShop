import React, { Component } from 'react';
import Banner from '../Banner';
class AdminLogin extends Component {
  render() {
    return (
      <div>
        <div className="my-account-area ptb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-3" />
              <div className="col-lg-6 col-md-12 col-sm-12 ">
                <form action="#">
                  <div className="form-fields">
                    <h2>Login</h2>
                    <p>
                      <label for="login-name" className="important">
                        Email
                      </label>
                      <input type="text" id="login-name" />
                    </p>
                    <p>
                      <label for="login-pass" className="important">
                        Password
                      </label>
                      <input type="password" id="login-pass" />
                    </p>
                  </div>
                  <div className="form-action">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
