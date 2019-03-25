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
    setTimeout(() => {
      var bg = document.getElementById("submit-autho");
      if (
        this.state.editItem === false &&
        this.state.item.length > 0 &&
        this.state.item[this.state.item.length - 1] !== " "
      ) {
        bg.style.backgroundColor = "#007bff";
      } else if (this.state.editItem === false) {
        bg.style.backgroundColor = "rgba(0, 123, 255, 0.3)";
      }
    }, 100);

    // console.log(e.target.value);
    //change input value
    return this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    //stop refreshing the browser after clicking submit button
    e.preventDefault();

    var bg = document.getElementById("submit-autho");
    bg.style.backgroundColor = "rgba(0, 123, 255, 0.3)";

    if (
      this.state.item.length > 0
      // &&
      // this.state.item[this.state.item.length - 1] !== " "
    ) {
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
    var bg = document.getElementById("submit-autho");
    bg.style.backgroundColor = "green";
    //display list that not having the item
    const filteredItems = this.state.items.filter(item => item.id !== id);
    //select single item to edit
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      //keep (in state) the same id passed in handleEdit method
      id: id,
      editItem: true
    });
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
