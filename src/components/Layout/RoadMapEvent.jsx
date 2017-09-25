import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  Row, Col, Panel, Button
} from 'react-bootstrap'

class RoadMapEventComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  goToMilestone(url) {
    window.location.href(url)
  }

  render() {
		const { gif, title, description, startDate, endDate, features, index, milestoneUrl  } = this.props

		return (
        <Row style={{ background: `linear-gradient(${index % 2 == 0 ? "-225" : "45"}deg, #0c0019, #493f5b)`, height: '800px' }}>
          <Col lg={1} />
					<Col sm={12} lg={4}>
            <div style={{
              textAlign: 'left',
              color: 'white',
              zIndex: '2',
              position: 'relative',
              marginRight: '15px',
              marginLeft: '15px',
              backgroundColor: 'rgba(0,0,0,0.5)',
              paddingRight: '15px',
              paddingLeft: '15px',
              paddingTop: '15px'
            }}>
              <p>{endDate}</p>
              <h2>{title} </h2>
							<hr/>
							<h3>{description}</h3>
              <br/>
              <h4>Key Features</h4>
              <ul style={{ fontSize: '18px' }}>
                {features.map((feature, i) => {
                  return ( <li style={{ marginBottom: '5px' }} key={i}>{feature}</li> )
                })}
              </ul>
              <br/>
              <a href={milestoneUrl} target="_blank"><Button bsStyle={'info'} block >See the Milestone on GitHub</Button></a>
              <br/>
						</div>
					</Col>
					<Col sm={12} lg={1}>
							<div style={{ marginLeft: '-150px', zIndex: '1', position: 'absolute' }}>
              	<svg height="800px" viewBox="0 0 300 800">
              		<path d="M 250 0 L 250 800 "
                		fill="transparent"
                		strokeLinejoin={"round"}
										strokeDasharray={"30,30"}
                		stroke="#cc5333"
                		strokeWidth="12"
              		/>


              		<circle cx="250" cy="0" r="14" fill="#cc5333"/>
              		<circle cx="250" cy="0" r="8" fill="#210b49"/>
									<circle cx="250" cy="200" r="22" strokeWidth="8" stroke="#cc5333" fill="white"/>
              		<circle cx="250" cy="800" r="14" fill="#cc5333"/>
              		<circle cx="250" cy="800" r="8" fill="#210b49"/>
            		</svg>
						</div>
          </Col>
					<Col sm={12} lg={6}>
            <Panel style={{ backgroundColor: 'rgba(0,0,0,0.5)',  marginRight: '15px', marginLeft: '15px', height: '100%', zIndex: '2', position: 'relative' }}>
							<img width={"100%"} src={gif} />
						</Panel>
					</Col>
        </Row>
    )
  }

}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const RoadMapEvent = connect(mapStoreToProps)(RoadMapEventComponent)

export default RoadMapEvent
