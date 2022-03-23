import React from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import {
//   BrowserRouter as Router,
//   Link,
//   Switch,
//   Route,
//   useLocation,
// } from "react-router-dom";
import "./App.css";
// import Nav from "./routing/Nav";
// import Road from "./routing/Road";

// import Timer from "./component/Timer";
// import FirstCounter from "./component/FirstCounter";
// import CounterTwo from "./CounterTwo";

// const countContext = createContext();
// landing page
import Landing from "./landingpage/LandingPage";

function App() {
  // let location = useLocation();
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
