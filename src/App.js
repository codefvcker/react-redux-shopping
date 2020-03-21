import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./pages";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
