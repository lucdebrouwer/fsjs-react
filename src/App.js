import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:5000/api/courses').then(req => {
      return req.json();
    }).then(data => {
      console.log("[RETRIEVING] Data: ", data);
    })
  }
  render() {
    return(<div>some react content in app</div>)
  }
}

export default App;