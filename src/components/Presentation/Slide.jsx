import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import {
  Panel, Row, Col, ButtonGroup, Button
} from 'react-bootstrap'

class SlideComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  titleSlide({ slide }) {
    return (
      <div>
        <Col sm={2}/>
        <Col sm={8}>
          <br/>
          {slide['description'].map((d, i) => {
            return (
              <div key={i}>
                <h1>{d}</h1>
                <br/>
              </div>
            )
          })}
        </Col>
        <Col sm={2}/>
      </div>
    )
  }

  contentSlide({ slide }) {
    const { gifs, bullets } = slide
    return (
      <div>
        <Col sm={6}>
          <ul style={{ fontSize: '36px' }}>
            { bullets.map((item, i) => { return (<li key={i}>{item}</li>) }) }
          </ul>
        </Col>
        <Col sm={6}>
          { gifs.map((gif, i) => { return (<img width={'100%'} key={i} src={gif} />) }) }
        </Col>
      </div>
    )
  }

  renderSlide({ slide }) {
    const { title, description, gifs, bullets, subtitle, code } = slide
    if (gifs.length && bullets.length) {
      return this.contentSlide({ slide })
    } else {
      return this.titleSlide({ slide })
    }
  }

  render() {
    const { slide } = this.props
    const { title, subtitle } = slide


    return (
			<div style={{ height: '900px', paddingLeft: '50px', paddingRight: '50px'}}>
				<Row style={{ textAlign: 'left', paddingBottom: '15px' }}>
					<Col sm={12}>
						<h1>{title} | <small>{subtitle}</small></h1>
						<hr/>
					</Col>
			</Row>
			{this.renderSlide({ slide })}
		 </div>
		)
  }
}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const Slide = connect(mapStoreToProps)(SlideComponent)

export default Slide
