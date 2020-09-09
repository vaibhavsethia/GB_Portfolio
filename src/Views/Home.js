import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.Text}</h1>
      </div>
    );
  }
}

export default Home;
