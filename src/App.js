import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main, Cart, About } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
