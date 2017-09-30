import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Slide } from './index'

import {
  Row, Col, ButtonGroup, Button
} from 'react-bootstrap'

class PresentationComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  componentDidMount() {
    const { dispatch, main: { roadmap } } = this.props;

  }

	changeSlide(s) {
		const { dispatch, main: { activeSlide } } = this.props;
    let value = Number(activeSlide) + Number(s)
		dispatch({ type: 'SET_SLIDE', value })
	}

  navigation() {
    const { main: { activeSlide, presentation } } = this.props
    return (
      <Row style={{ paddingBottom: '50px', textAlign: 'center' }}>
          <ButtonGroup>
            <Button
              onClick={ this.changeSlide.bind(this, -1) }
              bsStyle={'primary'}
              disabled={ activeSlide == 0 }>
                Previous Slide
            </Button>
            <Button
              onClick={ this.changeSlide.bind(this, 1) }
              bsStyle={'primary'}
              disabled={ +activeSlide == +(presentation.length - 1)}>
                Next Slide
            </Button>
          </ButtonGroup>
      </Row>
    )
  }

  render() {
    const { main: { activeSlide, presentation } } = this.props
    const slide = presentation[activeSlide]

    const showSlide = ({ slide }) => {
      if (slide.title) {
        return (<Slide slide={slide} />)
      }
    }

    return (
			<div style={{ background: 'linear-gradient(45deg, #0c0019, #493f5b)', color: 'white' }}>
        <div style={{ height: '700px' }}>
          <Row>
    				{showSlide({ slide })}
    			</Row>
        </div>
        <br/>
  			{this.navigation()}
			</div>
		)
  }
}

const mapStoreToProps = (store, props) => {
  return {
    main: store.main
  }
}

const Presentation = withRouter(connect(mapStoreToProps)(PresentationComponent))

export default Presentation
