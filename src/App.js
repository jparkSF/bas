import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./App/Pages/Main";
import Info from "./App/Pages/Info";
import Contact from "./App/Pages/Contact";
import EventDetail from "./App/Pages/EventDetail";
import CompanyDetail from "./App/Pages/CompanyDetail";
import UniversityDetail from "./App/Pages/UniversityDetail";
import Footer from "./App/Footer";
import Nav from "./App/Nav";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/info" component={Info} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/event/:eventID" component={EventDetail} />
          <Route
            exact
            path="/company-info/:companyID"
            component={CompanyDetail}
          />
          <Route
            exact
            path="/university/:schoolID"
            component={UniversityDetail}
          />
          <Route path="/" component={Main} />
        </Switch>
        <Footer />
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
