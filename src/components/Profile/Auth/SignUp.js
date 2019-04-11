import React, { Component } from 'react';
import Banner from '../../Banner';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../../actions/authActions';
import { addSnackbar } from '../../../actions/snackbarActions';
import snackbarMessages from '../../utils/snackbarMessages';
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { firstname, surname, email, password, confirmPassword } = this.state;
    const { addSnackbar, history, signup } = this.props;
    if (password.length < 8) {
      this.setState({ confirmPassword: '', password: '' });
      addSnackbar(snackbarMessages.auth[7]);
    }
    if (password !== confirmPassword) {
      this.setState({ confirmPassword: '', password: '' });
      addSnackbar(snackbarMessages.auth[6]);
    } else {
      signup({ firstname, surname, email, password }, history);
      this.setState({
        firstname: '',
        surname: '',
        email: '',
        confirmPassword: '',
        password: ''
      });
    }
  }

  render() {
    const { firstname, surname, email, password, confirmPassword } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <Banner PageName="Sign Up" picture="/assets/img/slider/3.jpg" />
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
                    <h2>Sign Up</h2>
                    <p>
                      <label for="login-first-name" className="important">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={this.onChange}
                        id="first name"
                      />
                    </p>
                    <p>
                      <label for="login-surname" className="important">
                        Surname
                      </label>
                      <input
                        type="text"
                        name="surname"
                        value={surname}
                        onChange={this.onChange}
                        id="old-pass"
                        required
                      />
                    </p>
                    <p>
                      <label for="login-name" className="important">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        id="old-pass"
                        required
                      />
                    </p>
                    <p>
                      <label for="login-pass" className="important">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        id="new-pass"
                        required
                      />
                    </p>
                    <p>
                      <label for="login-pass" className="important">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.onChange}
                        id="new-pass"
                        required
                      />
                    </p>
                  </div>
                  <div className="form-action">
                    <button onClick={this.onSubmit}>Sign Up</button>
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
export default connect(mapStateToProps, { addSnackbar, signup })(SignUp);
