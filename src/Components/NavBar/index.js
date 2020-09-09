import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

import RightMenu from './RightMenu'
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
        	<div className="logo pt3 pb3 pl3 grow">
        		<a href="/"><img style={{width: '150px'}} alt="Name-Logo" src={Logo}></img></a>
        	</div>
        	<div className="menuCon">
				    <div className="rightMenu pl3 pr3">
	        			<RightMenu />
				    </div>
				    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
		          <span className="barsBtn"></span>
		        </Button>
				    <Drawer
							className="drawer"
		          title="Gaurav Baid"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		          <RightMenu />
		        </Drawer>

        	</div>
        </nav>
    );
  }
}

export default Navbar;
