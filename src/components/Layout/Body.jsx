import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonGroup,
  Button
} from 'react-bootstrap'

import {
  Welcome,
  Newsletter
} from '../Pages'

class BodyComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  gif() {
    return (
      <div style={{ textAlign: 'center' }}>
        <img style={{ width: "100%" }} src="https://raw.githubusercontent.com/git-token/media/master/gifs/git-token-register.gif" />
      </div>

    )
  }

  render() {

    return (
      <div style={{
        // background: 'linear-gradient(135deg, #0c0019, #493f5b)',
        fontWeight: '100'
      }}>
        <Welcome />
        <Newsletter />
      </div>
    );
  }
}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const Body = connect(mapStoreToProps)(BodyComponent)

export default Body
