import React, { Component } from "react";
import Courses from "./components/courses/Courses";
import Header from "./components/Header";
import { Provider } from "./components/context";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          id: 1,
          title: "My course",
          description: "Some course description"
        },
        {
          id: 2,
          title: "My Second Course",
          description: "Some course description"
        },
        {
          id: 3,
          title: "My Third course",
          description: "Some course description"
        }
      ]
    };
  }

  render() {
    return (
      <Provider value={this.state}>
        <div>
          <div>
            <Header />
            <hr />
            <Courses />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
