import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import Highlight from 'react-highlight'

import {
  Panel, Row, Col, ButtonGroup, Button
} from 'react-bootstrap'

class SlideComponent extends Component {
  constructor(opts) {
    super(opts)
  }

  showCode({ code, lang, size, key }){
    return (
      <Highlight className={lang} key={key}>
        <p style={{ fontSize: size ? size : '100%' }}>{code}</p>
      </Highlight>
    )
  }

  titleSlide({ slide }) {
    const { description, code } = slide

    return (
      <div>
        <Col sm={2}/>
        <Col sm={8}>
          {description.map((d, i) => {
            return (
              <div key={i} >
                <div style={{ textAlign: 'center' }}>
                  <h3>{d}</h3>
                </div>
                <br/>
              {this.showCode({ code, lang: 'md', size: '150%' })}
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
    const { gifs, bullets, code, title } = slide

    let list = () => {
      return (
        <ul style={{ fontSize: '24px' }}>
          { bullets.map((item, i) => {
              return (<div key={i}><li >{item}</li><br/></div>)
            })
          }
        </ul>
      )
    }

    return (
      <div>
        <Col sm={6}>
          { bullets.length > 0 ?
              list() : this.showCode({ code: slide['code'], lang: 'md', size: '120%', key: title })
          }
        </Col>
        <Col sm={6}>
          { gifs.map((gif, i) => { return (<img width={`${String(100/(i+1))}%`} key={i} src={gif} />) }) }
        </Col>
      </div>
    )
  }

  renderSlide({ slide }) {
    const { title, description, gifs, bullets, subtitle, code } = slide
    if (
      gifs.length && bullets.length ||
      gifs.length && description ||
      code.length && gifs.length
    ) {
      return this.contentSlide({ slide })
    } else {
      return this.titleSlide({ slide })
    }
  }

  render() {
    const { slide } = this.props
    const { title, subtitle } = slide


    return (
			<div style={{ paddingLeft: '50px', paddingRight: '50px'}}>
				<Row style={{ textAlign: 'left', paddingBottom: '15px' }}>
					<Col sm={12}>
						<h1 style={{ marginLeft: '60px' }}>{title} | <small>{subtitle}</small></h1>
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
