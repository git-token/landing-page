import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  Row, Col, Panel
} from 'react-bootstrap'

class WelcomeComponent extends Component {
  constructor(opts) {
    super(opts)
  }



  render() {
    return (
      <div style={{ textAlign: 'center', background: 'linear-gradient(45deg, #0c0019, #493f5b)'}}>
        <Row>
          <Col sm={8}>
            <div style={{ marginTop: '100px' }}>
              <Panel style={{ backgroundColor: 'rgba(0,0,0,0.5)', marginLeft: '25px', marginRight: '25px' }}>
                <img style={{ width: "100%"  }} src="./src/assets/images/demo.gif" />
              </Panel>
            </div>
          </Col>
          <Col sm={4}>
	    <div style={{ textAlign: 'center', color: 'white', marginTop: '250px', marginRight: '25px' }}>
              <h3>
		Open-source software for GitHub organizations to incentivize collaboration and development. 
	      </h3>
	      <br/>
	      <h3>
		Issue and distribute ERC-20 Ethereum tokens when contributions are made to a repository.
	      </h3>
	      <br/>
	      <h3>
		Auction issued tokens to raise funding for development costs.
	      </h3>
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

const Welcome = connect(mapStoreToProps)(WelcomeComponent)

export default Welcome
