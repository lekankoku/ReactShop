import React, { Component } from 'react';
import Banner from '../../Banner';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../actions/authActions';
import '../../../loader.css';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    login({ email, password }, history, from);

    this.setState({ email: '', password: '' });
  }
  render() {
    const { email, password } = this.state;
    const { isLoading } = this.props;

    return (
      <div>
        <Banner PageName="Login" picture="/assets/img/slider/3.jpg" />
        {isLoading ? (
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : (
          ''
        )}
        <div className="my-account-area ptb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-3" />
              <div className="col-lg-6 col-md-12 col-sm-12 ">
                <form>
                  <div className="form-fields">
                    <h2>Email</h2>
                    <p>
                      <label for="login-name" className="important">
                        Username
                      </label>
                      <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        id="login-name"
                      />
                    </p>
                    <p>
                      <label for="login-pass" className="important">
                        Password
                      </label>
                      <input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        id="login-pass"
                      />
                    </p>
                  </div>
                  <div className="form-action">
                    <p className="lost_password">
                      <Link to="/auth/forgot">Lost your password?</Link>
                    </p>
                    <button onClick={this.onSubmit}>Login</button>
                    <label>
                      <input type="checkbox" />Remember me
                    </label>
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
function mapStateToProps(state) {
  return { isLoading: state.isLoading.isLoading };
}
export default connect(mapStateToProps, { login })(withRouter(Login));
