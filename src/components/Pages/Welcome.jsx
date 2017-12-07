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

import MainLogo from 'gittoken-svg-icons/dist/MainLogo'

class WelcomeComponent extends Component {
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
        <Grid>
          <Row>
            <Col sm={12} xs={12} md={6} lg={6}>
              <blockquote>
                <h1 style={{ fontSize: '48px' }}>Earn Reward Points [Ethereum Tokens] for Contributing to GitHub Organizations</h1>
              </blockquote>
              <br/>
              <Row>
                <Col sm={6}>
                  <Button bsSize={'sm'} bsStyle={'warning'} style={{ margin: '5px' }} block>Register your organization</Button>
                </Col>
                <Col sm={6}>
                  <Button bsSize={'sm'} bsStyle={'info'} style={{ margin: '5px' }} block>Learn More About GitToken</Button>
                </Col>
              </Row>

              <br/>
            </Col>
            <Col sm={12} xs={12} md={6} lg={6}>
              {this.gif()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const Welcome = connect(mapStoreToProps)(WelcomeComponent)

export default Welcome
