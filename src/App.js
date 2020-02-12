import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./components/courses/Courses";
import { Provider } from "./components/context";
import Header from "./components/Header";
import CourseDetail from "./components/courses/CourseDetail";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Provider value={this.state}>
        <div>
          <div>
            <Header />
            <hr />
          </div>
        </div>
        <Router>
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route path="/courses/:id" component={CourseDetail} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
