import React, { Component } from "react";

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered

    render() {
      return (
        <div>
          <ChildComponent {...this.props} />
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return { isLoading: state.isLoading };
  }

  return connect(
    mapStateToProps,
    null
  )(ComposedComponent);
};
