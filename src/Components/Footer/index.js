import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'

import './styles.css'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Row className="mb2">
          <Col xl={8} lg={8} md={8} sm={24} xs={24} />
          <Col xl={8} lg={8} md={8} sm={24} xs={24}><div className="white f5 tc">Gaurav Baid <span>©</span> 2020</div></Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24} />
        </Row>
      </div>
    )
  }
}

export default Footer
