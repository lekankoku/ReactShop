import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
class Contact extends Component {
  render() {
    return (
      <div>
        <Banner picture="/assets/img/slider/2.jpg" PageName="Contact Us" />
        <div className="contact-area fix">
          <div className="contact-form pt-110">
            <h1 className="contact-title">TELL US YOUR PROJECT</h1>
            <form
              id="contact-form"
              action="https://d29u17ylf1ylz9.cloudfront.net/nego-v3/mail.php"
              method="post"
            >
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name *"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="Last Name *"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email *"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject *"
                  />
                </div>
              </div>
              <textarea name="message" id="message" placeholder="Message *" />
              <button type="submit" className="submit-btn">
                <span>Send Email</span>
              </button>
              <p className="form-message" />
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

export default Contact;
