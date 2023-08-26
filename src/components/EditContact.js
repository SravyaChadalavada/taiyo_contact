import React from "react";

class EditContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2><center>Add Contact</center></h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label id="ki">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <center><button id="ty">Add</button></center>
        </form>
      </div>
    );
  }
}

export default EditContact;