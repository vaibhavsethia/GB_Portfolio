import React, { Component } from 'react';
import { Drawer, Button, Menu, Progress } from 'antd';

import Logo from '../../Images/Logo.png'

import './styles.css'

class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <nav className="menuBar">
        	<div className="logo pl3 pt1 grow">
        		<a href="/"><img style={{width: '131px'}} alt="Name-Logo" src={Logo}></img></a>
        	</div>
        	<div style={{float : 'right'}} >
						<Menu mode="horizontal">
							<Menu.Item className="pl2" key="home">
								<Progress type="circle" percent={this.props.ShowPercentage} width={50}/>
							</Menu.Item>
							<Menu.Item className="pl2" key="home">
								<Progress type="circle" percent={this.props.HidePercentage} width={50}/>
							</Menu.Item>
						</Menu>
					</div>
        </nav>
    );
  }
}

export default Navbar;
