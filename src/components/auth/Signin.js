import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux"; // Write out multiple HOC
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    // Provided by reduxForm
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            autoComplete="off"
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            autoComplete="off"
            type="password"
            component="input"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions), // since we are not fetching state from Action creator: so 1st value will be null
  reduxForm({ form: "signin" })
)(Signin);
