import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    // console.log(this.props);
    const { editItem, handleChange, handleSubmit, item } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary">
                <i className="fas fa-book text-white" />
              </div>
            </div>
            {/* input value set to this.props.item on change*/}
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add new item..."
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            id="submit-autho"
            className={
              editItem
                ? "btn btn-block btn-success editbutton mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "EDIT" : "SUBMIT"}
          </button>
        </form>
      </div>
    );
  }
}
