import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Nav from "./components/Nav";
import AboutMe from "./components/aboutMe/AboutMe";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import PirthDay from "./components/pirthday/PirthDay";
import Tours from "./components/tours/Tours";
import Reviews from "./components/reviews/Reviews";
import Menu from "./components/menu/Menue";
import Taps from "./components/taps/Taps";
import LoremIpsum from "./components/loremIpsum/LoremIpsum";
import ColorGenerator from "./components/colorGenerator/Generator";
import Grocery from "./components/gocery/Grocery";
function App() {
  let { path } = useRouteMatch();
  return (
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/contact-me">
          <ContactMe />
        </Route>
        <Route path={`${path}parth-day`}>
          <PirthDay />
        </Route>
        <Route path={`${path}tours`}>
          <Tours />
        </Route>
        <Route path={`${path}reviews`}>
          <Reviews />
        </Route>
        <Route path={`${path}menu`}>
          <Menu />
        </Route>
        <Route path={`${path}taps`}>
          <Taps />
        </Route>
        <Route path={`${path}lorem-ipsum`}>
          <LoremIpsum />
        </Route>
        <Route path={`${path}color-generator`}>
          <ColorGenerator />
        </Route>
        <Route path={`${path}grocery`}>
          <Grocery />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
