import React, { Component } from 'react';
import Banner from '../../Banner';
import { addSnackbar } from '../../../actions/snackbarActions';
import { confirmToken, changePassword } from '../../../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import snackbarMessages from '../../utils/snackbarMessages';
class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
      password: '',
      confirmPassword: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { match, history, confirmToken } = this.props;
    if (!match.params.token) {
      history.push('/auth/forgot');
    }
    const token = match.params.token;
    this.setState({ token: token });
    confirmToken(token, history);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword, token } = this.state;
    const { changePassword, history, addSnackbar } = this.props;
    if (password !== confirmPassword) {
      addSnackbar(snackbarMessages.auth[6]);
    } else {
      alert(password + token);
      changePassword({ password }, token, history);
    }

    this.setState({ password: '', confirmPassword: '' });
  }
  render() {
    const { password, confirmPassword } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <Banner PageName="Change Password" picture="/assets/img/slider/3.jpg" />
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
                    <h2>Change Password</h2>
                    <p>
                      <label for="login-name" className="important">
                        New password
                      </label>
                      <input
                        type="password"
                        id="old-pass"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                      />
                    </p>
                    <p>
                      <label for="login-pass" className="important">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="new-pass"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.onChange}
                      />
                    </p>
                  </div>
                  <div className="form-action">
                    <button type="submit" onClick={this.onSubmit}>
                      Change Password
                    </button>
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
export default connect(mapStateToProps, {
  addSnackbar,
  changePassword,
  confirmToken
})(withRouter(ChangePassword));
