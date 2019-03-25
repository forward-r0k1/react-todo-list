import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./app.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    // console.log(e.target.value);
    //change input value
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    //stop refreshing the browser after clicking submit button
    e.preventDefault();
    if (this.state.item.length > 0) {
      const newItem = {
        id: this.state.id,
        title: this.state.item
      };
      const updatedItems = [...this.state.items, newItem];
      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false
      });
    }
    // else do something
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    // only display items that dont have this id
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
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
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
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
