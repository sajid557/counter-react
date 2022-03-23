import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Nav from "./routing/Nav";
import About from "./routing/About";
import Contact from "./routing/Contact";
import Home from "./routing/Home";
// inner
import InnerHome from "./routing/InnerHome";
import InnerAbout from "./routing/InnerAbout";
// item
import ItemDetail from "./routing/ItemDetail";

export default function Road() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/about" exact component={About} />
        <Route path="/about/:id" exact component={InnerAbout} />
        <Route path="/about/:detail/:name" component={InnerHome} />

        <Route path="/contact" component={Contact} />

        <Route path="/:id" component={ItemDetail} />
      </Switch>
    </div>
  );
}
