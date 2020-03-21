import React, { useCallback } from "react";
import fire from "../../config/fire";
import { withRouter } from "react-router";
import "./SignIn.scss";

const SignIn = ({ history }) => {
  const handleSignIn = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn} className="sign-in__form">
        <input name="email" placeholder="email" type="email" />
        <input name="password" placeholder="password" type="password" />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
