import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Layout, Affix } from "antd";

import AppRoute from "./Utils/AppRoute";
import Home from "./Views/Home";

import "./App.css";
import Navbar from "./Components/NavBar";

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       PercentageA: 50,
       PercentageB: 50,
    }
  }

  ChangeShowPercent = (val) => {
    this.setState({
      PercentageA: val,
    })
  }
  
  ChangeHidePercent = (val) => {
    this.setState({
      PercentageB: val,
    })
  }

  render() {
    return (
      <div>
        <Affix><Navbar /></Affix>
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
