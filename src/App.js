import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, Affix } from "antd";

import Home from "./Views/Home";

import "./App.css";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       PercentageA: 100,
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
        <Affix>
          <Navbar 
            ShowPercentage = {this.state.PercentageA}
            HidePercentage = {this.state.PercentageB}
          />
        </Affix>
        <Content className="content">
          <Switch>
            <Route exact path="/" render={(props) => <Home Text="test" />}/>
            {/* <AppRoute  Text="Yo Yo"/> */}
          </Switch>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
