import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>APP</h1>
        </div>
        <div className="row">
          <div className="col-4 bg-warning">hello</div>
        </div>
      </div>
    );
  }
}

export default App;
