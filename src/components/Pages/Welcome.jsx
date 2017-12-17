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
        {/* <img style={{ width: "100%" }} src="https://raw.githubusercontent.com/git-token/media/master/png/git_token_logo.png" /> */}
        {/* <img style={{ width: "100%" }} src="https://files.slack.com/files-pri/T52GCLQE5-F8C1VD355/screen_shot_2017-12-06_at_8.52.13_pm.png" /> */}
      </div>

    )
  }

  signup() {
    location.href = "https://gittoken.io/auth/github"
  }

  render() {

    return (
      <div style={{
        // background: 'linear-gradient(135deg, #0c0019, #493f5b)',
        fontWeight: '100',
        paddingTop: '-50px',
        marginBottom: '50px'
      }}>
        <Grid>
          <Row>
            <Col sm={12} xs={12} md={6} lg={6} style={{ zIndex: '2', position: 'relative' }}>
              <blockquote>
                <p style={{ fontSize: '55px' }}>Issue Reward Points for GitHub Contributions</p>
                <p style={{ fontSize: '26px' }}>
                  <i className="text-success">Developers</i>,
                  <i className="text-warning"> Project Managers</i>, and
                  <i className="text-info"> Users</i> earn Ethereum ERC20 tokens when contributing to GitToken enabled organizations
                </p>
              </blockquote>
              <br/>
              <Button
                bsSize={'lg'}
                bsStyle={'info'}
                style={{ margin: '5px' }}
                onClick={this.signup.bind(this)}
                block
              >
                Register & Enable Your Organization
              </Button>
            </Col>
            <Col smHidden xsHidden md={6} lg={6}>
              <Row>
                {/* {this.gif()} */}
                <svg width={"200%"} viewBox="0 0 1000 1000" style={{
                  zIndex: '-1',
                  margin: '-300px',
                  marginBottom: '-150px'
                }}>

                  <defs>
                    <radialGradient id="g1" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                        <stop stopColor="white" offset="10%"/>
                        <stop stopColor="#320551" offset="100%"/>
                    </radialGradient>
                  </defs>

                  <circle cx="500" cy="500" r="400" style={{fill: 'url(#g1)'}}/>

                  <path d="M 520 500 L 730 500 L 730 600 L 500 700 L 300 600 L 300 400 L 500 300 L 710 390 "
                    fill="transparent"
                    strokeLinejoin={"round"}
                    stroke="#cc5333"
                    strokeWidth="36"
                  />

                  <circle
                    cx="500"
                    cy="500"
                    r="26"
                    fill="transparent"
                    stroke="#cc5333"
                    strokeWidth="16"
                  />

                  <circle
                    cx="730"
                    cy="400"
                    r="26"
                    fill="transparent"
                    stroke="#cc5333"
                    strokeWidth="16"
                  />


                  {/* <path d="M 370 250 L 550 250 L 550 350 L 350 450 L 150 350 L 150 150 L 350 50 L 530 140 "
          					fill="transparent"
          					strokeLinejoin={"round"}
          					stroke="#cc5333"
          					strokeWidth="36"
          				/>

                  <circle
                    cx="350"
                    cy="250"
                    r="26"
                    fill="transparent"
                    stroke="#cc5333"
          					strokeWidth="16"
                  />

                  <circle
                    cx="550"
                    cy="150"
                    r="26"
                    fill="transparent"
                    stroke="#cc5333"
          					strokeWidth="16"
                  /> */}

          			</svg>
              </Row>
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
