import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import countdown from 'countdown'

import {
  Row, Col, Panel
} from 'react-bootstrap'

import RoadMapEvent from '../Layout/RoadMapEvent.jsx'

class RoadMapComponent extends Component {
  constructor(opts) {
    super(opts)
  }


  render() {
		const { main: { roadmap } } = this.props


		let events = () => {
			return roadmap.map((item, i) => {
      	const { title, description, gif, startDate, endDate, features, milestoneUrl } = item
      	return (
        	<RoadMapEvent
            index={i}
            title={title}
            description={description}
            gif={gif}
            startDate={startDate}
            endDate={endDate}
            features={features}
            key={i}
            milestoneUrl={milestoneUrl}
          />
      	);
    	})
		}

		return (
			<div>
				<Row style={{ background: 'linear-gradient(45deg, #0c0019, #493f5b)' }}>
          <Col sm={12}>
						<div style={{ color: 'white', textAlign: 'center', marginBottom: '-100px' }}>
              <h1 style={{ fontSize: '72px' }}>Development Road Map</h1>
            </div>
					</Col>
					<Col sm={5}/>
          <Col sm={7}>
              <div style={{ marginLeft: '-150px' }}>
                <svg height="200px" viewBox="0 0 400 200">

									<path d="M 250 100 L 250 200 "
                    fill="transparent"
                    strokeLinejoin={"round"}
                    strokeDasharray={"30,30"}
                    stroke="#cc5333"
                    strokeWidth="12"
                  />


                  <circle cx="250" cy="200" r="14" fill="#cc5333"/>
                  <circle cx="250" cy="200" r="8" fill="#210b49"/>
                </svg>
            </div>
          </Col>
        </Row>
				{events()}
			</div>
		);

  }

}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const RoadMap = withRouter(connect(mapStoreToProps)(RoadMapComponent ))

export default RoadMap
