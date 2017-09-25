import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  Row, Col, ProgressBar
} from 'react-bootstrap'

class FooterComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  render() {
    return (
      <div style={{ height: '600px', background: 'linear-gradient(45deg, #0c0019, #493f5b)', color: 'white' }}>
        <Row style={{ marginBottom: '500px'}}>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
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
