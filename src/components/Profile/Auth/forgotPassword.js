import React, { Component } from 'react';
import Banner from '../../Banner';
import Authentication from '../../HOCs/_requireAuth';
import { connect } from 'react-redux';
import { forgotPassword } from '../../../actions/authActions';
class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    const { forgotPassword, history } = this.props;

    forgotPassword({ email }, history);

    this.setState({ pass: '' });
  }
  render() {
    const { email } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <Banner PageName="Forgot Password" picture="/assets/img/slider/3.jpg" />
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
              <div className="col-lg-2" />
              <div className="col-lg-8 col-md-12 col-sm-12 ">
                <form>
                  <div className="form-fields">
                    <h2>Forgot Password</h2>
                    <p>
                      <label for="login-name" className="important">
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="old-pass"
                        value={email}
                        onChange={this.onChange}
                      />
                    </p>
                  </div>
                  <div className="form-action">
                    <button onClick={this.onSubmit}>Reset Password</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-2" />
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
export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
