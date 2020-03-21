import React, { useCallback } from "react";
import fire from "../../config/fire";
import { withRouter } from "react-router";
import "./SignUp.scss";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className="sign-up__form">
        <input name="email" placeholder="email" type="email" />
        <input name="password" placeholder="password" type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
