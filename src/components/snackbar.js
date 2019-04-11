import React, { Component } from "react";
import "./snackbar.css";
import _ from "lodash";
import { connect } from "react-redux";
import { removeSnackbar } from "../actions/snackbarActions";

const SnackbarComp = props => {
  return (
    <div
      className="snackbar show"
      onClick={() => {
        removeSnackbar();
      }}
    >
      <i className={props.icon} />
      {"         "}
      {props.message}
    </div>
  );
};
class Snackbar extends Component {
  state = {
    active: ""
  };

  showSnackbar() {
    const { removeSnackbar, snackbars } = this.props;
    let index = 0;
    return _.map(snackbars, ({ icon, message }, index) => {
      setTimeout(function() {
        removeSnackbar();
      }, 2700);
      return <SnackbarComp icon={icon} message={message} key={index} />;
      index++;
    });
  }

  render() {
    const { snackbars } = this.props;

    if (snackbars.length) {
      return this.showSnackbar();
    } else {
      return <div className="snackbar " />;
    }
  }
}
function mapStateToProps(state) {
  return { snackbars: state.snackbar.snackbars };
}
export default connect(
  mapStateToProps,
  { removeSnackbar }
)(Snackbar);
