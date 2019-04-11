import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchAuth } from '../../actions/authActions';
export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.props.fetchAuth();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth.auth) {
        console.log(this.props);

        console.log(this.props);

        //this.props.history.push('/');
      }
    }

    render() {
      return (
        <div>
          {this.props.auth.auth === true ? (
            <ChildComponent {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: this.props.location }
              }}
            />
          )}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps, { fetchAuth })(ComposedComponent);
};
