import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Layout, Affix } from "antd";

import AppRoute from "./Utils/AppRoute";
import Home from "./Views/Home";

import "./App.css";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Affix></Affix>
        <Content>
          <Switch>
            <AppRoute exact path="/" component={Home} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
