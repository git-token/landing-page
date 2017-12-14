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

  componentWillMount() {
    const { dispatch, Actions: { account } } = this.props

  }

  componentDidMount() {
    const { dispatch, Actions: { account } } = this.props
    setTimeout(() => {
      account.getProfile({})
    }, 3000)



    // dispatch(account.handleMessages())
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
        fontWeight: '400'
      }}>
        <Welcome />
        <br/>
        <Newsletter />
      </div>
    );
  }
}

const mapStoreToProps = (store, props) => {
  return {
    Actions: store.Actions
  }
}

const Body = connect(mapStoreToProps)(BodyComponent)

export default Body
