import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import countdown from 'countdown'

import {
  Row, Col, ButtonGroup, Button
} from 'react-bootstrap'

import {
  MainLogo,
  ExchangeLogo,
  NetworkLogo,
  RegistryLogo,
  Crane
} from '../SVG/index'

class HeaderComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  componentDidMount() {
    const { dispatch, main: { roadmap } } = this.props;

    setInterval(() => {
      let timeRemaining = countdown(new Date(roadmap[0].endDate)).toString()
      dispatch({ type: 'SET_COUNTDOWN', value: timeRemaining })
    }, 1000)

  }

  selectRoute (route) {
		const { dispatch } = this.props;
		dispatch({ type: 'SET_ROUTE', value: route });
	}

  render() {
    const { main: { timeRemaining } } = this.props

    return (
      <div style={{ background: 'linear-gradient(135deg, #0c0019, #493f5b)', color: 'white' }}>
        <div style={{ position: 'fixed', width: "100%", zIndex: '3', backgroundColor: 'rgba(0,0,0,0.2)', height: '75px' }}>
          <Row>
            <Col sm={4}/>
            <Col sm={8}>
              <div style={{ textAlign: 'right', marginRight: '50px', marginLeft: '100px' }}>
                <ButtonGroup>
                  {/* <Button onClick={this.selectRoute.bind(this, 'roadmap')} bsStyle={'link'}>Road Map</Button> */}
                  <Button bsStyle={'link'}><a href="https://github.com/git-token" target="_blank">GitHub</a></Button>
                  <Button bsStyle={'link'}><a href="https://gitter.im/git-token/Lobby" target="_blank">Gitter</a></Button>
                  <Button bsStyle={'link'}><a href="https://medium.com/gittoken" target="_blank">Publications</a></Button>
  								<Button bsStyle={'link'}><a href="https://github.com/git-token/documentation/wiki/Motivation" target="_blank">Wiki</a></Button>
  							</ButtonGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <MainLogo height={"100px"} style={{ marginTop: '-50px' }} />
              {/* <svg height="100px" viewBox="0 0 400 400" style={{ marginTop: '-50px'}}>
                <path d="M 250 200 L 350 150 L 350 250 L 250 300 L 150 250 L 150 150 Q 250 100 250 100 L 250 100 L 315 135 "
                  fill="transparent"
                  strokeLinejoin={"round"}
                  stroke="#cc5333"
                  strokeWidth="12"
                />

                <circle cx="315" cy="135" r="14" fill="#cc5333"/>
                <circle cx="315" cy="135" r="8" fill="#210b49"/>
                <circle cx="250" cy="200" r="14" fill="#cc5333"/>
                <circle cx="250" cy="200" r="8" fill="#210b49"/>
              </svg> */}
            </Col>
            <Col sm={8} />
          </Row>
        </div>
        <Row>
          <Col sm={12}>
            {/* <div style={{ height: "450px", textAlign: 'center', marginTop: '100px', marginBottom: '500px' }}>
              <MainLogo width={"25%"} />
              <ExchangeLogo width={"25%"} />
              <NetworkLogo width={"25%"} />
              <RegistryLogo width={"25%"} />
              <Crane width={"25%"} />
            </div>
            <div style={{ height: "450px", textAlign: 'center', marginTop: '100px', marginBottom: '500px' }}>

            </div> */}
            <div style={{ marginTop: "200px", textAlign: 'center', marginBottom: '500px' }}>
              <RegistryLogo height={"350px"} />

              {/* <svg height="350px" viewBox="0 0 400 400" style={{ marginLeft: '-90px' }}>
                <path d="M 250 200 L 350 150 L 350 250 L 250 300 L 150 250 L 150 150 Q 250 100 250 100 L 250 100 L 315 135 "
                  fill="transparent"
                  strokeLinejoin={"round"}
                  stroke="#cc5333"
                  strokeWidth="12"
                />

                <circle cx="315" cy="135" r="14" fill="#cc5333"/>
                <circle cx="315" cy="135" r="8" fill="#2a1e38"/>
                <circle cx="250" cy="200" r="14" fill="#cc5333"/>
                <circle cx="250" cy="200" r="8" fill="#2a1e38"/>
              </svg> */}
              <h1 style={{ fontSize: '72px', marginTop: '-50px' }}>GitToken</h1>
              <br/>
              <br/>
              <h2 >Issue and Earn Ethereum ERC20 Tokens for your GitHub Contributions</h2>
              <br/>
              <br/>
              <br/>
              <h3>COUNTDOWN TO ALPHA RELEASE</h3>
              <h2>{timeRemaining}</h2>
              <br/>
              <br/>
              {/* <div style={{
                width: '30%',
                margin: 'auto',
                display: 'block',
                marginTop: '25px'
              }}>
                <Button
                  disabled={true}
                  bsStyle={'primary'}
                  block>
                  <a
                    href="https://gittoken.io"
                    target="_blank"
                    style={{ color: 'white' }}>
                    Demo Alpha
                  </a>
                </Button>
              </div> */}
            </div>
          </Col>
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

const Header = withRouter(connect(mapStoreToProps)(HeaderComponent))

export default Header
