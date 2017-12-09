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
    location.href = "https://alpha.gittoken.io/auth/github"
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
                <svg height={"950px"} viewBox="0 0 400 400" style={{ marginLeft: '-200px', marginTop: '-250px', zIndex: '-1' }}>

                  <defs>
                    <radialGradient id="g1" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                        <stop stopColor="white" offset="10%"/>
                        <stop stopColor="#320551" offset="100%"/>
                    </radialGradient>
                  </defs>

                  <circle cx="200" cy="200" r="200" style={{fill: 'url(#g1)'}}/>


                  <path d="M 200 200 L 300 150 L 300 250 L 200 300 L 100 250 L 100 150 L 200 100 L 255 127 "
          					fill="transparent"
          					strokeLinejoin={"round"}
          					stroke="#cc5333"
          					strokeWidth="12"
          				/>

                  <circle cx="255" cy="127" r="14" fill="#cc5333"/>
          				<circle cx="255" cy="127" r="8" fill="#f0e2ff"/>
          				<circle cx="200" cy="200" r="14" fill="#cc5333"/>
          				<circle cx="200" cy="200" r="8" fill="#fff"/>





          				{/* <path className={"path"} d="M 300 150 L 200 100 L 100 150 L 100 250 L 200 300 L 300 250 L 300 150 L 200 100 "
          					fill="transparent"
          					strokeLinejoin={"round"}
          					stroke="#cc5333"
          					strokeWidth="12"
          					// strokeDasharray={"5, 5"}
          					// strokeDashoffset={"200"}
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
