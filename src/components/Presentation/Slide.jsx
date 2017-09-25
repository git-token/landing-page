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
	

  render() {
    const { slide: { title, description, gifs, bullets, subtitle, code } } = this.props
	
			
    return (
			<div style={{ paddingLeft: '50px', paddingRight: '50px'}}>
				<Row style={{ textAlign: 'left', paddingBottom: '15px' }}>
					<Col sm={12}> 
						<h1>{title} | <small>{subtitle}</small></h1>
						<hr/>
					</Col>
			</Row>
			<Row>
				<Col sm={6}>

					<ul style={{ fontSize: '36px' }}>
						{ bullets.map((item, i) => { return (<li key={i}>{item}</li>) }) }
					</ul>
				</Col>
				<Col sm={6}>
					{ gifs.map((gif, i) => { return (<img width={'100%'} key={i} src={gif} />) }) }
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

const Slide = connect(mapStoreToProps)(SlideComponent)

export default Slide
