import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up"
      },
      {
        id: 2,
        title: "go sleep"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  chandleChange = e => {
    console.log(e);
  };
  chandleSubmit = e => {
    console.log("changle submit");
  };
  clearList = () => {
    console.log("clearing");
  };
  handleDelete = id => {
    console.log(`handle e delete ${id}`);
  };
  handleEdit = id => {
    console.log(`handle eedit ${id}`);
  };
  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Input event:</h3>

            <TodoInput
              item={this.state.item}
              handleChange={this.chandleChange}
              handleSubmit={this.chandleSubmit}
              editItem={this.state.editItem}
            />

            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
