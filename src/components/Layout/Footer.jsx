import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  Row, Col, ProgressBar
} from 'react-bootstrap'

import {
  MainLogo
} from '../SVG/index'

class FooterComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  render() {
    return (
      <div style={{ background: 'linear-gradient(135deg, #0c0019, #493f5b)', color: 'white' }}>
        <Row style={{ }}>
          <Col sm={4}></Col>
          <Col sm={4}>
            <div style={{
                textAlign: 'center',
                marginBottom: '50px',
                paddingTop: '100px'
              }}>
              <MainLogo height={"100px"}/>
            <h4>GitToken Copyright 2017-2018</h4>
            </div>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </div>
    )
  }

}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const Footer = connect(mapStoreToProps)(FooterComponent)

export default Footer
