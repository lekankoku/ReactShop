import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Loader from "../loader";
import { sendEmail } from "../../actions/index";
import { addSnackbar } from "../../actions/snackbarActions";
import { connect } from "react-redux";
import snackbarMessages from "../utils/snackbarMessages";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",

      name: "",

      subject: "",
      message: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;

    this.props.sendEmail({ name, email, subject, message });

    this.setState({ name: "", email: "", subject: "", message: "" });
  }
  renderMessage() {
    const { emailSent, addSnackbar } = this.props;

    if (emailSent) {
      addSnackbar(snackbarMessages.mailer[0]);
    } else if (emailSent == null) {
      return <p className="form-message" />;
    } else {
      addSnackbar(snackbarMessages.mailer[1]);
    }
  }
  render() {
    const { name, email, message, subject } = this.state;
    const { emailSent, isLoading } = this.props;
    return (
      <div>
        <Banner picture="/assets/img/slider/2.jpg" PageName="Contact Us" />
        {isLoading === true ? (
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
          ""
        )}
        <div className="contact-area fix">
          <div className="contact-form pt-110">
            <h1 className="contact-title">TELL US YOUR PROJECT</h1>
            <form id="contact-form" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder="Name *"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    id="email"
                    placeholder="Email *"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={this.state.subject}
                    onChange={this.onChange}
                    placeholder="Subject *"
                    required
                  />
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                value={this.state.message}
                onChange={this.onChange}
                placeholder="Message *"
              />
              <button type="submit" className="submit-btn">
                <span>Send Email</span>
              </button>
              {this.renderMessage()}
            </form>
          </div>
          <div className="contact-address pt-110 pb-100">
            <h1 className="contact-title">CONTACT US</h1>
            <div className="contact-info">
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram anteposuerit litterarum formas
                human.
              </p>
              <div className="contact-list-wrapper">
                <div className="contact-list">
                  <i className="fa fa-fax" />
                  <span>Address : 40 Baria Sreet 133/2 NewYork City</span>
                </div>
                <div className="contact-list">
                  <i className="fa fa-phone" />
                  <span>Info@negothemes.com</span>
                </div>
                <div className="contact-list">
                  <i className="fa fa-envelope-o" />
                  <span>0(1234) 567 890</span>
                </div>
              </div>
            </div>
            <div className="working-time">
              <h2>Working hours</h2>
              <span>
                <span>Monday – Saturday:</span> 08AM – 22PM
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ emailSent, isLoading }) {
  return { emailSent, isLoading };
}
export default connect(
  mapStateToProps,
  { sendEmail, addSnackbar }
)(Contact);
