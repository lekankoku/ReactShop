import React, { Component } from "react";
import { connect } from "react-redux";
const Loader = props => {
  return (
    <div>
      {props.isLoading === true ? (
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
    </div>
  );
};

function mapStateToProps(state) {
  return { isLoading: state.isLoading };
}

export default connect(
  mapStateToProps,
  null
)(Loader);
